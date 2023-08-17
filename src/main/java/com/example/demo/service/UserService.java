package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.User;

public interface UserService {
	
	User createUser(User user);
	
	Optional <User> findUserById(int id);
	Optional <User> deleteUserById(int id);
	List<User> getAllUsers();
	User updateUser(User user);

}