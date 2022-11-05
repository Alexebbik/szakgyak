package com.jusoft.smittek.agrizi.services.repository;

import com.jusoft.smittek.agrizi.services.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {

}
