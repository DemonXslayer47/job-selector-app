package com.jobselector.backend.dto;

import lombok.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SkillGapDTO {
    private List<String> missingSkills;
}
