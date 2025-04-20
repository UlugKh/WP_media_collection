package com.wp.studyTracker.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ContentController {

    @GetMapping("")
    public String handleWelcome() {
        return "home";
    }
    @GetMapping("/login")
    public String login() {
        return "login"; // This resolves to login.html in templates
    }
    @GetMapping("/admin/home")
    public String handleAdminHome() {
        return "home_admin";
    }

    @GetMapping("/user/home")
    public String handleUserHome() {
        return "home_user";
    }
    @GetMapping("/register")
    public String handleRegisterPage() {
        return "register";  // This should match the filename of your register.html
    }
}
