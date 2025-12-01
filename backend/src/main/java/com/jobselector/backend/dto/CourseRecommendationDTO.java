package com.jobselector.backend.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseRecommendationDTO {
    private String title;
    private String provider;
    private String link;
    private String difficulty;
    private String duration;
    private Double rating;
}
