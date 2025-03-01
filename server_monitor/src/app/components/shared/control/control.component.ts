import { Component, contentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ControlComponent',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control'
  }
})

export class ControlComponent {
  label = input.required<string>();
  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
}
