package com.jobselector.backend.dto;

import lombok.*;
import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobResponseDTO {

    private Integer jobId;
    private String title;
    private String company;
    private String location;
    private String description;

    private double matchPercentage;

    private List<String> matchedSkills;
    private List<String> missingSkills;

    // key = missing skill name, value = list of courses for that skill
    private Map<String, List<CourseRecommendationDTO>> courseRecommendations;
}
