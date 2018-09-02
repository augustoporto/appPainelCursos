import { Component, OnInit } from '@angular/core';
import { Curso } from './curso.model'
import { CursoService} from './curso.service'
import { DialogService } from '../dialog.service';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'cursos-lista',
    templateUrl: 'cursos-lista.component.html',
    providers: [CursoService]
})

export class CursosListaComponent implements OnInit {

    public cursos: Curso[] = [];
    mensagem: {};
    classesCss: {};
    private currentTimeout: any;
    

    constructor(
        private cursoService: CursoService,
        private dialogService: DialogService
    ) {}

    ngOnInit(): void {

        this.cursoService.getCursos()
        .then((cursos: Curso[]) => {
            this.cursos = cursos;
            console.log(cursos);
        }).catch(err => {
            console.log('Aconteceu um erro: ', err);
            this.mostrarMensagem({
                tipo: 'danger',
                texto: 'Ocorreu um erro ao buscar a lista de contatos!'
            })
        });
    }

    onEdition(curso: Curso): void {
        console.log('botao edicao clicado');
    }

    onDelete(curso: Curso): void {
        this.dialogService.confirm('Deseja deletar o curso ' + curso.Name + '?')
            .then((canDelete: boolean) => {

                if (canDelete)
                {
                    this.cursoService
                        .delete(curso)
                        .then(() => {
                            
                            this.cursos = this.cursos.filter(c => c.Id != curso.Id);

                            this.mostrarMensagem({
                                tipo: 'success',
                                texto: 'Curso deletado!'
                            })

                        }).catch(err => {
                            console.log(err);
                            this.mostrarMensagem({
                                tipo: 'danger',
                                texto: 'Ocorreu um erro ao deletar curso!'
                            })
                        });
                }

            });
    }

    private mostrarMensagem(mensagem: {tipo: string, texto: string}): void {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if (mensagem.tipo != 'danger'){
        
        if (this.currentTimeout){
            clearTimeout(this.currentTimeout);
        }

        this.currentTimeout = setTimeout(() => {
            this.mensagem = undefined;
        }, 3000)};
    }

    private montarClasses(tipo: string): void {
        this.classesCss = {
            'alert': true
        };
        this.classesCss['alert-' + tipo] = true;
    }

}