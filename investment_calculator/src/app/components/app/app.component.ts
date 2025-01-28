import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UserInputComponent } from '../user-input/user-input.component';
import { InvestmentResultsComponent } from '../investment-results/investment-results.component';
// import { InvestmentInput } from '../../models/investment-input.model';
import { InvestmentService } from '../../services/investment.service';
import { AnnualData } from '../../models/annual-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})

export class AppComponent {}
