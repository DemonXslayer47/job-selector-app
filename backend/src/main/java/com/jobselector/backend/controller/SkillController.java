package com.jobselector.backend.controller;

import com.jobselector.backend.repository.*;
import com.jobselector.backend.model.Skill;
import lombok.*;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/skills")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")

public class SkillController {

    private final SkillRepository skillRepository;

    @GetMapping
    public List<Skill> allSkills() {
        return skillRepository.findAll();
    }
}
