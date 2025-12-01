package com.jobselector.backend.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.jobselector.backend.model.Skill;
import com.jobselector.backend.repository.SkillRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SkillService {
    private final SkillRepository skillRepository;

    public List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }
}
