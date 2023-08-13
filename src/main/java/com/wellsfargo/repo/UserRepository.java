package com.wellsfargo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.model.User;

//@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}