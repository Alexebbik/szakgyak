package com.jusoft.smittek.agrizi.controller;

import com.jusoft.smittek.agrizi.exception.ServiceNotFound;
import com.jusoft.smittek.agrizi.model.Service;
import com.jusoft.smittek.agrizi.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("")
public class ServiceController {

    @Autowired
    private ServiceRepository serviceRepository;

    @GetMapping("/services")
    public List<Service> getAllServices() {
        return serviceRepository.findAll();
    }

    @PostMapping("/services")
    public Service createService(@RequestBody Service service) {
        return serviceRepository.save(service);
    }

    @GetMapping("/services/{id}")
    public ResponseEntity<Service> getServiceById(@PathVariable(value = "id") long serviceId) throws ServiceNotFound {
        Service service = serviceRepository.findById(serviceId).orElseThrow(() -> new ServiceNotFound("Service not found for this id : " + serviceId));
        return ResponseEntity.ok().body(service);
    }

    @PutMapping("/services/{id}")
    public ResponseEntity<Service> updateService(@PathVariable(value = "id") long serviceId, @RequestBody Service serviceDetails) throws ServiceNotFound {
        Service service = serviceRepository.findById(serviceId).orElseThrow(() -> new ServiceNotFound("Service not found for this id : " + serviceId));
        service.setName(serviceDetails.getName());
        service.setEmail(serviceDetails.getEmail());
        service.setTelephone(serviceDetails.getTelephone());
        service.setType(serviceDetails.getType());
        service.setPrice(serviceDetails.getPrice());
        service.setTime(serviceDetails.getTime());
        serviceRepository.save(service);
        return ResponseEntity.ok().body(service);
    }

    @DeleteMapping("/services/{id}")
    public Map<String, Boolean> deleteService(@PathVariable(value = "id") long serviceId) throws ServiceNotFound {
        Service service = serviceRepository.findById(serviceId).orElseThrow(() -> new ServiceNotFound("Service not found for this id : " + serviceId));

        serviceRepository.delete(service);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
