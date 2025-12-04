package com.jobselector.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jobselector.backend.model.Skill;
import java.util.List;

// public interface SkillRepository extends JpaRepository<Skill, Integer> {
//     Skill findByNameIgnoreCase(String name);
// }

public interface SkillRepository extends JpaRepository<Skill, Long> {

    List<Skill> findByNameContainingIgnoreCase(String name);

    Skill findByNameIgnoreCase(String name);
}
