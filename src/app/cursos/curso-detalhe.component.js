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
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const curso_service_1 = require("./curso.service");
const curso_model_1 = require("./curso.model");
let CursoDetalheComponent = class CursoDetalheComponent {
    constructor(cursoService, route, location) {
        this.cursoService = cursoService;
        this.route = route;
        this.location = location;
        this.isNew = true;
        this.empresas = [
            { IdEmpresa: 1, NomeEmpresa: "Avon" },
            { IdEmpresa: 2, NomeEmpresa: "Latam" },
            { IdEmpresa: 3, NomeEmpresa: "Porto Seguro" },
            { IdEmpresa: 4, NomeEmpresa: "Estacio" },
            { IdEmpresa: 5, NomeEmpresa: "Sebrae" },
            { IdEmpresa: 6, NomeEmpresa: "Sotreq" },
            { IdEmpresa: 7, NomeEmpresa: "Seara" },
            { IdEmpresa: 8, NomeEmpresa: "Mary Key" },
            { IdEmpresa: 9, NomeEmpresa: "Martins" }
        ];
    }
    ngOnInit() {
        this.curso = new curso_model_1.Curso(0, '', '', '', '', 0, '');
        console.log('chamou');
        console.log(this.empresaAtual);
        this.route.params.forEach((params) => {
            let id = +params['id'];
            console.log(+params['id']);
            if (id) {
                this.isNew = false;
                this.cursoService.getCurso(id)
                    .then((curso) => {
                    this.curso = curso;
                });
            }
        });
    }
    getFormGroupClass(isValid, isPristine) {
        return {
            'form-group': true,
            'is-invalid': !isValid && !isPristine,
            'is-valid': isValid && !isPristine
        };
    }
    getFormControlClass(isValid, isPristine) {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    }
    onSubmit() {
        let promise;
        if (this.isNew) {
            console.log(this.empresaAtual.IdEmpresa);
            console.log(this.curso);
            this.curso.Status = "Active";
            promise = this.cursoService.create(this.curso);
        }
        else {
            console.log('alterar curso');
            promise = this.cursoService.update(this.curso);
        }
        promise.then(curso => this.goBack());
    }
    goBack() {
        this.location.back();
    }
    setEmpresa(empresa) {
        this.empresaAtual = empresa;
        this.curso.IdEmpresa = +empresa;
        console.log(this.curso.IdEmpresa);
    }
};
CursoDetalheComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'curso-detalhe',
        templateUrl: 'curso-detalhe.component.html',
    }),
    __metadata("design:paramtypes", [curso_service_1.CursoService,
        router_1.ActivatedRoute,
        common_1.Location])
], CursoDetalheComponent);
exports.CursoDetalheComponent = CursoDetalheComponent;
//# sourceMappingURL=curso-detalhe.component.js.map