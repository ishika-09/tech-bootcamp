package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ItemDto {
	private int id;
	private String make;
	private String description;
	private String issue_status;
	private String category;
	private int value;
}