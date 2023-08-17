package com.example.demo.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Item;
import com.example.demo.service.ItemService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/items")
public class ItemController {

	private final ItemService itemService;
	@PostMapping
	public Item createItem(@RequestBody Item item) {
		return itemService.createItem(item);
	}
	
	@GetMapping("/{id}")
	public Optional<Item> findItem(@PathVariable("id") int id) {

		Optional<Item> o = itemService.findItemById(id);
		
		return o;
	}
	
	@DeleteMapping("/{id}")
	public Optional<Item> deleteItem(@PathVariable("id") int id){
		Optional<Item> o = itemService.deleteItemById(id);
		
		return o;
	}
	
	@GetMapping("/all")
	public List<Item> getAllItem(){
		List<Item> l= itemService.getAllItems();
		return l;
	}
}
