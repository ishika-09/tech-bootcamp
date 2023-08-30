package com.example.demo.rest;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.example.demo.dto.LoanCardDto;
import com.example.demo.dto.UserDto;
import com.example.demo.payload.request.LoginRequest;
import com.example.demo.service.UserService;

import lombok.AllArgsConstructor;
@CrossOrigin(origins="http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {

	private final UserService userService;
	
	@PostMapping("/register")
	public UserDto createUser(@RequestBody UserDto userDto) {
		return userService.createUser(userDto);
	}
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest ) throws Exception {
		return userService.loginUser(loginRequest);
	}
	
	@GetMapping("/{id}")
	@PreAuthorize("hasAnyAuthority('user','admin')")
	public UserDto findUser(@PathVariable("id") int id) {

		UserDto o = userService.findUserById(id);
		
		return o;
	}
	
	@GetMapping("/allValid")
	@PreAuthorize("hasAuthority('admin')")
	public List<UserDto> getAllValidUser() {

		List<UserDto> l = userService.getAllValidUsers();
		
		return l;
	}
	@GetMapping("/allPending")
	@PreAuthorize("hasAuthority('admin')")
	public List<UserDto> getAllPendingUser(){
		List<UserDto> l= userService.getAllPendingUsers();
		return l;
	}
	
	@DeleteMapping("/{id}")
	@PreAuthorize("hasAuthority('admin')")
	public UserDto deleteUser(@PathVariable("id") int id){
		UserDto o = userService.deleteUserById(id);
		
		return o;
	}
	
	@PutMapping("/resetPassword")
	public int resetUserPassword(@RequestBody UserDto userDto ) {
		return userService.resetPassword(userDto);
	}
	
	@PutMapping("/update")
	@PreAuthorize("hasAuthority('admin')")
	public UserDto updateUser(@RequestBody UserDto userDto)
	{
		return userService.updateUser(userDto);
	}
}
