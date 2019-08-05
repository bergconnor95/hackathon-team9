package api;

import java.io.*;
import java.net.*;
import java.util.ArrayList;

public class main {

	//Won't change
	private final static String FREDURL = new String("https://api.stlouisfed.org/fred/");
	private final static String FILETYPE = new String("&file_type=json");
	private final static String APIKEY = new String ("api_key=bb4b70e54a95f11bcdbe2e70379f6825");
	
	//Will change from user input - hard coded for now
	private final static String TYPE = new String("series/observations?");
	
	public static void main (String[]args) throws MalformedURLException {	
		ArrayList<String> test = new ArrayList<String>(GetMedianWeeklyEarnings());
		test.forEach(item -> System.out.println(item));
	}
	
	public static ArrayList<String> GetMedianWeeklyEarnings() {
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
}
