package com.cognizant.loan;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @GetMapping("/{number}")
    public Loan getLoanDetails(@PathVariable String number) {
        return new Loan(number, "car", 400000, 3258, 18);
    }

    record Loan(String number, String type, int loan, int emi, int tenure) {}
}
