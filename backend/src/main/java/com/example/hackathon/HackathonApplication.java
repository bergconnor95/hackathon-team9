package com.example.hackathon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.hackathon.model.User;
import com.example.hackathon.repository.UserRepository;

@SpringBootApplication
public class HackathonApplication {

    public static void main(String[] args) {    	
        SpringApplication.run(HackathonApplication.class, args);
    }

}
