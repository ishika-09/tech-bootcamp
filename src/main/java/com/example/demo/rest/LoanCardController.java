package com.example.demo.rest;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
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
	
	@PostMapping("/apply")
	public LoanCard createLoanCard(@RequestBody LoanCard loanCard) {
		System.out.println("request body" + loanCard);
		return loanCardService.createLoanCard(loanCard);
	}
	
	@PreAuthorize("hasRole('admin')")
	@GetMapping("/{id}")
	public LoanCard findLoanCard(@PathVariable("id") int id) {

		LoanCard o = loanCardService.findLoanCardById(id);
		
		return o;
	}
	
	@PreAuthorize("hasRole('admin') or hasRole('user')")
	@DeleteMapping("/{id}")
	public LoanCard deleteLoanCard(@PathVariable("id") int id){
		LoanCard o = loanCardService.deleteLoanCardById(id);
		
		return o;
	}
	
	@PreAuthorize("hasRole('admin')")
	@GetMapping("/allPending")
	public List<LoanCard> getAllPendingLoanCard(){
		List<LoanCard> l= loanCardService.getAllPendingLoanCards();
		return l;
	}
	
	@PreAuthorize("hasRole('admin')")
	@GetMapping("/allApproved")
	public List<LoanCard> getAllValidLoanCard(){
		List<LoanCard> l= loanCardService.getAllPendingLoanCards();
		return l;
	}
	
	@PreAuthorize("hasRole('admin') or hasRole('user')")
	@GetMapping("/allActive/{user_id}")
	public List<LoanCard> getAllActiveLoanCard(@PathVariable("user_id") String user_id){
		List<LoanCard> l =loanCardService.getAllActiveLoanCards(user_id);
		return l;
	}
}
