package com.jobselector.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jobselector.backend.model.JobSkillMapping;
import com.jobselector.backend.model.Job;
import com.jobselector.backend.model.Skill;

import java.util.List;

public interface JobSkillMappingRepository extends JpaRepository<JobSkillMapping, Integer> {

    // Get all required skills for a job
    List<JobSkillMapping> findByJob(Job job);

    // Get all mappings where skill matches
    List<JobSkillMapping> findBySkill(Skill skill);

    // IMPORTANT: for skill matching logic
    List<JobSkillMapping> findBySkillIn(List<Skill> skills);
}
