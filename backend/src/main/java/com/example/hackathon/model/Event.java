package com.example.hackathon.model;

public class Event {
	private String name;
	private String description;
	private Double amount;
	private boolean confirmTrigger;
	private char positive;
	private int tier;
	
	public String getName() {
		return name;
	}
	
	public String getDescription() {
		return description;
	}
	
	public Double getAmount() {
		return amount;
	}
	
	public boolean getConfirmTrigger() {
		return confirmTrigger;
	}
	
	public char getPositive() {
		return positive;
	}
	
	public int getTier() {
		return tier;
	}
}
