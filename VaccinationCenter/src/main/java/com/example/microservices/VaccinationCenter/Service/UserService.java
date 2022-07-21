package com.example.microservices.VaccinationCenter.Service;

import org.springframework.stereotype.Service;

import com.example.microservices.VaccinationCenter.Entity.User;
import com.example.microservices.VaccinationCenter.Repository.UserRepository;

@Service
public class UserService {

	private UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	public User saveUser(User user) {
		return userRepository.save(user);
	}

	public User getUser(String username) {
		return userRepository.findByUsername(username);
	}

}
