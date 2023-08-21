package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repo.UserRepository;
import com.example.demo.dto.UserDto;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;
	private final ModelMapper modelMapper;
	@Override
	public UserDto createUser(UserDto userDto) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		User user = modelMapper.map(userDto, User.class);
		User user2= userRepository.save(user);
		
		return modelMapper.map(user2, UserDto.class);
	}
	@Override
	public int loginUser(UserDto userDto) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Optional <User> user = userRepository.findById(userDto.getId());
		if (user == null)
			return 0;
		User user1 = user.get();
		if(user1.getValid() == 0)
			return 0;
		if(user1.getPassword().equals(userDto.getPassword()))
			return 1;
		return 0;
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
			user1.setPassword(userDto.getPassword());
			return 1;
		}
		return 0;	
	}
}
