package com.jobselector.backend.controller;

import com.jobselector.backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody Map<String, String> body) {
        String name = body.get("fullName");
        String email = body.get("email");
        String password = body.get("password");

        return authService.register(name, email, password);
    }

    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");

        return authService.login(email, password);
    }

    @PutMapping("/update-name")
    public String updateName(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String newName = body.get("fullName");

        return authService.updateName(email, newName);
    }

}
