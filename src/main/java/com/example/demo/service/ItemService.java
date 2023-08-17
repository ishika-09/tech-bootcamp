package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Item;

public interface ItemService {
	
	Item createItem(Item item);
	
	Optional <Item> findItemById(int id);
	Optional <Item> deleteItemById(int id);
	List<Item> getAllItems();
	Item updateItem(Item item);

}