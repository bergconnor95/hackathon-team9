package com.example.hackathon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.hackathon.model.*;
import com.example.hackathon.controller.DatabaseController;

import java.sql.SQLException;
import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class OpportunitiesController {
	
	private final static int ENTREPENEUR = 10000;
	private final static int SMALL_BUSINESS = 100000;
	private final static int STOREFRONT = 500000;
	private final static int IPO = 1000000;
	
	@Autowired
	private final DatabaseController dbc = new DatabaseController();
	
	@GetMapping(value = "/event-test", produces = "application/json")
	public void consoleTest() throws ClassNotFoundException, SQLException {
		Scanner scan = new Scanner(System.in);
		System.out.println("Amount of cash?");
		double temp = scan.nextInt();
		Event event = RNJesus(temp);
		System.out.println(event.getName() + " " + event.getDescription());
	}
	
	@GetMapping(value = "/user-test", produces = "application/json")
	public void consoleUserTest() {
		Scanner scan = new Scanner (System.in);
		System.out.println("Username?");
		String name = scan.next();
		User user = dbc.getUser(name);
		System.out.println(user.getUsername() + "!");
	}
	
	public Event RNJesus(Double currentCash) throws ClassNotFoundException, SQLException {
		Random random = new Random();
		if (random.nextInt() % 5 == 0) {
			return dbc.getEvent(findTier(currentCash));
		} else {
			return new Event();
		}
	}
	
	public int findTier(double currentCash) {
		if (currentCash < ENTREPENEUR) {
			return 1;
		} else if (currentCash < SMALL_BUSINESS) {
			return 2;
		} else if (currentCash < STOREFRONT) {
			return 3;
		} else {
			return 4;
		}
	}
}