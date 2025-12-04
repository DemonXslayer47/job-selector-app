package com.jobselector.backend.controller;

import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import com.jobselector.backend.repository.UserRepository;
import com.jobselector.backend.model.User;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserRepository userRepository;

    @GetMapping("/me/{email}")
    public User getUser(@PathVariable String email) {
        return userRepository.findByEmail(email);
    }
}
