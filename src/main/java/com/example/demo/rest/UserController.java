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

import com.example.demo.dto.LoanCardDto;
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
	public String loginUser(@RequestBody LoginRequest loginRequest ) throws Exception {
		return userService.loginUser(loginRequest);
	}
	
	@GetMapping("/{id}")
	public UserDto findUser(@PathVariable("id") String id) {

		UserDto o = userService.findUserById(id);
		
		return o;
	}
	
	@GetMapping("/allValid")
	public List<UserDto> getAllValidUser() {

		List<UserDto> l = userService.getAllValidUsers();
		
		return l;
	}
	@GetMapping("/allPending")
	public List<UserDto> getAllPendingUser(){
		List<UserDto> l= userService.getAllPendingUsers();
		return l;
	}
	
	@DeleteMapping("/{id}")
	public UserDto deleteUser(@PathVariable("id") String id){
		UserDto o = userService.deleteUserById(id);
		
		return o;
	}
}
