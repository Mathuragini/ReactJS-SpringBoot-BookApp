package com.library.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import com.library.app.entity.MainClassification;

public interface MainClassificationRepositories extends JpaRepository <MainClassification, Long> {
	MainClassification findById(long id); // find by id
}
