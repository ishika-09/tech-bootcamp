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

import com.example.demo.model.User;
import com.example.demo.service.UserService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {

	private final UserService userService;
	
	@PostMapping
	public User createUser(@RequestBody User user) {
		return userService.createUser(user);
	}
	
	@GetMapping("/{id}")
	public Optional<User> findUser(@PathVariable("id") int id) {

		Optional<User> o = userService.findUserById(id);
		
		return o;
	}
	
	@GetMapping("/all")
	public List<User> getAllUser() {

		List<User> l = userService.getAllUsers();
		
		return l;
	}
	
	@DeleteMapping("/{id}")
	public Optional<User> deleteUser(@PathVariable("id") int id){
		Optional<User> o = userService.deleteUserById(id);
		
		return o;
	}
}
