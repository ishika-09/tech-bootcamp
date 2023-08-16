package com.example.demo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Admin;
import com.example.demo.repo.AdminRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/admins")
public class AdminController {
	@Autowired
	private AdminRepository adminRepository;
	
	@PostMapping
	public Admin createAdmin(@RequestBody Admin admin) {
		return adminRepository.save(admin);
	}
}
