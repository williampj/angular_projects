import { Injectable, signal } from "@angular/core";
import { AnnualData } from "../models/annual-data.model";
import type { InvestmentInput } from "../models/investment-input.model";

@Injectable({ providedIn: 'root' })
export class InvestmentService {
    resultsData = signal<AnnualData[] | undefined>(undefined);
    
    public calculateInvestmentResults(userInput: InvestmentInput): void {
        const { initialInvestment, annualInvestment, expectedReturn, duration } = userInput;         
        let investmentValue = initialInvestment;
        const yearsData = [];

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
            
            yearsData.push({
                year: year,
                totalInterest: totalInterest,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: annualInvestment,
                totalAmountInvested: initialInvestment + annualInvestment * year,
            });
        }

        this.resultsData.set(yearsData);
      }
}
