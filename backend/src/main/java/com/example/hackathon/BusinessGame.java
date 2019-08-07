package com.example.hackathon;

import java.util.Scanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.hackathon.controller.*;
import com.example.hackathon.model.*;
import com.example.hackathon.repository.*;
import java.lang.IndexOutOfBoundsException;
import java.sql.SQLException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BusinessGame {
		
	@Autowired
	private final DatabaseController dbc = new DatabaseController();
	
	@Autowired
	private final OpportunitiesController opc = new OpportunitiesController();
	
	Scanner scan = new Scanner(System.in);
	Boolean endGame = false;
	
	private final static int ENTREPENEUR = 10000;
	private final static int SMALL_BUSINESS = 100000;
	private final static int STOREFRONT = 500000;
	private final static int IPO = 1000000;
	
	@GetMapping(value = "/game-test", produces = "application/json")
	public void main (String[]args) throws ClassNotFoundException, SQLException {
		startGame();
		
		User player = new User();
		player = getPlayer();
		
		while (!endGame) {
			player = turn(player);
			shareStatus(player);
			continuePlaying();
		}
		System.out.println("Thank you for playing, " + player.getUsername());
		System.out.println("Your final cash was " + player.getCash() + " and your final rate was " + player.getRate());
	}
	
	public void startGame() {
		char begin = 'n';
		while (begin != 'y' && begin != 'Y') {
			System.out.println("Do you want to play a game?");
			begin = scan.next().charAt(0);
		}
	}
	
	public User getPlayer() {
		boolean validUsername = false;
		boolean loggedIn = false;
		User user = new User();
		while (!validUsername) {
			System.out.println("Username?");
			String username = scan.next();
			try {
				user = dbc.getUser(username);
				validUsername = true;
			} catch (IndexOutOfBoundsException e) {
				System.out.println("That user does not exist. Pleas try again.");
				validUsername = false;
			}
		} while (!loggedIn) {
			System.out.println("Password?");
			String password = scan.next();
			if (password.equals(user.getPassword())) {
				loggedIn = true;
			} else {
				System.out.println("That password is incorrect. Please try again.");
			}
		}
		return user;
	}
	
	public User turn(User player) throws ClassNotFoundException, SQLException {
		//Earned money
		player.setCash(player.getCash() + player.getRate());
		
		//Get an event
		Event event = new Event();
		event = opc.RNJesus(player.getCash());
		
		if (event != null) {
			
			//Display the event
			System.out.println(event.getName() + " - " + event.getDescription());
			
			//If there is no confirm trigger
			if (!event.getConfirm()) {
				//Adjust cash
				player.setCash(player.getCash() + event.getAmount());
				//Adjust rate
				player.setRate(player.getRate() + event.getAdjust());
			} 
			
			//Confirm trigger event
			else {
				//Get player choice
				System.out.println("Option one or option two?");
				int playerChoice = scan.nextInt();
				
				//Outcome 1
				if (playerChoice == 1) {
					System.out.println(event.getOutcome1());
					//Adjust cash
					player.setCash(player.getCash() + event.getAmount());
					//Adjust rate
					player.setRate(player.getRate() + event.getAdjust());
				}
				
				//Outcome 2
				else {
					System.out.println(event.getOutcome2());
				}
			}
		}
		return player;
	}
	
	public void shareStatus(User player) {
		System.out.println(player.getUsername() + ", your cash is " + player.getCash() + " and your rate is " + player.getRate());
		int cashMoney = (int) Math.round(player.getCash());
				
		if (cashMoney <= ENTREPENEUR) { 
				System.out.println("You are an Entrepeneur!");
		} else if (cashMoney <= SMALL_BUSINESS) {
			System.out.println("You are a small business owner!");
		} else if (cashMoney <= STOREFRONT) {
			System.out.println("Youhave a storefront!");
		} else {
			System.out.println("Congratulations! You can offer an initial public offering, and you've beaten the game!");
			endGame = true;
		}
	}
	
	public void continuePlaying() {
		if (!endGame) {
			System.out.println("Continue playing?");
			String playerResponse = scan.next();
			if (playerResponse.charAt(0) == 'n' || playerResponse.charAt(0) == 'N') {
				endGame = true;
			}
		}
	}
}

