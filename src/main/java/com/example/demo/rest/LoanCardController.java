package com.example.demo.rest;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.LoanCardDto;
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
	@PreAuthorize("hasAuthority('user')")
	public LoanCardDto createLoanCard(@RequestBody LoanCardDto loanCardDto) {
//		System.out.println("request body" + loanCard);
		return loanCardService.createLoanCard(loanCardDto);
	}
	
	@GetMapping("/{id}")
	@PreAuthorize("hasAuthority('admin')")
	public LoanCardDto findLoanCard(@PathVariable("id") int id) {

		LoanCardDto o = loanCardService.findLoanCardById(id);
		
		return o;
	}
	
	@DeleteMapping("/{id}")
	@PreAuthorize("hasAuthority('admin')")
	public LoanCardDto deleteLoanCard(@PathVariable("id") int id){
		return loanCardService.deleteLoanCardById(id);	
	}
	
	@GetMapping("/allPending")
	@PreAuthorize("hasAuthority('admin')")
	public List<LoanCardDto> getAllPendingLoanCard(){
		List<LoanCardDto> l= loanCardService.getAllPendingLoanCards();
		return l;
	}
	
	@GetMapping("/allApproved")
	@PreAuthorize("hasAuthority('admin')")
	public List<LoanCardDto> getAllValidLoanCard(){
		List<LoanCardDto> l= loanCardService.getAllValidLoanCards();
		return l;
	}
	
	@GetMapping("/allActive/{user_id}")
	@PreAuthorize("hasAuthority('user')")
	public List<LoanCardDto> getAllActiveLoanCard(@PathVariable("user_id") int user_id){
		List<LoanCardDto> l =loanCardService.getAllActiveLoanCards(user_id);
		return l;
	}
	
}
