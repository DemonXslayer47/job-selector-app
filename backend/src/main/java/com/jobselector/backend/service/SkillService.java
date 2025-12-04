package com.jobselector.backend.service;

import java.util.List;
import java.util.Objects;

import org.springframework.stereotype.Service;

import com.jobselector.backend.model.Skill;
import com.jobselector.backend.repository.SkillRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SkillService {

    private final SkillRepository skillRepository;

    public List<Skill> getSkillsFromNames(List<String> names) {
        return names.stream()
                .map(skillRepository::findByNameIgnoreCase)
                .filter(Objects::nonNull)
                .toList();
    }
}
