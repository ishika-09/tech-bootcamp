package com.example.demo.service;

import java.util.Optional;

import com.example.demo.model.Admin;

public interface AdminService {
	
	Admin createAdmin(Admin admin);
	
	Optional <Admin> findAdminById(int id);
	
	Admin updateAdmin(Admin admin);

}