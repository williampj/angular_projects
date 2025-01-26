import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UserInputComponent } from '../user-input/user-input.component';
import { InvestmentResultsComponent } from '../investment-results/investment-results.component';
import { UserInputModel } from '../../models/user-input.model';
import { CalculateService } from '../../services/calculate.service';
import { AnnualData } from '../../models/annual-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})

export class AppComponent {
  userSubmitted = false;
  investmentResults: AnnualData[] = [];
  calculateService: CalculateService;
  
  constructor(calculateService: CalculateService) {
    this.calculateService = calculateService;
  }

  userSubmit(userInput: UserInputModel) {
    this.investmentResults = this.calculateService.calculateInvestmentResults(userInput);
    console.log(this.investmentResults);
    this.userSubmitted = true;
  }
}

