package com.example.demo.service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.model.CustomUserDetails;
import com.example.demo.model.User;
import com.example.demo.payload.request.LoginRequest;
import com.example.demo.payload.response.JwtResponse;
import com.example.demo.repo.UserRepository;
import com.example.demo.security.jwt.JwtUtils;

//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;

import com.example.demo.dto.UserDto;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;
	private final ModelMapper modelMapper;
	@Autowired
	JwtUtils jwtUtils;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	@Override
	public UserDto createUser(UserDto userDto) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		userDto.setPassword(encoder.encode(userDto.getPassword()));
		User user = modelMapper.map(userDto, User.class);
		User user2= userRepository.save(user);
		
		return modelMapper.map(user2, UserDto.class);
	}
	@Override
	public ResponseEntity<?> loginUser(LoginRequest loginRequest){
		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(Integer.toString(loginRequest.getid()), loginRequest.getPassword()));
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
		List<String> roles = Arrays.asList("user");
		return ResponseEntity.ok(
				new JwtResponse(jwt, userDetails.getUsername(), roles));

	}
	@Override
	public UserDto findUserById(int id) {
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
	public UserDto deleteUserById(int id) {
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
			user1.setPassword(encoder.encode(userDto.getPassword()));
			userRepository.save(user1);
			return 1;
		}
		return 0;	
	}
}
