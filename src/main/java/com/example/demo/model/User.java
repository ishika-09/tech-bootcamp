package com.example.demo.model;

import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	@Column(name = "name" , nullable = false)
	private String name;
	@Column(name = "designation" , nullable = false)
	private String designation;
	@Column(name = "department" , nullable = false)
	private String department;
	@Column(name = "dob" , nullable = false)
	private Date dob;
	@Column (name = "doj" , nullable = false)
	private Date doj;
	@Column (name = "gender" , nullable = false)
	private String gender;
	@Column (name = "password" , nullable = false)
	private String password;
	@Column (name = "contact" , nullable = false)
	private long contact;
	@JsonManagedReference
	@OneToMany(mappedBy="user", fetch=FetchType.LAZY, cascade={CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
	private List<LoanCard> loanCards;
	
	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", designation=" + designation + ", department=" + department
				+ ", dob=" + dob + ", doj=" + doj + ", gender=" + gender + ", password=" + password + ", contact="
				+ contact + "]";
	}
}
