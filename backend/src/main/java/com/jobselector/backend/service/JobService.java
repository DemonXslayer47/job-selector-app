package com.jobselector.backend.service;

import com.jobselector.backend.dto.JobResponseDTO;
import com.jobselector.backend.dto.CourseRecommendationDTO;
import com.jobselector.backend.model.Job;
import com.jobselector.backend.model.Skill;
import com.jobselector.backend.model.JobSkillMapping;
import com.jobselector.backend.repository.JobRepository;
import com.jobselector.backend.repository.JobSkillMappingRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JobService {

        private final JobRepository jobRepository;
        private final JobSkillMappingRepository jobSkillMappingRepository;
        private final SkillService skillService;
        private final CourseService courseService;

        public List<JobResponseDTO> recommendJobs(List<String> userSkillNames) {

                // Convert skill names → skill objects
                List<Skill> userSkills = skillService.getSkillsFromNames(userSkillNames);

                if (userSkills.isEmpty())
                        return List.of();

                List<Job> allJobs = jobRepository.findAll();
                List<JobResponseDTO> results = new ArrayList<>();

                for (Job job : allJobs) {

                        // Get required skills for the job
                        List<JobSkillMapping> mappings = jobSkillMappingRepository.findByJob(job);

                        int totalImportance = mappings.stream()
                                        .mapToInt(JobSkillMapping::getImportance)
                                        .sum();

                        // Matched skills
                        List<JobSkillMapping> matched = mappings.stream()
                                        .filter(m -> userSkills.contains(m.getSkill()))
                                        .toList();

                        int matchedImportance = matched.stream()
                                        .mapToInt(JobSkillMapping::getImportance)
                                        .sum();

                        double matchPercentage = totalImportance == 0 ? 0
                                        : (matchedImportance * 100.0) / totalImportance;

                        // Missing skills
                        List<Skill> missingSkills = mappings.stream()
                                        .map(JobSkillMapping::getSkill)
                                        .filter(s -> !userSkills.contains(s))
                                        .toList();

                        // Course recommendations per missing skill
                        Map<String, List<CourseRecommendationDTO>> courseMap = new HashMap<>();

                        for (Skill missing : missingSkills) {
                                courseMap.put(
                                                missing.getName(),
                                                courseService.recommendCoursesForSkill(missing.getName()));
                        }

                        results.add(new JobResponseDTO(
                                        job.getId(),
                                        job.getTitle(),
                                        job.getCompany(),
                                        job.getLocation(),
                                        job.getDescription(),
                                        matchPercentage,
                                        matched.stream().map(m -> m.getSkill().getName()).toList(),
                                        missingSkills.stream().map(Skill::getName).toList(),
                                        courseMap));
                }

                // Sort by match % and return top 10
                return results.stream()
                                .sorted(Comparator.comparing(JobResponseDTO::getMatchPercentage).reversed())
                                .limit(10)
                                .collect(Collectors.toList());
        }
}
