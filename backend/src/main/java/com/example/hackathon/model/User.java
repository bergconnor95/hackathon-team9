package com.example.hackathon.model;

public class User {
	private int userID;
	private String username;
	private String password;
	private double rate;
	private double cash;
	
	public User(int userID, String username, String password, double rate, double cash) {
		this.userID = userID;
		this.username = username;
		this.password = password;
		this.rate = rate;
		this.cash = cash;
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
	
	public void setUserID(int userID) {
		this.userID = userID;
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
