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

import com.example.demo.dto.UserDto;
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
	public int loginUser(@RequestBody UserDto userDto) {
		return userService.loginUser(userDto);
	}
	
	@GetMapping("/{id}")
	public UserDto findUser(@PathVariable("id") int id) {

		UserDto o = userService.findUserById(id);
		
		return o;
	}
	
	@GetMapping("/all")
	public List<UserDto> getAllUser() {

		List<UserDto> l = userService.getAllUsers();
		
		return l;
	}
	
	@DeleteMapping("/{id}")
	public UserDto deleteUser(@PathVariable("id") int id){
		UserDto o = userService.deleteUserById(id);
		
		return o;
	}
}
