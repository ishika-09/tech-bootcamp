package com.example.demo.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "loancard")
public class LoanCard {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	@Column(name = "type" , nullable = false)
	private String type;
	@Column(name = "interest" , nullable = false)
	private float interest;
	@OneToOne
	@JoinColumn(name = "item_id" , nullable = false, referencedColumnName="id")
	private Item item;
	@JsonBackReference
	@ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
	@JoinColumn(name = "user_id" , nullable = false, referencedColumnName="id")
	private User user;
	@Column (name ="issue_date" , nullable = false)
	private Date issue_date;
	@Column (name = "duration" , nullable = false)
	private int duration;
	@Column (name = "valid" , nullable = false)
	private int valid = 0;

	@Override
	public String toString() {
		return "LoanCard [id=" + id + ", type=" + type + ", interest=" + interest + ", item=" + item + ", user=" + user
				+ ", issue_date=" + issue_date + ", duration=" + duration + "]";
	}

	
	
}
