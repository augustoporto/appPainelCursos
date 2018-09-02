import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CursosListaComponent } from './cursos-lista.component';
import { CursoDetalheComponent } from './curso-detalhe.component';

const cursoRoutes: Routes = [
    {
        path: 'curso',
        component: CursosListaComponent
    },
    {
        path: 'curso/:id',
        component: CursoDetalheComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(cursoRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CursoRoutingModule {}