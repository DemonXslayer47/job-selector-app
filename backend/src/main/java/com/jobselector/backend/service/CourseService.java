// package com.jobselector.backend.service;

// import java.util.List;
// import java.util.stream.Collectors;

// import org.springframework.stereotype.Service;

// import com.jobselector.backend.dto.CourseRecommendationDTO;
// import com.jobselector.backend.model.Course;
// import com.jobselector.backend.repository.CourseRepository;

// import lombok.RequiredArgsConstructor;

// @Service
// @RequiredArgsConstructor
// public class CourseService {

//     private final CourseRepository courseRepository;

//     public List<CourseRecommendationDTO> getRecommendedCourses() {
//         return courseRepository.findAll().stream()
//                 .map(c -> new CourseRecommendationDTO(
//                         c.getTitle(),
//                         c.getProvider(),
//                         c.getLink(),
//                         c.getDifficulty(),
//                         c.getDuration(),
//                         c.getRating()))
//                 .toList();
//     }

//     public List<CourseRecommendationDTO> recommendCoursesForSkill(String missingSkill) {
//         List<Course> all = courseRepository.findAll();

//         return all.stream()
//                 .filter(c -> c.getTitle().toLowerCase().contains(missingSkill.toLowerCase()))
//                 .map(c -> new CourseRecommendationDTO(
//                         c.getTitle(),
//                         c.getProvider(),
//                         c.getLink(),
//                         c.getDifficulty(),
//                         c.getDuration(),
//                         c.getRating()))
//                 .limit(3)
//                 .collect(Collectors.toList());
//     }
// }
package com.jobselector.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.jobselector.backend.dto.CourseRecommendationDTO;
import com.jobselector.backend.model.Course;
import com.jobselector.backend.repository.CourseRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CourseService {

        private final CourseRepository courseRepository;

        public List<CourseRecommendationDTO> recommendCoursesForSkill(String skillName) {

                return courseRepository.findBySkillNameIgnoreCase(skillName)
                                .stream()
                                .map(course -> new CourseRecommendationDTO(
                                                course.getCourseName(), // title
                                                course.getProvider(), // provider
                                                course.getLink(), // link
                                                course.getDifficulty(), // difficulty
                                                course.getDuration(), // duration
                                                course.getRating() // rating
                                ))
                                .toList();
        }
}
