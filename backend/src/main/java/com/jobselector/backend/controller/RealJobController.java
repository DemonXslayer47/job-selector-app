package com.jobselector.backend.controller;

import com.jobselector.backend.service.JobSearchAPIService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/jobs/external")
@RequiredArgsConstructor
public class RealJobController {

    private final JobSearchAPIService jobSearchAPIService;

    @GetMapping
    public ResponseEntity<?> getRealJobs(@RequestParam String skills) {
        try {
            String data = jobSearchAPIService.searchJobs(skills);
            return ResponseEntity.ok(data);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("API error: " + e.getMessage());
        }
    }
}
