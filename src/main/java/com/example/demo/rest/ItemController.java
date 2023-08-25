package com.example.demo.rest;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ItemDto;
import com.example.demo.service.ItemService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/items")
public class ItemController {

	private final ItemService itemService;
	@PostMapping
	public ItemDto createItem(@RequestBody ItemDto itemDto) {
		return itemService.createItem(itemDto);
	}
	
	@GetMapping("/{id}")
	@PreAuthorize("hasRole('admin')")
	public ItemDto findItem(@PathVariable("id") int id) {

		ItemDto o = itemService.findItemById(id);
		
		return o;
	}
	
	@DeleteMapping("/{id}")
	@PreAuthorize("hasRole('admin')")
	public ItemDto deleteItem(@PathVariable("id") int id){
		ItemDto o = itemService.deleteItemById(id);
		
		return o;
	}
	
	@GetMapping("/all")
	@PreAuthorize("hasRole('admin')")
	public List<ItemDto> getAllItem(){
		List<ItemDto> l= itemService.getAllItems();
		return l;
	}
}
