package com.example.demo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Item;
import com.example.demo.repo.ItemRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/items")
public class ItemController {
	@Autowired
	private ItemRepository itemRepository;
	
	@PostMapping
	public Item createItem(@RequestBody Item item) {
		return itemRepository.save(item);
	}
}
