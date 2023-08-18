package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.UserDto;

public interface UserService {
	
	UserDto createUser(UserDto userDto);
	List<UserDto> getAllUsers();
	UserDto findUserById(int id);
	UserDto deleteUserById(int id);
	UserDto updateUser(UserDto userDto);
	int loginUser(UserDto userDto);

}