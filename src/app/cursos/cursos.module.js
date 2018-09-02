"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const cursos_lista_component_1 = require("./cursos-lista.component");
const common_1 = require("@angular/common");
const curso_routing_module_1 = require("./curso-routing.module");
const curso_detalhe_component_1 = require("./curso-detalhe.component");
const curso_service_1 = require("./curso.service");
const forms_1 = require("@angular/forms");
const curso_busca_component_1 = require("./curso-busca.component");
let CursosModule = class CursosModule {
};
CursosModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            curso_routing_module_1.CursoRoutingModule,
            forms_1.FormsModule
        ],
        declarations: [
            cursos_lista_component_1.CursosListaComponent,
            curso_detalhe_component_1.CursoDetalheComponent,
            curso_busca_component_1.CursoBuscaComponent
        ],
        exports: [
            curso_busca_component_1.CursoBuscaComponent,
            cursos_lista_component_1.CursosListaComponent
        ],
        providers: [
            curso_service_1.CursoService
        ]
    })
], CursosModule);
exports.CursosModule = CursosModule;
//# sourceMappingURL=cursos.module.js.map