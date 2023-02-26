package com.starapp.showlist_employees_to_manager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class ShowlistEmployeesToManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShowlistEmployeesToManagerApplication.class, args);
	}

}
