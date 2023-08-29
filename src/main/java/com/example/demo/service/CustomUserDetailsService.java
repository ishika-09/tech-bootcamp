package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.model.CustomUserDetails;
import com.example.demo.model.User;
import com.example.demo.repo.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService{

	@Autowired
	UserRepository userRepository;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		String role="user";
		if(username.equals("admin")) {
			role="admin";
			username="0";
		}
		final Optional<User> user = userRepository.findById(Integer.parseInt(username));
		if (user.isEmpty())
			throw new UsernameNotFoundException("User not found !");
		else
		{
			User user1 = user.get();
			return new CustomUserDetails(user1,role);
		}
	}
	
}
