package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
//import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
//import org.modelmapper.TypeToken;
//import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Service;

import com.example.demo.dto.ItemDto;
import com.example.demo.dto.LoanCardDto;
import com.example.demo.model.Item;
import com.example.demo.model.LoanCard;
import com.example.demo.model.User;
import com.example.demo.repo.ItemRepository;
import com.example.demo.repo.LoanCardRepository;
import com.example.demo.repo.UserRepository;

//import com.example.demo.dto.LoanCard;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LoanCardServiceImpl implements LoanCardService {

	private final LoanCardRepository loanCardRepository;
	private final ModelMapper modelMapper;
	private final ItemRepository itemRepository;
	private final UserRepository userRepository;
	
	@Override
	public LoanCardDto createLoanCard(LoanCardDto loanCardDto) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Optional<Item> itemOptional = itemRepository.findById(loanCardDto.getItem().getId());
		Item item = itemOptional.get();
		item.setIssue_status("P");
		itemRepository.save(item);
		LoanCard loanCard2= loanCardRepository.save((modelMapper.map(loanCardDto, LoanCard.class)));
		return modelMapper.map(loanCard2, LoanCardDto.class);
	}

	@Override
	public LoanCardDto findLoanCardById(int id) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Optional<LoanCard> loanCard = loanCardRepository.findById(id);
		Optional<User> userOptional = userRepository.findById(loanCard.get().getUser().getId());
		if(userOptional.isEmpty())
			return null;
		LoanCardDto result = modelMapper.map(loanCard.get(), LoanCardDto.class);
		result.setUser(userOptional.get()); 
		System.out.println(result);
		return result;
	}

	@Override
	public LoanCardDto updateLoanCard(LoanCardDto loanCardDto) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		if(loanCardRepository.findById(loanCardDto.getId()).isPresent()) {
			return modelMapper.map(loanCardRepository.save(modelMapper.map(loanCardDto, LoanCard.class)),LoanCardDto.class);
		}
		return null;
	}

	@Override
	public LoanCardDto deleteLoanCardById(int id) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

		Optional <LoanCard> loanCard = loanCardRepository.findById(id);
		loanCardRepository.deleteById(id);
		return modelMapper.map(loanCard.get(),LoanCardDto.class);
	}
	
	@Override
	public List<LoanCardDto> getAllPendingLoanCards(){
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<LoanCard> loanCard = loanCardRepository.findAllPending();
		List<LoanCardDto> l = modelMapper.map(loanCard, new TypeToken<List<LoanCardDto>>(){}.getType());
		return l;
	}
	
	@Override
	public List<LoanCardDto> getAllActiveLoanCards(int user_id){
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<LoanCard> loanCard = loanCardRepository.findAllActive(user_id);
		List<LoanCardDto> l = modelMapper.map(loanCard, new TypeToken<List<LoanCardDto>>(){}.getType());
		return l;
	}
	@Override
	public List<LoanCardDto> getAllValidLoanCards(){
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<LoanCard> loanCard = loanCardRepository.findAllValid();
		List<LoanCardDto> l = modelMapper.map(loanCard, new TypeToken<List<LoanCardDto>>(){}.getType());
		return l;
	}
	
	@Override
	public void approveLoanCard(LoanCard loanCard) {
		Optional <LoanCard> loanCard1 = loanCardRepository.findById(loanCard.getId());
		if (loanCard1.isEmpty())
			return;
		Item item = loanCard.getItem();
		Optional<Item> iOptional = itemRepository.findById(item.getId());
		item = iOptional.get();
		LoanCard loanCard2 = loanCard1.get();
		if(loanCard.getValid() == 1) {
			loanCard2.setValid(1);
			item.setIssue_status("Y");
			loanCardRepository.save(loanCard2);
		}
		else {
			deleteLoanCardById(loanCard.getId());
			item.setIssue_status("N");
		}
		itemRepository.save(item);
	}

	@Override
	public List<ItemDto> getAllPurchasedItem(int id) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<LoanCard> l = loanCardRepository.findAllActive(id);
		List<ItemDto> items = new ArrayList<ItemDto>();
		for(int i=0;i<l.size();i++)
		{
			if(l.get(i).getValid()==1) {
			ItemDto itemDto = modelMapper.map(l.get(i).getItem(), ItemDto.class);
			Optional<Item> o = itemRepository.findById(itemDto.getId());
			items.add(modelMapper.map(o, ItemDto.class));
			}
		}
		return items;
	}
}
