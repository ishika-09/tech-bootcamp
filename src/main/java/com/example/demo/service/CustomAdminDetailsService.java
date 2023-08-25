package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.model.CustomAdminDetails;
import com.example.demo.model.Admin;
import com.example.demo.repo.AdminRepository;

@Service
public class CustomAdminDetailsService implements UserDetailsService{

	@Autowired
	AdminRepository adminRepository;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		final Optional<Admin> admin = this.adminRepository.findById(Integer.parseInt(username));
		if (admin.isEmpty())
			throw new UsernameNotFoundException("User not found !");
		else
		{
			Admin admin1= admin.get();
			return new CustomAdminDetails(admin1);
		}
	}
	
}