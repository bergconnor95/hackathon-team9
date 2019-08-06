package com.example.hackathon.model;

import javax.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private int userID;
	private String username;
	private String password;
	private double rate;
	private double cash;
	
	@Override
	public String toString() {
		return userID + " - " + username + " / " + password + " (" + rate + "/" + cash + ")";
	}
	
	public int getUserID() {
		return userID;
	}
	
	public String getUsername() {
		return username;
	}
	
	public String getPassword() {
		return password;
	}
	
	private double getRate() {
		return rate;
	}
	
	private double getCash() {
		return cash;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public void setRate(double rate) {
		this.rate = rate;
	}
	
	public void setCash(double cash) {
		this.cash = cash;
	}

}
