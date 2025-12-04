package com.jobselector.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobSkillMapping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    // Reference Job
    @ManyToOne
    @JoinColumn(name = "job_id")
    private Job job;

    // Reference Skill
    @ManyToOne
    @JoinColumn(name = "skill_id")
    private Skill skill;

    // Optional: skill importance percentage or ranking
    private Integer importance;
}
