package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.LoanCard;

public interface LoanCardRepository extends JpaRepository<LoanCard, Integer>{

}
