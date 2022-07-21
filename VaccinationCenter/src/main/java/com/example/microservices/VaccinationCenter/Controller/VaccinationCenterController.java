package com.example.microservices.VaccinationCenter.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.microservices.VaccinationCenter.Entity.VaccinationCenter;
import com.example.microservices.VaccinationCenter.Model.Citizen;
import com.example.microservices.VaccinationCenter.Model.RequiredResponse;
import com.example.microservices.VaccinationCenter.Repository.VaccinationCenterRepository;

@CrossOrigin
@RestController
@RequestMapping("/vaccinationcenter")
public class VaccinationCenterController {

	@Autowired
	private VaccinationCenterRepository vaccinationCenterRepository;

	@Autowired
	private RestTemplate restTemplate;

	@PostMapping("/add")
	public VaccinationCenter addVaccinationCenter(@RequestBody VaccinationCenter vaccinationCenter) {
		return vaccinationCenterRepository.save(vaccinationCenter);
	}

	@GetMapping("/id/{id}")
	public ResponseEntity<RequiredResponse> getAllDataByCenterId(@PathVariable int id) {
		RequiredResponse requiredResponse = new RequiredResponse();
		VaccinationCenter vaccinationCenter = vaccinationCenterRepository.findById(id).get();
		requiredResponse.setCenter(vaccinationCenter);

		@SuppressWarnings("unchecked")
		List<Citizen> listCitizen = restTemplate.getForObject("http://CITIZEN-SERVICE/citizen/id/" + id, List.class);
		requiredResponse.setCitizens(listCitizen);

		return new ResponseEntity<RequiredResponse>(requiredResponse, HttpStatus.OK);
	}

	@GetMapping("{id}")
	public VaccinationCenter getCenterById(@PathVariable("id") int id) {
		return vaccinationCenterRepository.findById(id).get();
	}

	@GetMapping("/list")
	public List<VaccinationCenter> getVaccinationCenterList() {
		return vaccinationCenterRepository.findAll();
	}

	@PutMapping("/updateAvailability/{id}")
	public ResponseEntity<VaccinationCenter> updateCenter(@PathVariable("id") int id,
			@RequestBody VaccinationCenter vCD) {
		VaccinationCenter vc = vaccinationCenterRepository.findById(id).get();
		System.out.println(vc);
		int a = 0;
		a = vCD.getAvailability();
		System.out.println(a);
		a = a - 1;
		vc.setAvailability(a);
		VaccinationCenter updatedVC = vaccinationCenterRepository.save(vc);
		System.out.println(updatedVC);
		return ResponseEntity.ok(updatedVC);
	}

	@PutMapping("{id}")
	public ResponseEntity<VaccinationCenter> updateVaccinationCenter(@PathVariable("id") int id,
			@RequestBody VaccinationCenter vCDetails) {
		VaccinationCenter vCenter = vaccinationCenterRepository.findById(id).get();
		System.out.println(vCenter);
		vCenter.setCenterName(vCDetails.getCenterName());
		vCenter.setCenterAddress(vCDetails.getCenterAddress());
		vCenter.setAvailability(vCDetails.getAvailability());
		VaccinationCenter updatedVaccinationCenter = vaccinationCenterRepository.save(vCenter);
		System.out.println(updatedVaccinationCenter);
		return ResponseEntity.ok(updatedVaccinationCenter);
	}
	
	@DeleteMapping("{id}")
	public void deleteVaccinationCenterById(@PathVariable int id) {
		VaccinationCenter vaccinationCenter = vaccinationCenterRepository.findById(id).get();
		vaccinationCenterRepository.delete(vaccinationCenter);
	}
}
