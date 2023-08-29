package com.example.demo.service;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.model.Admin;
import com.example.demo.payload.response.JwtResponse;
import com.example.demo.repo.AdminRepository;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import com.example.demo.dto.AdminDto;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdminServiceImpl implements AdminService {

	private final AdminRepository adminRepository;
	private final ModelMapper modelMapper;
	@Autowired
	PasswordEncoder encoder;
	@Override
	public AdminDto createAdmin(AdminDto adminDto) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Admin admin = modelMapper.map(adminDto, Admin.class);
		admin.setPassword(encoder.encode(admin.getPassword()));
		Admin admin2= adminRepository.save(admin);
		
		return modelMapper.map(admin2, AdminDto.class);
	}

	@Override
	public AdminDto findAdminById(String id) {
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
	public AdminDto deleteAdminById(String id) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Optional <Admin> admin = adminRepository.findById(id);
		adminRepository.deleteById(id);
		return modelMapper.map(admin, AdminDto.class);
	}
	
	@Override
	public ResponseEntity<?> loginAdmin(AdminDto adminDto) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Optional <Admin> admin = adminRepository.findById(adminDto.getId());
		if (admin == null)
			return (ResponseEntity<?>) ResponseEntity.badRequest();
		Admin admin1 = admin.get();
		if(admin1.getPassword().equals(adminDto.getPassword()))	
		{
		
		String adminTokenString =  Jwts.builder()
		        .setSubject(adminDto.getId())
		        .setIssuedAt(new Date())
		        .setExpiration(new Date((new Date()).getTime() + (1*60*60*1000)))
		        .signWith(Keys.hmacShaKeyFor(Decoders.BASE64.decode("df6b9fb15cfdbb7527be5a8a6e39f39e572c8ddb943fbc79a943438e9d3d85ebfc2ccf9e0eccd9346026c0b6876e0e01556fe56f135582c05fbdbb505d46755a")), SignatureAlgorithm.HS256)
		        .compact();
		List<String> roles = Arrays.asList("admin");
		return ResponseEntity.ok(
				new JwtResponse(adminTokenString, adminDto.getId(), roles));
		}
		return (ResponseEntity<?>) ResponseEntity.badRequest();
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
