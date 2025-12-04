package com.jobselector.backend.controller;

import com.jobselector.backend.dto.JobResponseDTO;
import com.jobselector.backend.service.JobService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/jobs")
public class JobController {

    private final JobService jobService;

    @PostMapping("/recommend")
    public List<JobResponseDTO> recommendJobs(@RequestBody Map<String, List<String>> request) {

        List<String> userSkills = request.get("skills");

        return jobService.recommendJobs(userSkills);
    }
}
