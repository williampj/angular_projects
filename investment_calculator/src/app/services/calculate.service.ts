import { Injectable } from "@angular/core";
import { UserInputModel } from "../models/user-input.model";
import { AnnualData } from "../models/annual-data.model";

@Injectable({ providedIn: 'root' })
export class CalculateService {
    
    public calculateInvestmentResults(userInput: UserInputModel): Array<AnnualData> {
        const yearsData = [];
        let investmentValue = userInput.initialInvestment;
                
        for (let i = 0; i < userInput.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (userInput.expectedReturn / 100);
            investmentValue += interestEarnedInYear + userInput.annualInvestment;
            const totalInterest = investmentValue - userInput.annualInvestment * year - userInput.initialInvestment;
            
            yearsData.push({
                year: year,
                totalInterest: totalInterest,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: userInput.annualInvestment,
                totalAmountInvested: userInput.initialInvestment + userInput.annualInvestment * year,
            });
        }

        return yearsData;
      }
}
