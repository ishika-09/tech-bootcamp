package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.model.Item;
import com.example.demo.repo.ItemRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ItemServiceImpl implements ItemService {

	private final ItemRepository ItemRepository;
	@Override
	public Item createItem(Item item) {
		
		return ItemRepository.save(item);
	}

	@Override
	public Optional<Item> findItemById(int id) {
		// TODO Auto-generated method stub
		return ItemRepository.findById(id);
	}

	@Override
	public Item updateItem(Item item) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Optional<Item> deleteItemById(int id) {
		Optional <Item> o = ItemRepository.findById(id);
		ItemRepository.deleteById(id);
		return o;
	}
	
	@Override
	public List<Item> getAllItems(){
		List<Item> l=ItemRepository.findAll();
		return l;
	}
}
