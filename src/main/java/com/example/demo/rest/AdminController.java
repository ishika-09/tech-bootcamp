package com.example.demo.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.AdminDto;
import com.example.demo.dto.UserDto;
import com.example.demo.model.LoanCard;
import com.example.demo.service.AdminService;
import com.example.demo.service.LoanCardService;
import com.example.demo.service.UserService;

import lombok.AllArgsConstructor;

@CrossOrigin(origins="http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("/admins")
public class AdminController {
	
	@Autowired
	private final AdminService adminService;
	@Autowired
	private final LoanCardService loanCardService;
	@Autowired
	private final UserService userService;
	
//	@PostMapping
//	public AdminDto createAdmin(@RequestBody AdminDto adminDto) {
//		return adminService.createAdmin(adminDto);
//	}
	
	@PostMapping("/login")
	@PreAuthorize("hasAuthority('admin')")
	public ResponseEntity<?> loginAdmin(@RequestBody AdminDto adminDto) {
		return adminService.loginAdmin(adminDto);
	}
	
	@GetMapping("/{id}")
	@PreAuthorize("hasAuthority('admin')")
	public AdminDto findAdmin(@PathVariable("id") String id) {

		AdminDto o = adminService.findAdminById(id);
		
		return o;
	}

	@DeleteMapping("/{id}")
	@PreAuthorize("hasAuthority('admin')")
	public AdminDto deleteAdmin(@PathVariable("id") String id){
		AdminDto o = adminService.deleteAdminById(id);
		
		return o;
	}
	
	@GetMapping("/all")
	@PreAuthorize("hasAuthority('admin')")
	public List<AdminDto> getAllAdmin() {

		List<AdminDto> l = adminService.getAllAdmins();
		
		return l;
	}
	
	@PutMapping("/approveLoan")
	@PreAuthorize("hasAuthority('admin')")
	public void approveLoan(@RequestBody LoanCard loanCard){
		loanCardService.approveLoanCard(loanCard);
	}
	
	@PutMapping("/approveUser")
	@PreAuthorize("hasAuthority('admin')")
	public void approveUser(@RequestBody UserDto userDto) {
		userService.approveUser(userDto);
	}
}
