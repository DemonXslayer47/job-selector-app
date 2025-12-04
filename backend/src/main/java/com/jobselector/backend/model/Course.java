// package com.jobselector.backend.model;

// import jakarta.persistence.*;
// import lombok.*;

// @Entity
// @Data
// @NoArgsConstructor
// @AllArgsConstructor
// public class Course {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Integer id;

//     private String title;
//     private String provider;
//     private String link;

//     // Optional fields
//     private String difficulty;
//     private String duration;
//     private Double rating;
// }

package com.jobselector.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String skillName; // EASY: no join table errors
    private String courseName;
    private String provider;
    private String difficulty;
    private String duration;
    private Double rating;
    private String link;
}
