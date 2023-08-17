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

import com.example.demo.model.Admin;
import com.example.demo.service.AdminService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/admins")
public class AdminController {

	private final AdminService adminService;
	@PostMapping
	public Admin createAdmin(@RequestBody Admin admin) {
		return adminService.createAdmin(admin);
	}
	
	@GetMapping("/{id}")
	public Optional<Admin> findAdmin(@PathVariable("id") int id) {

		Optional<Admin> o = adminService.findAdminById(id);
		
		return o;
	}

	@DeleteMapping("/{id}")
	public Optional<Admin> deleteAdmin(@PathVariable("id") int id){
		Optional<Admin> o = adminService.deleteAdminById(id);
		
		return o;
	}
	
	@GetMapping("/all")
	public List<Admin> getAllAdmin() {

		List<Admin> l = adminService.getAllAdmins();
		
		return l;
	}
	
}
