import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ServerStatusComponent } from '../dashboard/server-status/server-status.component';
import { TrafficComponent } from "../dashboard/traffic/traffic.component";
import { TicketsComponent } from '../dashboard/tickets/tickets.component';
import { DashboardItemComponent } from '../dashboard/dashboard-item/dashboard-item.component';
import { DashboardItem } from '../../models/dashboard-item.model';

@Component({
  selector: 'AppComponent',
  standalone: true,
  imports: [
    HeaderComponent, 
    ServerStatusComponent, 
    TrafficComponent, 
    TicketsComponent, 
    DashboardItemComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  dashboardItems: {[key: string]: DashboardItem} = {
    serverStatus: { image: { src: 'status.png', alt: 'A signal symbol'}, title: 'Server Status'},
    traffic: { image: { src: 'globe.png', alt: 'A globe'}, title: 'Traffic'},
    ticket: { image: { src: 'list.png', alt: 'A list of items'}, title: 'Support Tickets'}
  }
}