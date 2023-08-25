package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Service;

import com.example.demo.model.Item;
import com.example.demo.repo.ItemRepository;
import com.example.demo.dto.ItemDto;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ItemServiceImpl implements ItemService {

	private final ItemRepository itemRepository;
	private final ModelMapper modelMapper;
	
	@Override
	public ItemDto createItem(ItemDto itemDto) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Item item = modelMapper.map(itemDto, Item.class);
		Item item2= itemRepository.save(item);
		
		return modelMapper.map(item2, ItemDto.class);
	}

	@Override
	public ItemDto findItemById(int id) {
		// TODO Auto-generated method stub
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Optional<Item> item = itemRepository.findById(id);
		
		return modelMapper.map(item, ItemDto.class);
	}

	@Override
	public ItemDto updateItem(ItemDto itemDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ItemDto deleteItemById(int id) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Optional <Item> item = itemRepository.findById(id);
		itemRepository.deleteById(id);
		return modelMapper.map(item, ItemDto.class);
	}
	
	@Override
	public List<ItemDto> getAllItems(){
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<Item> item = itemRepository.findAll();
		List<ItemDto> l = modelMapper.map(item, new TypeToken<List<ItemDto>>(){}.getType());
		return l;
	}
}
