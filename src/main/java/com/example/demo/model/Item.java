package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="item")
public class Item {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	@Column(name = "make" , nullable = false)
	private String make;
	@Column(name = "description" , nullable = false)
	private String description;
	@Column(name = "issue_status" , nullable = false)
	private String issue_status;
	@Column(name = "category" , nullable = false)
	private String category;
	@Column (name = "value" , nullable = false)
	private int value;
	
	@Override
	public String toString() {
		return "Item [id=" + id + ", make=" + make + ", description=" + description + ", issue_status=" + issue_status
				+ ", category=" + category + ", value=" + value + "]";
	}
	
}
