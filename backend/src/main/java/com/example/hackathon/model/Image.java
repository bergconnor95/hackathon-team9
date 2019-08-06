package com.example.hackathon.model;

public class Image {
    
    private String path;
    
    private double size;
    
    public Image() {
    }
    
    public Image(String path, double size) {
        this.path = path;
        this.size = size;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public double getSize() {
        return size;
    }

    public void setSize(double size) {
        this.size = size;
    }
}
