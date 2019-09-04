package com.library.app.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.library.app.entity.MainClassification;
import com.library.app.repositories.MainClassificationRepositories;
import com.library.app.services.MainClassificationService;

import java.util.List;

@Service
public class MainClassificationImpl implements MainClassificationService {

	@Autowired
	MainClassificationRepositories mclRepositories;
	
	public void saveMCL(MainClassification mcl) {
		mclRepositories.save(mcl);
	}

	@Override
	public MainClassification findMclById(long id) {
		return mclRepositories.findById(id);
	}

	@Override
    public List<MainClassification> getAllMain(){
        return mclRepositories.findAll();
    }
	

	
	
}
