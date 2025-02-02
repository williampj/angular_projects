import { Component, input } from '@angular/core';
import { Image } from '../../../models/image.model';

@Component({
  selector: 'DashboardItemComponent',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  image = input.required<Image>();
  title = input.required<String>();
}
