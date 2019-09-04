package com.library.app.repositories;



import org.springframework.data.jpa.repository.JpaRepository;

import  com.library.app.entity.SubClassification;

public interface SubClassificationRepositories extends JpaRepository <SubClassification, String> 
{

}
