import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentService } from '../../services/investment.service';

@Component({
  selector: 'InvestmentResultsComponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})

export class InvestmentResultsComponent {
  resultsHeaders = ["Year", "Investment Value", "Interest (Year)", "Total Interest", "Invested Capital"];
  private investmentService = inject(InvestmentService);
  
  results = this.investmentService.resultsData.asReadonly();
}
