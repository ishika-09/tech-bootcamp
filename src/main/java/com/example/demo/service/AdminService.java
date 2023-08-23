package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.AdminDto;
import com.example.demo.dto.LoanCardDto;

public interface AdminService {
	
	AdminDto createAdmin(AdminDto adminDto);
	List<AdminDto> getAllAdmins();
	AdminDto findAdminById(int id);
	AdminDto deleteAdminById(int id);
	AdminDto updateAdmin(AdminDto adminDto);
	int loginAdmin(AdminDto adminDto);
}