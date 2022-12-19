package com.jusoft.smittek.agrizi.controller;


import com.jusoft.smittek.agrizi.exception.ServicetypeNotFound;
import com.jusoft.smittek.agrizi.model.Servicetype;
import com.jusoft.smittek.agrizi.repository.ServicetypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin( origins = "http://localhost:4200")
@RequestMapping("")
public class ServicetypeController {

  @Autowired
  private ServicetypeRepository servicetypeRepository;

  @GetMapping("/servicetpyes")
  public List<Servicetype> getAllServicetypes() {
    return servicetypeRepository.findAll();
  }

  @PostMapping("/servicetpyes")
  public Servicetype createServicetype(@RequestBody Servicetype servicetype) {
    return servicetypeRepository.save(servicetype);
  }

  @GetMapping("/servicetpyes/{id}")
  public ResponseEntity<Servicetype> getServicetypeById(@PathVariable(value = "id") long servicetypeId) throws ServicetypeNotFound {
    Servicetype servicetype = servicetypeRepository.findById(servicetypeId).orElseThrow(() -> new ServicetypeNotFound("Service Type not found for this id : " + servicetypeId));
    return ResponseEntity.ok().body(servicetype);
  }

  @PutMapping("/servicetpyes/{id}")
  public ResponseEntity<Servicetype> updateServicetype(@PathVariable(value = "id") long servicetypeId, @RequestBody Servicetype servicetypeDetails) throws ServicetypeNotFound {
    Servicetype servicetype = servicetypeRepository.findById(servicetypeId).orElseThrow(() -> new ServicetypeNotFound("Service Type not found for this id : " + servicetypeId));
    servicetype.setType(servicetypeDetails.getType());
    servicetypeRepository.save(servicetype);
    return ResponseEntity.ok().body(servicetype);
  }

  @DeleteMapping("/servicetpyes/{id}")
  public Map<String, Boolean> deleteServicetype(@PathVariable(value = "id") long servicetypeId) throws ServicetypeNotFound {
    Servicetype servicetype = servicetypeRepository.findById(servicetypeId).orElseThrow(() -> new ServicetypeNotFound("Service Type not found for this id : " + servicetypeId));

    servicetypeRepository.delete(servicetype);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return response;
  }
}
