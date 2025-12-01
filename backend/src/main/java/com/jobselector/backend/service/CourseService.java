package com.jobselector.backend.service;

import com.jobselector.backend.dto.CourseRecommendationDTO;
// import com.jobselector.backend.model.Course;
import com.jobselector.backend.repository.CourseRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository courseRepository;

    public List<CourseRecommendationDTO> getRecommendedCourses() {
        return courseRepository.findAll().stream()
                .map(c -> new CourseRecommendationDTO(
                        c.getTitle(),
                        c.getProvider(),
                        c.getLink(),
                        c.getDifficulty(),
                        c.getDuration(),
                        c.getRating()
                ))
                .toList();
    }
}
