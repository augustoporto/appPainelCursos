"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const curso_service_1 = require("./curso.service");
const dialog_service_1 = require("../dialog.service");
let CursosListaComponent = class CursosListaComponent {
    constructor(cursoService, dialogService) {
        this.cursoService = cursoService;
        this.dialogService = dialogService;
        // cursos: Curso[] = [];
        //cursos: Observable<Curso[]>;
        this.cursos = [];
    }
    ngOnInit() {
        //   this.cursoService.getCursosTeste().subscribe(
        //     data => { this.cursos = data;
        //                },
        //     error => {  }
        // )
        this.cursoService.getCursos()
            .then((cursos) => {
            this.cursos = cursos;
        }).catch(err => {
            console.log('Aconteceu um erro: ', err);
            this.mostrarMensagem({
                tipo: 'danger',
                texto: 'Ocorreu um erro ao buscar a lista de contatos!'
            });
        });
    }
    onEdition(curso) {
        console.log('botao edicao clicado');
    }
    onDelete(curso) {
        this.dialogService.confirm('Deseja deletar o curso ' + curso.Name + '?')
            .then((canDelete) => {
            if (canDelete) {
                this.cursoService
                    .delete(curso)
                    .then(() => {
                    this.cursos = this.cursos.filter(c => c.Id != curso.Id);
                    this.mostrarMensagem({
                        tipo: 'success',
                        texto: 'Curso deletado!'
                    });
                }).catch(err => {
                    console.log(err);
                    this.mostrarMensagem({
                        tipo: 'danger',
                        texto: 'Ocorreu um erro ao deletar curso!'
                    });
                });
            }
        });
    }
    mostrarMensagem(mensagem) {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if (mensagem.tipo != 'danger') {
            if (this.currentTimeout) {
                clearTimeout(this.currentTimeout);
            }
            this.currentTimeout = setTimeout(() => {
                this.mensagem = undefined;
            }, 3000);
        }
        ;
    }
    montarClasses(tipo) {
        this.classesCss = {
            'alert': true
        };
        this.classesCss['alert-' + tipo] = true;
    }
};
CursosListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cursos-lista',
        templateUrl: 'cursos-lista.component.html',
        providers: [curso_service_1.CursoService]
    }),
    __metadata("design:paramtypes", [curso_service_1.CursoService,
        dialog_service_1.DialogService])
], CursosListaComponent);
exports.CursosListaComponent = CursosListaComponent;
//# sourceMappingURL=cursos-lista.component.js.map