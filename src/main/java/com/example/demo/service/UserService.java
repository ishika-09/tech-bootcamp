package com.example.demo.service;

import java.util.Optional;

import com.example.demo.model.User;

public interface UserService {
	
	User createUser(User user);
	
	Optional <User> findUserById(int id);
	
	User updateUser(User user);

}