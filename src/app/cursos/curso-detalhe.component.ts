import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CursoService } from './curso.service';
import { Curso, Empresa } from './curso.model'

@Component ({
    moduleId: module.id,
    selector: 'curso-detalhe',
    templateUrl: 'curso-detalhe.component.html',
})
export class CursoDetalheComponent {

    curso: Curso;
    private isNew: boolean = true;

    empresas: Empresa[] = [
        {IdEmpresa: 1, NomeEmpresa: "Avon"},
        {IdEmpresa: 2, NomeEmpresa: "Latam"},
        {IdEmpresa: 3, NomeEmpresa: "Porto Seguro"},
        {IdEmpresa: 4, NomeEmpresa: "Estacio"},
        {IdEmpresa: 5, NomeEmpresa: "Sebrae"},
        {IdEmpresa: 6, NomeEmpresa: "Sotreq"},
        {IdEmpresa: 7, NomeEmpresa: "Seara"},
        {IdEmpresa: 8, NomeEmpresa: "Mary Key"},
        {IdEmpresa: 9, NomeEmpresa: "Martins"}
    ];
    empresaAtual: Empresa;


    constructor(
        private cursoService: CursoService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.curso = new Curso(0, '', '', '', '', 0, '');

        console.log('chamou');

        this.empresaAtual = new Empresa(1, 'Avon');
        this.curso.IdEmpresa = this.empresaAtual.IdEmpresa;

        console.log(this.curso);

        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];

            console.log(+params['id']);

            if (id) {

                this.isNew = false;

                this.cursoService.getCurso(id)
                .then((curso: Curso) => {
                this.curso = curso;
                 })        
            }
        });
    }

    getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-group': true,
            'is-invalid': !isValid && !isPristine,
            'is-valid': isValid && !isPristine
        };
    }

    getFormControlClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    }

    
    onSubmit(): void {
        let promise;

        if (this.isNew){
            console.log(this.empresaAtual.IdEmpresa);
            console.log(this.curso);
            this.curso.Status = "Active";
            promise = this.cursoService.create(this.curso);
        } else {
            console.log('alterar curso');
            promise = this.cursoService.update(this.curso);
        }

        promise.then(curso => this.goBack());

    }

    goBack(): void {
        this.location.back();
    }

    setEmpresa(empresa: Empresa): void {
        this.empresaAtual = empresa;
        this.curso.IdEmpresa = +empresa;
        console.log(this.curso.IdEmpresa);
        }
    
    getTitulo() {
            if (this.isNew) {
                return 'Cadastrar novo curso';
            }
            else {
                return 'Alterar curso';
            }
        }
}