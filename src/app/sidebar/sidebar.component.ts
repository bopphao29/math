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
        title: 'Trang chủ',         
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
        icon:'nc-chart-pie-36',    
        class: '' },
    { 
        path: '/notifications', 
        title: 'Thông báo',     
        icon:'nc-bell-55',    
        class: '' },
    { 
        path: '/user',          
        title: 'Trang cá nhân',      
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
