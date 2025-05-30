package com.wp.studyTracker;

import com.wp.studyTracker.service.MyUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    @Autowired
    private MyUserDetailService userDetailService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .csrf(AbstractHttpConfigurer::disable)
                .cors(Customizer.withDefaults()) // ← Enable CORS support
                .authorizeHttpRequests(registry -> {
                    registry.requestMatchers("/api/v2/reviews/**").permitAll(); //remove later since reviews only for account havers
                    registry.requestMatchers("/api/v2/users/**").permitAll(); //maybe edit rights later(not that* important)

                    registry.requestMatchers("/api/v2/mangas/**").permitAll();
                    registry.requestMatchers("/api/v2/animes/**").permitAll();
                    registry.requestMatchers("/api/v2/movies/**").permitAll();
                    registry.requestMatchers("/api/v2/books/**").permitAll();
                    registry.requestMatchers("/api/v2/shows/**").permitAll();
                    registry.requestMatchers("/", "/home", "/register/**", "/css/**", "/js/**").permitAll();
                    registry.requestMatchers("/api/v2/media/**").permitAll();
                    registry.requestMatchers("/admin/**").hasRole("ADMIN");
                    registry.requestMatchers("/user/**").hasRole("USER");
                    registry.anyRequest().authenticated();
                })
                .formLogin(form -> form
                        .loginPage("/login")
                        .successHandler(new AuthenticationSuccessHandler())
                        .permitAll()
                )
                .build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return userDetailService;
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
