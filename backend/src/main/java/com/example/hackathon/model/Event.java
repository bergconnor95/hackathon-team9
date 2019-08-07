package com.example.hackathon.model;

import javax.persistence.*;

@Entity
public class Event {
	
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String name;
	private String description;
	private Double amount;
	private boolean confirm;
	private char positive;
	private int tier;
	private String outcome1;
	private String outcome2;
	private double adjust;
	
	@Override
	public String toString() {
		return name + " - " + description;
	}
	
	public int getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}
	
	public String getDescription() {
		return description;
	}
	
	public Double getAmount() {
		return amount;
	}
	
	public boolean getConfirm() {
		return confirm;
	}
	
	public char getPositive() {
		return positive;
	}
	
	public int getTier() {
		return tier;
	}
	
	public String getOutcome1() {
		return outcome1;
	}
	
	public String getOutcome2() {
		return outcome2;
	}
	
	public double getAdjust() {
		return adjust;
	}
}
