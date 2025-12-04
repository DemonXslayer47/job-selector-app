package com.jobselector.backend.service;

import com.jobselector.backend.model.User;
import com.jobselector.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    // REGISTER
    public String register(String name, String email, String password) {

        if (userRepository.findByEmail(email) != null) {
            return "EMAIL_EXISTS";
        }

        User user = new User();
        user.setFullName(name);
        user.setEmail(email);
        user.setPassword(password); // 🔥 Plain password for now — will hash later

        userRepository.save(user);
        return "SUCCESS";
    }

    // LOGIN
    public String login(String email, String password) {

        User user = userRepository.findByEmail(email);

        if (user == null)
            return "NO_USER";

        if (!user.getPassword().equals(password))
            return "WRONG_PASSWORD";

        return "SUCCESS";
    }

    public String updateName(String email, String newName) {
        User user = userRepository.findByEmail(email);

        if (user == null) {
            return "User not found";
        }

        user.setFullName(newName);
        userRepository.save(user);

        return "Name updated successfully";
    }

}
