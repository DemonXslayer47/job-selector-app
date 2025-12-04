package com.jobselector.backend.controller;

import com.jobselector.backend.repository.*;
import com.jobselector.backend.model.Course;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/courses")
@RequiredArgsConstructor
public class CourseController {

    private final CourseRepository courseRepository;

    @GetMapping("/{skill}")
    public List<Course> getCourses(@PathVariable String skill) {
        return courseRepository.findBySkillNameIgnoreCase(skill);
    }

}
