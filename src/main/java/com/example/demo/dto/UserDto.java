package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserDto {
	private String id;
	private String name;
	private String designation;
	private String department;
	private String gender;
	private String password ="1234";
	private long contact;
	private Date doj;
	private Date dob;
	private int valid;
}