package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;

import com.example.demo.model.Item;
import com.example.demo.model.User;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LoanCardDto {
	private int id;
	private String type;
	private float interest;
	private Date issue_date;
	private Item item;
	private User user;
	private int duration;
	private int valid;
}