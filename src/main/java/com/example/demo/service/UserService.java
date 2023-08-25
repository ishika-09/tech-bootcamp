package com.example.demo.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.example.demo.dto.UserDto;
import com.example.demo.payload.request.LoginRequest;

public interface UserService {
	
	UserDto createUser(UserDto userDto);
	List<UserDto> getAllValidUsers();
	List<UserDto> getAllPendingUsers();

	UserDto findUserById(int id);
	UserDto deleteUserById(int id);
	UserDto updateUser(UserDto userDto);
	ResponseEntity<?> loginUser(LoginRequest loginRequest) throws Exception;
	void approveUser(UserDto userDto);
	int resetPassword(UserDto userDto);
}