package com.example.demo.rest;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin(origins="http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("/loanCards")
public class LoanCardController {
	private final LoanCardService loanCardService;
	
	@PostMapping("/apply")
	public LoanCard createLoanCard(@RequestBody LoanCard loanCard) {
//		System.out.println("request body" + loanCard);
		return loanCardService.createLoanCard(loanCard);
	}
	
	@GetMapping("/{id}")
	public LoanCard findLoanCard(@PathVariable("id") int id) {

		LoanCard o = loanCardService.findLoanCardById(id);
		
		return o;
	}
	
	@DeleteMapping("/{id}")
	public LoanCard deleteLoanCard(@PathVariable("id") int id){
		LoanCard o = loanCardService.deleteLoanCardById(id);
		
		return o;
	}
	
	@GetMapping("/allPending")
	public List<LoanCard> getAllPendingLoanCard(){
		List<LoanCard> l= loanCardService.getAllPendingLoanCards();
		return l;
	}
	
	@GetMapping("/allApproved")
	public List<LoanCard> getAllValidLoanCard(){
		List<LoanCard> l= loanCardService.getAllPendingLoanCards();
		return l;
	}
	
	@GetMapping("/allActive/{user_id}")
	public List<LoanCard> getAllActiveLoanCard(@PathVariable("user_id") int user_id){
		List<LoanCard> l =loanCardService.getAllActiveLoanCards(user_id);
		return l;
	}
	
}
