import { NgModule } from '@angular/core'
import { CursosListaComponent } from './cursos-lista.component'
import { CommonModule } from '@angular/common';
import { CursoRoutingModule } from './curso-routing.module';
import { CursoDetalheComponent } from './curso-detalhe.component';
import { CursoService } from './curso.service';
import { FormsModule } from '@angular/forms';

@NgModule ({
    imports: [
        CommonModule,
        CursoRoutingModule,
        FormsModule
    ],
    declarations: [
        CursosListaComponent,
        CursoDetalheComponent
    ],
    exports: [  
        CursosListaComponent
    ],
    providers: [
        CursoService
    ]
})

export class CursosModule {


}