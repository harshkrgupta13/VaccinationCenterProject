package com.example.microservices.CitizenService.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.microservices.CitizenService.Entity.Citizen;
import com.example.microservices.CitizenService.Repository.CitizenRepository;

@CrossOrigin
@RestController
@RequestMapping("/citizen")
public class CitizenController {
	
	@Autowired
	private CitizenRepository citizenRepository;
	
	@RequestMapping("/test")
	public ResponseEntity<String> test() {
		return new ResponseEntity<>("Hello",HttpStatus.OK);
	}
	
	@RequestMapping(path = "/id/{id}")
	public ResponseEntity<List<Citizen>> getById(@PathVariable int id) {
		List<Citizen> listCitizen = citizenRepository.findByVaccinationCenterId(id);
		return new ResponseEntity<>(listCitizen,HttpStatus.OK);
	}
	
	@PostMapping("/addCitizen")
	public Citizen addCitizen(@RequestBody Citizen citizen) {
		return citizenRepository.save(citizen);
	}
	
	@GetMapping("/list")
	public List<Citizen> getCitizenList(){
		return citizenRepository.findAll();
	}
}
