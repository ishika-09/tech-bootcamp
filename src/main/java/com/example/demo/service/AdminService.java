package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Admin;

public interface AdminService {
	
	Admin createAdmin(Admin admin);
	List<Admin> getAllAdmins();
	Optional <Admin> findAdminById(int id);
	Optional <Admin> deleteAdminById(int id);
	Admin updateAdmin(Admin admin);

}