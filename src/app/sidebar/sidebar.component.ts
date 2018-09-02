import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'aa', title: 'Grupos Colaborativos',  icon: 'ti-clipboard', class: '' },
    { path: 'aa', title: 'Central de Mensagens',  icon:'ti-folder', class: '' },
    { path: 'curso', title: 'Painel de Cursos',  icon:'ti-pulse', class: '' },
    { path: 'aa', title: 'Configuracoes',  icon:'ti-settings', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
