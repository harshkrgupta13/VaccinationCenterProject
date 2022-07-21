package com.example.microservices.VaccinationCenter.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.microservices.VaccinationCenter.Entity.User;
import com.example.microservices.VaccinationCenter.Model.AuthenticationStatus;
import com.example.microservices.VaccinationCenter.Service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

	private UserService userService;

	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}

	@PostMapping
	public User saveUser(@RequestBody User user) {
		return userService.saveUser(user);
	}

	@PostMapping("/authenticate")
	public ResponseEntity<AuthenticationStatus> authenticated(@RequestBody User user) {
		String actualPassword = null;
		String password = user.getPassword();
		AuthenticationStatus status = new AuthenticationStatus();
		status.setAuthenticated(false);
		User actualUser = userService.getUser(user.getUsername());
		if (actualUser != null) {
			actualPassword = actualUser.getPassword();
			if (actualPassword.equals(password)) {
				status.setUser(actualUser);
			}
		}
		status.setAuthenticated(password.equals(actualPassword));
		return new ResponseEntity<AuthenticationStatus>(status, HttpStatus.OK);
	}
}
