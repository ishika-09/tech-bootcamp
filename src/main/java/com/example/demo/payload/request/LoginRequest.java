package com.example.demo.payload.request;

import javax.validation.constraints.NotBlank;

public class LoginRequest {
	@NotBlank
  private String id;

	@NotBlank
	private String password;

	public String getid() {
		return id;
	}

	public void setid(String id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}