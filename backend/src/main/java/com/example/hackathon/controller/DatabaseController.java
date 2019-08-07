package com.example.hackathon.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.hackathon.model.Event;
import com.example.hackathon.model.User;
import com.example.hackathon.repository.EventRepository;
import com.example.hackathon.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class DatabaseController {
	
	@Autowired
	EventRepository eventRepository;
	
	@Autowired
	UserRepository userRepository;
	
	public Event getEvent(int tier) throws ClassNotFoundException, SQLException {
		List<Event> eventList = eventRepository.findByTier(tier);
		Random random = new Random();
		Event event = eventList.get(random.nextInt(eventList.size()));
		return event;
	}
	
	public User getUser(String username) {
		List<User> userList = userRepository.findByUsername(username);
		return userList.get(userList.size()-1);
	}
}

