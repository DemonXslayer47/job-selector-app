package com.jobselector.backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.jobselector.backend.model.JobSkillMapping;

public interface JobSkillMappingRepository extends JpaRepository<JobSkillMapping, Integer> {
    List<JobSkillMapping> findByJobId(Integer jobId);
}
