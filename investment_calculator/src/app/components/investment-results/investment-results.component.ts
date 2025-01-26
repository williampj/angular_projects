import { Component, Input } from '@angular/core';
import { AnnualData } from '../../models/annual-data.model';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'InvestmentResultsComponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})

export class InvestmentResultsComponent {
  @Input( {required: true}) results!: AnnualData[];
  resultsHeaders = ["Year", "Investment Value", "Interest (Year)", "Total Interest", "Invested Capital"];
}
