import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { NguiMapModule} from '@ngui/map';



import { CursosListaComponent }   from './cursos/cursos-lista.component';
import { DialogService } from './dialog.service';
import { HttpModule } from '@angular/http';
import { CursoDetalheComponent }   from './cursos/curso-detalhe.component';
import { FormsModule } from '@angular/forms';
import { CursosModule } from './cursos/cursos.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    HttpModule,
    FormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    CursosModule

  ],
  providers: [ DialogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
