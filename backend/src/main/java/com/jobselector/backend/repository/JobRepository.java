package com.jobselector.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jobselector.backend.model.Job;

public interface JobRepository extends JpaRepository<Job, Integer> {}
