import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { 
        path: '/dashboard',     
        title: 'Dashboard',         
        icon:'nc-bank',       
        class: '' },
    { 
        path: '/icons',         
        title: 'Icons',             
        icon:'nc-diamond',    
        class: '' 
    },
    { 
        path: '/maths', 
        title: 'Toán',     
        icon:'nc-bell-55',    
        class: '' },
    { 
        path: '/notifications', 
        title: 'Notifications',     
        icon:'nc-bell-55',    
        class: '' },
    { 
        path: '/user',          
        title: 'User Profile',      
        icon:'nc-single-02',  
        class: '' 
    },
    
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
}