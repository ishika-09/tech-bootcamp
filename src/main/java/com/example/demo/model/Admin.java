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
@Table(name="admin")
public class Admin {
	@Id
	@Column(name = "id")
	private String id;
	@Column(name="password", nullable=false)
	private String password;
	
	@Override
	public String toString() {
		return "Admin [id=" + id + ", password=" + password + "]";
	}
	
}
