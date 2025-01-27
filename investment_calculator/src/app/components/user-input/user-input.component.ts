import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../../models/investment-input.model';

@Component({
  selector: 'UserInputComponent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() userSubmit = new EventEmitter<InvestmentInput>();

  userInput: InvestmentInput = {
    initialInvestment: 0, 
    annualInvestment: 0, 
    expectedReturn: 5, 
    duration: 10
  }

  onSubmit() {
    this.userSubmit.emit(this.userInput);
  }
}
