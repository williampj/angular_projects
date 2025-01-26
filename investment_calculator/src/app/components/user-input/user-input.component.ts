import { Component, EventEmitter, Output } from '@angular/core';
import { UserInputModel } from '../../models/user-input.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'UserInputComponent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() userSubmit = new EventEmitter<UserInputModel>();

  userInput: UserInputModel = {
    initialInvestment: 0, 
    annualInvestment: 0, 
    expectedReturn: 5, 
    duration: 10
  }

  onSubmit() {
    this.userSubmit.emit(this.userInput);
  }
}
