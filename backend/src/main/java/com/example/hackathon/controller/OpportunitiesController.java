package com.example.hackathon.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.hackathon.model.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class OpportunitiesController {
	
	private final static int ENTREPENEUR = 10000;
	private final static int SMALL_BUSINESS = 100000;
	private final static int STOREFRONT = 500000;
	private final static int IPO = 1000000;
	
	@GetMapping(value = "/event", produces = "application/json")
	public Event RNJesus(Double currentCash) {
		Random random = new Random();
		if (random.nextInt() % 5 == 0) {
			return findEvent(findTier(currentCash));
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
	
	public Event findEvent(int tier) {
		//QUERY
		return new Event();
	}
}