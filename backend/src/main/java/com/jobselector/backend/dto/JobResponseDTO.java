package com.jobselector.backend.dto;

import lombok.*;
import java.util.List;

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
    private List<String> missingSkills;
}
