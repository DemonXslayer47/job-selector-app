package com.jobselector.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;

@Service
public class JobSearchAPIService {

    @Value("${rapidapi.key}")
    private String apiKey;

    @Value("${rapidapi.host}")
    private String apiHost;

    @Value("${rapidapi.url}")
    private String apiUrl;

    public String searchJobs(String skills) throws Exception {

        String query = skills.replace(",", " ") + " developer jobs";
        String encoded = URLEncoder.encode(query, StandardCharsets.UTF_8);

        String finalUrl = apiUrl + "?query=" + encoded + "&num_pages=5";

        HttpClient client = HttpClient.newHttpClient();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(finalUrl))
                .header("X-RapidAPI-Key", apiKey.trim())
                .header("X-RapidAPI-Host", apiHost)
                .GET()
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println("Final API URL = " + finalUrl);
        System.out.println("API raw response = " + response.body());

        return response.body();
    }

}
