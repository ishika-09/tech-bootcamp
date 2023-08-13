package com.wellsfargo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.model.User;
import com.wellsfargo.repo.UserRepository;

@RestController
@RequestMapping("/users")
public class UserController {

	// dependency injection
	@Autowired
	private UserRepository userRepository;

	@PostMapping
	public User createInstructor(@RequestBody User user) {
		
		return userRepository.save(user);

	}

}