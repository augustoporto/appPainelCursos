import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';



import { CursosListaComponent }   from './cursos/cursos-lista.component';
import { CursoDetalheComponent }   from './cursos/curso-detalhe.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'curso',
        pathMatch: 'full',
    },
    {
        path: 'curso',
        component: CursosListaComponent
    },
    {
        path: 'curso/:id',
        component: CursoDetalheComponent
    }
]
    
