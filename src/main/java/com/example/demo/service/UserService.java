package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.UserDto;
import com.example.demo.payload.request.LoginRequest;

public interface UserService {
	
	UserDto createUser(UserDto userDto);
	List<UserDto> getAllValidUsers();
	List<UserDto> getAllPendingUsers();
	UserDto findUserById(String id);
	UserDto deleteUserById(String id);
	UserDto updateUser(UserDto userDto);
	String loginUser(LoginRequest loginRequest) throws Exception;
	void approveUser(UserDto userDto);
}