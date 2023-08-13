package com.wellsfargo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "loan-card")
public class LoanCard {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	@Column(name = "type" , nullable = false)
	private String type;
	@Column(name = "interest" , nullable = false)
	private float interest;
	@Column(name = "item_id" , nullable = false)
	private String item_id;
	@Column(name = "emp_id" , nullable = false)
	private String emp_id;
	@Column (name ="issue_date" , nullable = false)
	private Date issue_date;
	@Column (name = "duration" , nullable = false)
	private int duration;
	
}