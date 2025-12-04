package com.jobselector.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jobselector.backend.model.Job;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Integer> {

    List<Job> findByTitleContainingIgnoreCase(String title);

    List<Job> findByDescriptionContainingIgnoreCase(String keyword);
}
