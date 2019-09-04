package com.library.app.services;



import java.util.List;

import com.library.app.entity.SubClassification;

public interface SubClassificationService {
	void saveSbcl(SubClassification sbcl);// save sbcl
	List<SubClassification> getAllSub();
}
