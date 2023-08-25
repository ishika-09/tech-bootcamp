package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Service;

import com.example.demo.model.Admin;
import com.example.demo.repo.AdminRepository;
import com.example.demo.dto.AdminDto;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdminServiceImpl implements AdminService {

	private final AdminRepository adminRepository;
	private final ModelMapper modelMapper;
	@Override
	public AdminDto createAdmin(AdminDto adminDto) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Admin admin = modelMapper.map(adminDto, Admin.class);
		Admin admin2= adminRepository.save(admin);
		
		return modelMapper.map(admin2, AdminDto.class);
	}

	@Override
	public AdminDto findAdminById(int id) {
		// TODO Auto-generated method stub
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Optional<Admin> admin = adminRepository.findById(id);
		
		return modelMapper.map(admin, AdminDto.class);
	}

	@Override
	public AdminDto updateAdmin(AdminDto adminDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public AdminDto deleteAdminById(int id) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Optional <Admin> admin = adminRepository.findById(id);
		adminRepository.deleteById(id);
		return modelMapper.map(admin, AdminDto.class);
	}
	
	@Override
	public int loginAdmin(AdminDto adminDto) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Optional <Admin> admin = adminRepository.findById(adminDto.getId());
		if (admin == null)
			return 0;
		Admin admin1 = admin.get();
		if(admin1.getPassword().equals(adminDto.getPassword()))
			return 1;
		return 0;
	}
	
	@Override
	public List<AdminDto> getAllAdmins(){
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<Admin> admin = adminRepository.findAll();
		List<AdminDto> l = modelMapper.map(admin, new TypeToken<List<AdminDto>>(){}.getType());
		System.out.println(admin);
		System.out.println(l);

		return l;
	}
	
}
