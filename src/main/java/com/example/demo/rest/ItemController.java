package com.example.demo.rest;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ItemDto;
import com.example.demo.service.ItemService;
import com.example.demo.service.LoanCardService;

import lombok.AllArgsConstructor;

@CrossOrigin(origins="http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("/items")
public class ItemController {

	private final ItemService itemService;
	private final LoanCardService LoanCardService;
	@PostMapping
	@PreAuthorize("hasAuthority('admin')")
	public ItemDto createItem(@RequestBody ItemDto itemDto) {
		return itemService.createItem(itemDto);
	}
	
	@GetMapping("/{id}")
	@PreAuthorize("hasAuthority('admin')")
	public ItemDto findItem(@PathVariable("id") int id) {

		ItemDto o = itemService.findItemById(id);
		
		return o;
	}
	
	@DeleteMapping("/{id}")
	@PreAuthorize("hasAuthority('admin')")
	public ItemDto deleteItem(@PathVariable("id") int id){
		ItemDto o = itemService.deleteItemById(id);
		
		return o;
	}
	
	@GetMapping("/all")
	@PreAuthorize("hasAnyAuthority('admin','user')")
	public List<ItemDto> getAllItem(){
		List<ItemDto> l= itemService.getAllItems();
		return l;
	}
	
	@GetMapping("/allPurchased/{id}")
	@PreAuthorize("hasAuthority('user')")
	public List<ItemDto> getAllPurchasedItem(@PathVariable("id") int id){
		List<ItemDto> list = LoanCardService.getAllPurchasedItem(id);
		return list;
	}
}
