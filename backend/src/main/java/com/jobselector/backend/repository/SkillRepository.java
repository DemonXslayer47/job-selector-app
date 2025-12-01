package com.jobselector.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jobselector.backend.model.Skill;

public interface SkillRepository extends JpaRepository<Skill, Integer> {}
