package com.example.hackathon.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;

import javax.validation.constraints.Size;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FredController {

    //Won't change
    private final static String FREDURL = new String("https://api.stlouisfed.org/fred/");
    private final static String FILETYPE = new String("&file_type=json");
    private final static String APIKEY = new String ("api_key=bb4b70e54a95f11bcdbe2e70379f6825");
    
    //Will change from user input - hard coded for now
    private final static String TYPE = new String("series/observations?");
    
    @CrossOrigin
    @GetMapping(value = "/fred", produces = "application/json")
    public Double getFred(@RequestParam @Size(min = 2, max = 2) String stateCode) {
        ArrayList<String> test = new ArrayList<String>(GetRealWageByState(stateCode));
        String temp = (test.get(test.size() -1));
        Double rate = (Double.parseDouble(temp.substring(temp.length()-9, temp.length()-4)))/8;
   
        return rate;
    }
    
    private static ArrayList<String> GetMedianWeeklyEarnings() {
        ArrayList<String> contentList = new ArrayList<String>();
        try {
            URL url = new URL(FREDURL + TYPE + APIKEY + FILETYPE + "&series_id=LEU0252881600A");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            connection.setRequestProperty("Content-Type", "application/json");
            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                contentList.add(inputLine);
            }
            in.close();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return contentList;
    }
    
    
    private static ArrayList<String> GetMedianAnnualIncomeByState(String stateCode) {
        ArrayList<String> contentList = new ArrayList<String>();
        try {
            URL url = new URL(FREDURL + TYPE + APIKEY + FILETYPE + "&series_id=MEHOINUS" + stateCode  + "A672N ");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            connection.setRequestProperty("Content-Type", "application/json");
            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                contentList.add(inputLine);
            }
            in.close();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return contentList;
    }
    
    private static ArrayList<String> GetRealWageByState(String stateCode) {
        
        String series_id = "&series_id=";
        
        switch(stateCode) {
            case "AL":
                series_id = series_id + "MWACL01003";
                break;
            case "AK":
                series_id = series_id + "MWACL02090";
                break;
            case "AR":
                series_id = series_id + "MWACL05145";
                break;
            case "AZ":
                series_id = series_id + "MWACL04017";
                break;
            case "CA":
                series_id = series_id + "MWACL06037";
                break;
            case "CO":
                series_id = series_id + "MWACL09001";
                break;    
            case "CT":
                series_id = series_id + "MWACL09001";
                break;    
            case "DE":
                series_id = series_id + "MWACL10001";
                break;    
            case "DC":
                series_id = series_id + "MWACL11001";
                break;    
            case "FL":
                series_id = series_id + "MWACL12001";
                break;    
            case "GA":
                series_id = series_id + "MWACL13121";
                break;    
            case "HI":
                series_id = series_id + "MWACL15001";
                break;    
            case "ID":
                series_id = series_id + "MWACL16001";
                break;    
            case "IL":
                series_id = series_id + "MWACL17031";
                break;    
            case "IA":
                series_id = series_id + "MWACL19153";
                break;    
            case "IN":
                series_id = series_id + "MWACL18097";
                break;    
            case "KS":
                series_id = series_id + "MWACL20091";
                break;    
            case "KY":
                series_id = series_id + "MWACL21067";
                break;    
            case "LA":
                series_id = series_id + "MWACL22033";
                break;    
            case "MD":
                series_id = series_id + "MWACL24510";
                break;    
            case "ME":
                series_id = series_id + "MWACL23003";
                break;    
            case "MA":
                series_id = series_id + "MWACL25017";
                break;    
            case "MI":
                series_id = series_id + "MWACL26163";
                break;    
            case "MN":
                series_id = series_id + "MWACL27053";
                break;    
            case "MS":
                series_id = series_id + "MWACL28049";
                break;    
            case "MO":
                series_id = series_id + "MWACL29095";
                break;    
            case "MT":
                series_id = series_id + "MWACL30031";
                break;    
            case "NE":
                series_id = series_id + "MWACL31055";
                break;    
            case "NV":
                series_id = series_id + "MWACL32003";
                break;    
            case "NH":
                series_id = series_id + "MWACL33015";
                break;    
            case "NJ":
                series_id = series_id + "MWACL34013";
                break;    
            case "NM":
                series_id = series_id + "MWACL35001";
                break;    
            case "NY":
                series_id = series_id + "MWACL36061";
                break;    
            case "NC":
                series_id = series_id + "MWACL37021";
                break;    
            case "ND":
                series_id = series_id + "MWACL38017";
                break;    
            case "OH":
                series_id = series_id + "MWACL39049";
                break;    
            case "OK":
                series_id = series_id + "MWACL40109";
                break;    
            case "OR":
                series_id = series_id + "MWACL41005";
                break;    
            case "PA":
                series_id = series_id + "MWACL42101";
                break;    
            case "RI":
                series_id = series_id + "MWACL44007";
                break;    
            case "SC":
                series_id = series_id + "MWACL45045";
                break;    
            case "SD":
                series_id = series_id + "MWACL46099";
                break;    
            case "TN":
                series_id = series_id + "MWACL47157";
                break;    
            case "TX":
                series_id = series_id + "MWACL48439";
                break;    
            case "UT":
                series_id = series_id + "MWACL49035";
                break;    
            case "VT":
                series_id = series_id + "MWACL50007";
                break;    
            case "VA":
                series_id = series_id + "MWACL51059";
                break;    
            case "WA":
                series_id = series_id + "MWACL53033";
                break;    
            case "WV":
                series_id = series_id + "MWACL54011";
                break;
            case "WI":
                series_id = series_id + "MWACL55039";
                break;    
            case "WY":
                series_id = series_id + "MWACL56021";
                break;    
            
        }
        
        ArrayList<String> contentList = new ArrayList<String>();
        
        try {
            URL url = new URL(FREDURL + TYPE + APIKEY + FILETYPE + series_id + "&sort_order=desc&limit=1");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            connection.setRequestProperty("Content-Type", "application/json");
            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuilder sb = new StringBuilder();
            while ((inputLine = in.readLine()) != null) {
                contentList.add(inputLine);
            }
            in.close();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return contentList;
    }
    
    
}
