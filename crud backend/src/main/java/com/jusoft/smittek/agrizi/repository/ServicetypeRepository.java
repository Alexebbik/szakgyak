package com.jusoft.smittek.agrizi.repository;

import com.jusoft.smittek.agrizi.model.Servicetype;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicetypeRepository extends JpaRepository<Servicetype, Long>  {

}
