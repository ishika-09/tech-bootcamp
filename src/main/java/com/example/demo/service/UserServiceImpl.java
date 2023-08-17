package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repo.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

	private final UserRepository UserRepository;
	@Override
	public User createUser(User user) {
		
		return UserRepository.save(user);
	}

	@Override
	public Optional<User> findUserById(int id) {
		// TODO Auto-generated method stub
		return UserRepository.findById(id);
	}

	@Override
	public User updateUser(User user) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Optional<User> deleteUserById(int id) {
		Optional <User> o = UserRepository.findById(id);
		UserRepository.deleteById(id);
		return o;
	}
	
	@Override
	public List<User> getAllUsers(){
		List<User> l=UserRepository.findAll();
		return l;
	}

}
