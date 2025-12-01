package com.jobselector.backend.controller;

import com.jobselector.backend.model.Skill;
import com.jobselector.backend.service.SkillService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/skills")
public class SkillController {

    private final SkillService skillService;

    @GetMapping
    public List<Skill> getSkills() {
        return skillService.getAllSkills();
    }
}
