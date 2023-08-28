package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Item;


public interface ItemRepository extends JpaRepository<Item, Integer>{
	
	@Query (value = "SELECT * FROM item WHERE issue_status = 'N'" ,nativeQuery = true)
	List<Item> findAllAvailable();

}
