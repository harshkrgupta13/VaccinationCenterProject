package com.example.microservices.VaccinationCenter.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class VaccinationCenter {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column
	private String centerName;
	
	@Column
	private String centerAddress;
	
	@Column
	private int availability;
	
	public VaccinationCenter() {
		
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCenterName() {
		return centerName;
	}
	public void setCenterName(String centerName) {
		this.centerName = centerName;
	}
	public String getCenterAddress() {
		return centerAddress;
	}
	public void setCenterAddress(String centerAddress) {
		this.centerAddress = centerAddress;
	}

	public int getAvailability() {
		return availability;
	}

	public void setAvailability(int availability) {
		this.availability = availability;
	}

	@Override
	public String toString() {
		return "VaccinationCenter [id=" + id + ", centerName=" + centerName + ", centerAddress=" + centerAddress
				+ ", availability=" + availability + "]";
	}
	
}
