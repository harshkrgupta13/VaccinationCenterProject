package com.example.microservices.VaccinationCenter.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.microservices.VaccinationCenter.Entity.VaccinationCenter;

public interface VaccinationCenterRepository extends JpaRepository<VaccinationCenter, Integer>{

}
