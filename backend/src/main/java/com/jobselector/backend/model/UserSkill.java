package com.jobselector.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserSkill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    // Later we will add userId when login is implemented
    // For now users just select skills anonymously

    @ManyToOne
    @JoinColumn(name = "skill_id")
    private Skill skill;
}
