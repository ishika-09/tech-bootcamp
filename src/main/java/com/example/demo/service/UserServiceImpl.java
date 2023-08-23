package com.example.demo.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.crypto.SecretKey;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.payload.request.LoginRequest;
import com.example.demo.repo.UserRepository;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import com.example.demo.dto.UserDto;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;
	private final ModelMapper modelMapper;
	private int jwtExpirationMs = 1*60*60;
	private String secret = "df6b9fb15cfdbb7527be5a8a6e39f39e572c8ddb943fbc79a943438e9d3d85ebfc2ccf9e0eccd9346026c0b6876e0e01556fe56f135582c05fbdbb505d46755a";
	
	
	@Autowired
	private AuthenticationManager authenticationManager;
	@Override
	public UserDto createUser(UserDto userDto) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		User user = modelMapper.map(userDto, User.class);
		User user2= userRepository.save(user);
		
		return modelMapper.map(user2, UserDto.class);
	}
	@Override
	public String loginUser(LoginRequest loginRequest) throws Exception{
		try {
			this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getid(), loginRequest.getPassword()));
		}catch (BadCredentialsException e) {
			throw new Exception("Bad Credentials!");
		}
		String tokenString = Jwts.builder()
        .setSubject((loginRequest.getid()))
        .setIssuedAt(new Date())
        .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
        .signWith(SignatureAlgorithm.HS512,secret)
        .compact();
//		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
//		Optional <User> user = userRepository.findById(loginRequest.getid());
//		if (user == null)
//			return 0;
//		User user1 = user.get();
//		if(user1.getValid() == 0)
//			return 0;
//		if(user1.getPassword().equals(userDto.getPassword()))
//			return 1;
		return "logged in";

	}
	@Override
	public UserDto findUserById(String id) {
		// TODO Auto-generated method stub
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Optional<User> user = userRepository.findById(id);
		
		return modelMapper.map(user, UserDto.class);
	}

	@Override
	public UserDto updateUser(UserDto userDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserDto deleteUserById(String id) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Optional <User> user = userRepository.findById(id);
		userRepository.deleteById(id);
		return modelMapper.map(user, UserDto.class);
	}
	
	@Override
	public List<UserDto> getAllPendingUsers(){
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<User> user = userRepository.findAllPending();
		List<UserDto> l = modelMapper.map(user, new TypeToken<List<UserDto>>(){}.getType());
		return l;
	}
	
	@Override
	public List<UserDto> getAllValidUsers(){
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<User> user = userRepository.findAllValid();
		List<UserDto> l = modelMapper.map(user, new TypeToken<List<UserDto>>(){}.getType());
		return l;
	}
	
	@Override
	public void approveUser(UserDto userDto) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Optional <User> user = userRepository.findById(userDto.getId());
		if (user == null)
			return;
		User user1 = user.get();
		if(userDto.getValid() == 1) {
			user1.setValid(1);
			userRepository.save(user1);
		}
		else
			deleteUserById(userDto.getId());
	}
	

	@Override
	public int resetPassword(UserDto userDto) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Optional <User> user = userRepository.findById(userDto.getId());
		System.out.println(user);
		if (user.isEmpty())
			return 0;
		User user1 = user.get();
		if(userDto.getDob().equals(user1.getDob())) {
			user1.setPassword(userDto.getPassword());
			return 1;
		}
		return 0;	
	}
}
