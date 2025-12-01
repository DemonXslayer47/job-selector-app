package com.jobselector.backend.service;

import com.jobselector.backend.dto.JobResponseDTO;
import com.jobselector.backend.model.Job;
import com.jobselector.backend.model.JobSkillMapping;
import com.jobselector.backend.repository.JobRepository;
import com.jobselector.backend.repository.JobSkillMappingRepository;
import com.jobselector.backend.repository.SkillRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JobService {

    private final JobRepository jobRepository;
    private final JobSkillMappingRepository jobSkillMappingRepository;
    private final SkillRepository skillRepository;

    public List<JobResponseDTO> getRecommendedJobs(List<Integer> userSkillIds) {

        List<Job> allJobs = jobRepository.findAll();
        List<JobResponseDTO> result = new ArrayList<>();

        for (Job job : allJobs) {

            List<JobSkillMapping> mappings = jobSkillMappingRepository.findByJobId(job.getId());

            int totalImportance = mappings.stream()
                    .mapToInt(JobSkillMapping::getImportance)
                    .sum();

            int matchedImportance = mappings.stream()
                    .filter(m -> userSkillIds.contains(m.getSkillId()))
                    .mapToInt(JobSkillMapping::getImportance)
                    .sum();

            double matchPercentage = (matchedImportance * 100.0) / totalImportance;

            List<String> missingSkills = mappings.stream()
                    .filter(m -> !userSkillIds.contains(m.getSkillId()))
                    .map(m -> skillRepository.findById(m.getSkillId()).get().getName())
                    .collect(Collectors.toList());

            result.add(new JobResponseDTO(
                    job.getId(),
                    job.getTitle(),
                    job.getCompany(),
                    job.getLocation(),
                    job.getDescription(),
                    matchPercentage,
                    missingSkills
            ));
        }

        return result.stream()
                .sorted(Comparator.comparing(JobResponseDTO::getMatchPercentage).reversed())
                .collect(Collectors.toList());
    }
}
