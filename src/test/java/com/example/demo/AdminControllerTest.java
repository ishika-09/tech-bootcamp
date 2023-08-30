package com.example.demo;


import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.example.demo.model.*;
import com.example.demo.payload.request.LoginRequest;
import com.example.demo.*;
import com.example.demo.dto.UserDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import org.springframework.*;

import com.example.demo.repo.AdminRepository;
import com.example.demo.repo.ItemRepository;
import com.example.demo.repo.LoanCardRepository;
import com.example.demo.repo.UserRepository;
import com.example.demo.service.AdminService;
import com.example.demo.service.CustomUserDetailsService;
import com.example.demo.service.ItemService;
import com.example.demo.service.LoanCardService;
import com.example.demo.service.UserService;


@RunWith(SpringRunner.class)
@WebMvcTest
public class AdminControllerTest {
	
	@Autowired
	private MockMvc mvc;
	
	@MockBean 
	private ItemService itemService;
	
	@MockBean 
	private AdminService adminService;
	
	@MockBean 
	private LoanCardService loanCardService;
	
	@MockBean 
	private UserService userService;
	
	@MockBean 
	private CustomUserDetailsService customerUserDetailsService;
	
	@MockBean 
	private ItemRepository itemRepository;
	
	@MockBean
	private AdminRepository adminRepository;
	
	@MockBean
	private UserRepository userRepository;
	
	
	@MockBean
	private LoanCardRepository loanCardRepository;
	
	@MockBean
	PasswordEncoder encoder;
	
	ObjectMapper mapper = new ObjectMapper().findAndRegisterModules().disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
	

	
	@SuppressWarnings("deprecation")
	@Test
	public void testAddEmployee() throws Exception{
		UserDto e = new UserDto();
		e.setDob(new Date());
		e.setDoj(new Date());
		e.setDepartment("IT");
		e.setDesignation("Manager");
		e.setId(123456);
		e.setName("employee");
		e.setGender("M");
		e.setPassword(encoder.encode("Password@1"));
		Mockito.when(userService.createUser(ArgumentMatchers.any())).thenReturn(e);
		String json = mapper.writeValueAsString(e);

//		mvc.perform(post("/users/register").contentType(MediaType.APPLICATION_JSON_UTF8).content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(status().isOk()).andExpect(jsonPath("$.id",Matchers.equalTo(e.getId())));

		
	
	}
//	@SuppressWarnings("deprecation")
//	@Test
//	public void testAddLoan() throws Exception{
//		Loan l = new Loan();
//		l.setLoan_id("L0001");
//		l.setDuration(3);
//		l.setLoan_type("Furniture");
//		Mockito.when(loanService.addLoan(ArgumentMatchers.any())).thenReturn(l);
//		String json = mapper.writeValueAsString(l);
//
//		mvc.perform(post("/api/admin/loans/add").contentType(MediaType.APPLICATION_JSON_UTF8).content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$.loan_id",Matchers.equalTo(l.getLoan_id())));
//	}
//	
	@Test
	public void testFindAll() throws Exception {
		List<UserDto> list = new ArrayList<>();
		UserDto e = new UserDto();	
		e.setDob(new Date());
		e.setDoj(new Date());
		e.setDesignation("Manager");
		e.setId(123456);
		e.setName("employee");
		e.setGender("M");
		e.setPassword(encoder.encode("Password@1"));
		list.add(e);
		Mockito.when(userService.getAllValidUsers()).thenReturn(list);
		
//		mvc.perform(get("/users/allValid").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$",Matchers.hasSize(1)));
		
		
	}
	
//	@Test
//	public void testFindAllLoans() throws Exception {
//		List<Loan> list = new ArrayList<>();
//		Loan l = new Loan();
//		l.setLoan_id("L0001");
//		l.setDuration(3);
//		l.setLoan_type("Furniture");
//		list.add(l);
//		Mockito.when(loanService.findAllLoans()).thenReturn(list);
//		
//		mvc.perform(get("/api/admin/loans/all").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$",Matchers.hasSize(1)));
//	}
//	
//	
//	@SuppressWarnings("deprecation")
//	@Test
//	public void testUpdateEmployee() throws Exception {
//		Employee e = new Employee();	
//		e.setDate_of_birth(new Date());
//		e.setDate_of_joining(new Date());
//		e.setDepartment("IT");
//		e.setDesignation("Manager");
//		e.setEmployee_id("123456");
//		e.setEmployee_name("employee");
//		e.setGender('M');
//		e.setPassword("Password@1");
//		//list.add(e);
//		Mockito.when(employeeService.updateEmployee(ArgumentMatchers.any())).thenReturn(e);
//		String json = mapper.writeValueAsString(e);
//
//		mvc.perform(put("/api/admin/update").contentType(MediaType.APPLICATION_JSON_UTF8).content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath("$.employee_id",Matchers.equalTo(e.getEmployee_id())));
//	}
//	
//	@Test
//	public void testDeleteEmployee() throws Exception {
//		String id = "123456";
//		String e = "str";
//		Mockito.when(employeeService.deleteEmployee(id)).thenReturn(e);
//		
//		MvcResult requestResult= mvc.perform(delete("/api/admin/delete/{id}",id).contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andReturn();
//		String result = requestResult.getResponse().getContentAsString();
//		assertEquals(result,e);
//	}
//	
//	
//	@Test
//	public void testDeleteLoan() throws Exception {
//		String id = "L0002";
//		String e = "str";
//		Mockito.when(loanService.deleteLoan(id)).thenReturn(e);
//		
//		MvcResult requestResult = mvc.perform(delete("/api/admin/loans/delete/{id}",id).contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andReturn();
//		String result = requestResult.getResponse().getContentAsString();
//		assertEquals(result,e);
//	}
//	
//	
//	@Test
//	public void testDeleteItem() throws Exception {
//		String id = "1";
//		String e = "str";
//		Mockito.when(itemService.deleteItem(ArgumentMatchers.any())).thenReturn(e);
//		
//		MvcResult requestResult = mvc.perform(delete("/api/admin/items/delete/{id}",id).contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andReturn();
//		String result = requestResult.getResponse().getContentAsString();
//		assertEquals(result,e);
//	}
	
}

	
