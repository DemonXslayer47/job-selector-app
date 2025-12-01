package com.jobselector.backend.controller;

import com.jobselector.backend.dto.CourseRecommendationDTO;
import com.jobselector.backend.service.CourseService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/courses")
public class CourseController {

    private final CourseService courseService;

    @GetMapping("/recommend")
    public List<CourseRecommendationDTO> recommendCourses() {
        return courseService.getRecommendedCourses();
    }
}
