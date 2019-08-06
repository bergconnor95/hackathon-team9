package com.example.hackathon.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.hackathon.model.Image;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ImageController {

    private List<Image> images = createList();
    
    @GetMapping(value = "/images", produces = "application/json")
    public List<Image> firstPage() {
        return images;
    }

    private static List<Image> createList() {
        List<Image> images = new ArrayList<>();
        Image image1 = new Image("/tmp/image1.jpg", 10);
        images.add(image1);
        Image image2 = new Image("/tmp/image2.jpg", 10);
        images.add(image2);
        return images;
    }
}
