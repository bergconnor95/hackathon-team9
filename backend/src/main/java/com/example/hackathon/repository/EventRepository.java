package com.example.hackathon.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.hackathon.model.Event;

@Repository
public interface EventRepository extends CrudRepository<Event, Long> {
    List<Event> findByTier(int tier);
}