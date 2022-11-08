package com.jusoft.smittek.agrizi.repository;

import com.jusoft.smittek.agrizi.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {

}
