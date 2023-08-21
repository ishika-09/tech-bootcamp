package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.UserDto;

public interface UserService {
	
	UserDto createUser(UserDto userDto);
	List<UserDto> getAllValidUsers();
	List<UserDto> getAllPendingUsers();
	UserDto findUserById(int id);
	UserDto deleteUserById(int id);
	UserDto updateUser(UserDto userDto);
	int loginUser(UserDto userDto);
	void approveUser(UserDto userDto);
	int resetPassword(UserDto userDto);
}