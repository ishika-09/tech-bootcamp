package com.example.demo.payload.request;

import javax.validation.constraints.NotBlank;

public class LoginRequest {
	@NotBlank
  private int id;

	@NotBlank
	private String password;

	public int getid() {
		return id;
	}

	public void setid(int id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}