package com.jusoft.smittek.agrizi.controller;

import com.jusoft.smittek.agrizi.exception.UserNotFound;
import com.jusoft.smittek.agrizi.model.User;
import com.jusoft.smittek.agrizi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin( origins = "http://localhost:4200")
@RequestMapping("")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "id") long userId) throws UserNotFound {
        User user = userRepository.findById(userId).orElseThrow(() -> new UserNotFound("User not found for this id : " + userId));
        return ResponseEntity.ok().body(user);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") long userId, @RequestBody User userDetails) throws UserNotFound {
        User user = userRepository.findById(userId).orElseThrow(() -> new UserNotFound("User not found for this id : " + userId));
        user.setName(userDetails.getName());
        user.setPassword(userDetails.getPassword());
        user.setEmail(userDetails.getEmail());
        user.setTelephone(userDetails.getTelephone());
        user.setRank(userDetails.isRank());
        userRepository.save(user);
        return ResponseEntity.ok().body(user);
    }

    @DeleteMapping("/users/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") long userId) throws UserNotFound {
        User user = userRepository.findById(userId).orElseThrow(() -> new UserNotFound("User not found for this id : " + userId));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
