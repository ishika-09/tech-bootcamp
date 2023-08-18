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

import com.example.demo.dto.AdminDto;
import com.example.demo.service.AdminService;

import lombok.AllArgsConstructor;

@CrossOrigin(origins="http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("/admins")
public class AdminController {

	private final AdminService adminService;
	@PostMapping
	public AdminDto createAdmin(@RequestBody AdminDto adminDto) {
		return adminService.createAdmin(adminDto);
	}
	
	@PostMapping("/login")
	public int loginAdmin(@RequestBody AdminDto adminDto) {
		return adminService.loginAdmin(adminDto);
	}
	
	@GetMapping("/{id}")
	public AdminDto findAdmin(@PathVariable("id") int id) {

		AdminDto o = adminService.findAdminById(id);
		
		return o;
	}

	@DeleteMapping("/{id}")
	public AdminDto deleteAdmin(@PathVariable("id") int id){
		AdminDto o = adminService.deleteAdminById(id);
		
		return o;
	}
	
	@GetMapping("/all")
	public List<AdminDto> getAllAdmin() {

		List<AdminDto> l = adminService.getAllAdmins();
		
		return l;
	}
	
}
