import { Component } from '@angular/core';

@Component({
  selector: 'ServerStatusComponent',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus: string = 'online';
}
