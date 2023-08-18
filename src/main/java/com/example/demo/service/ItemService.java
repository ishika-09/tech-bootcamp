package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.ItemDto;

public interface ItemService {
	
	ItemDto createItem(ItemDto itemDto);
	List<ItemDto> getAllItems();
	ItemDto findItemById(int id);
	ItemDto deleteItemById(int id);
	ItemDto updateItem(ItemDto itemDto);

}