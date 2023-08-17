package com.example.demo.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.LoanCard;
import com.example.demo.service.LoanCardService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/loanCards")
public class LoanCardController {
	private final LoanCardService loanCardService;
	@PostMapping
	public LoanCard createLoanCard(@RequestBody LoanCard loanCard) {
		return loanCardService.createLoanCard(loanCard);
	}
	
	@GetMapping("/{id}")
	public Optional<LoanCard> findLoanCard(@PathVariable("id") int id) {

		Optional<LoanCard> o = loanCardService.findLoanCardById(id);
		
		return o;
	}

	@DeleteMapping("/{id}")
	public Optional<LoanCard> deleteLoanCard(@PathVariable("id") int id){
		Optional<LoanCard> o = loanCardService.deleteLoanCardById(id);
		
		return o;
	}
	
	@GetMapping("/all")
	public List<LoanCard> getAllLoanCard(){
		List<LoanCard> l= loanCardService.getAllLoanCards();
		return l;
	}
}
