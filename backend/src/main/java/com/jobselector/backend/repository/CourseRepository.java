package com.jobselector.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jobselector.backend.model.Course;
import java.util.List;

// public interface CourseRepository extends JpaRepository<Course, Integer> {}
public interface CourseRepository extends JpaRepository<Course, Long> {

    List<Course> findBySkillNameIgnoreCase(String skillName);
}
