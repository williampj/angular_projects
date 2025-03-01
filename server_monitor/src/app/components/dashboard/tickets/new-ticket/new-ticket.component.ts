import { Component, ElementRef, output, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'NewTicketComponent',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})

export class NewTicketComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  enteredTitle = '';
  enteredText = '';
  add = output<{ title: string; text: string }>();

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText})
    this.form().nativeElement.reset();
    this.enteredText = '';
    this.enteredTitle = '';
  }
}
