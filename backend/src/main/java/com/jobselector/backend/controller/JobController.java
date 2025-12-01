package com.jobselector.backend.controller;

import com.jobselector.backend.dto.JobResponseDTO;
import com.jobselector.backend.service.JobService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/jobs")
public class JobController {

    private final JobService jobService;

    @PostMapping("/recommend")
    public List<JobResponseDTO> recommendJobs(@RequestBody List<Integer> skillIds) {
        return jobService.getRecommendedJobs(skillIds);
    }
}
