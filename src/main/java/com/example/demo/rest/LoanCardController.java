package com.example.demo.rest;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.LoanCardDto;
import com.example.demo.service.LoanCardService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/loanCards")
public class LoanCardController {
	private final LoanCardService loanCardService;
	@PostMapping
	public LoanCardDto createLoanCard(@RequestBody LoanCardDto loanCardDto) {
		return loanCardService.createLoanCard(loanCardDto);
	}
	
	@GetMapping("/{id}")
	public LoanCardDto findLoanCard(@PathVariable("id") int id) {

		LoanCardDto o = loanCardService.findLoanCardById(id);
		
		return o;
	}

	@DeleteMapping("/{id}")
	public LoanCardDto deleteLoanCard(@PathVariable("id") int id){
		LoanCardDto o = loanCardService.deleteLoanCardById(id);
		
		return o;
	}
	
	@GetMapping("/all")
	public List<LoanCardDto> getAllLoanCard(){
		List<LoanCardDto> l= loanCardService.getAllLoanCards();
		return l;
	}
}
