package edu.csumb.cst438.project1.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProjectController{

    @GetMapping("/Project")
    @ResponseBody 
    String getPhones(){
        return "Testing";
    }
}