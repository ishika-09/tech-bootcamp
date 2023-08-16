package com.example.demo.service;

import java.util.Optional;

import com.example.demo.model.Item;

public interface ItemService {
	
	Item createItem(Item item);
	
	Optional <Item> findItemById(int id);
	
	Item updateItem(Item item);

}