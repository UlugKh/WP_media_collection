package com.wp.studyTracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(exclude = {org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration.class})
public class StudyTrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudyTrackerApplication.class, args);
	}

}
