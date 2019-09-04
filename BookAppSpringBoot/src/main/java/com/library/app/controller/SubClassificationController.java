package com.library.app.controller;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.library.app.entity.SubClassification;
import com.library.app.services.SubClassificationService;

import java.util.List;

@RestController
public class SubClassificationController {

    @Autowired
    SubClassificationService sbclService;

    @PostMapping("/savesbcl")
    public HttpStatus createSBCL(@Valid @RequestBody SubClassification sbcl) {
        sbclService.saveSbcl(sbcl);
        return HttpStatus.CREATED;

    }

    @GetMapping("/findAllSub")
    public List<SubClassification> findAll() {
        return sbclService.getAllSub();
    }
}
