"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const cursos_lista_component_1 = require("./cursos-lista.component");
const curso_detalhe_component_1 = require("./curso-detalhe.component");
const cursoRoutes = [
    {
        path: 'curso',
        component: cursos_lista_component_1.CursosListaComponent
    },
    // {
    //     path: 'curso/save',
    //     component: CursoDetalheComponent
    // },
    {
        path: 'curso/:id',
        component: curso_detalhe_component_1.CursoDetalheComponent
    }
];
let CursoRoutingModule = class CursoRoutingModule {
};
CursoRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(cursoRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], CursoRoutingModule);
exports.CursoRoutingModule = CursoRoutingModule;
//# sourceMappingURL=curso-routing.module.js.map