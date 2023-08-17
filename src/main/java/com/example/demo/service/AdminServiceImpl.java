package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.model.Admin;
import com.example.demo.repo.AdminRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdminServiceImpl implements AdminService {

	private final AdminRepository AdminRepository;
	@Override
	public Admin createAdmin(Admin admin) {
		
		return AdminRepository.save(admin);
	}

	@Override
	public Optional<Admin> findAdminById(int id) {
		// TODO Auto-generated method stub
		return AdminRepository.findById(id);
	}

	@Override
	public Admin updateAdmin(Admin admin) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Admin> deleteAdminById(int id) {
		Optional <Admin> o = AdminRepository.findById(id);
		AdminRepository.deleteById(id);
		return o;
	}
	
	@Override
	public List<Admin> getAllAdmins(){
		List<Admin> l = AdminRepository.findAll();
		return l;
	}
}
