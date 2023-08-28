package com.example.demo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.http.HttpMethod;

//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.example.demo.security.jwt.AuthEntryPointJwt;
import com.example.demo.security.jwt.AuthTokenFilter;
import com.example.demo.service.CustomUserDetailsService;

@Configuration
@EnableMethodSecurity(prePostEnabled = true)
// (securedEnabled = true,
// jsr250Enabled = true,
// prePostEnabled = true) // by default
public class WebSecurityConfig { // extends WebSecurityConfigurerAdapter {
	@Autowired
	CustomUserDetailsService userDetailsService;

	@Autowired
	private AuthEntryPointJwt unauthorizedHandler;

    @Bean
    AuthTokenFilter authenticationJwtTokenFilter() {
		return new AuthTokenFilter();
	}


    @Bean
    DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

		authProvider.setUserDetailsService(userDetailsService);
		authProvider.setPasswordEncoder(passwordEncoder());

		return authProvider;
	}


    @Bean
    AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
		return authConfig.getAuthenticationManager();
	}

    @Bean
    PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}


    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf(csrf -> csrf.disable())
				.cors().disable()
				.exceptionHandling(exception -> exception.authenticationEntryPoint(unauthorizedHandler))
				.authorizeHttpRequests()
				.antMatchers("/users/login","/users/register","/admins/login").
				.antMatchers("/users/**").authenticated()
				.antMatchers("/loanCards/**").authenticated()
				.antMatchers("/items/**").authenticated()
				.antMatchers("/admins/**").authenticated()

//						.antMatchers("/users/**").hasAuthority("admin"))
//						.antMatchers
//						.antMatchers(HttpMethod.OPTIONS).permitAll())
//						.anyRequest().authenticated())
				.and()
				.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));


		http.authenticationProvider(authenticationProvider());

		http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);

		return http.build();
	}
}

//@Configuration
//@EnableWebSecurity
//// (securedEnabled = true,
//// jsr250Enabled = true,
//// prePostEnabled = true) // by default
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//	
//	@Autowired
//	private CustomUserDetailsService userService;
//
//	@Autowired
//	private AuthEntryPointJwt unauthorizedHandler;
//	
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		// TODO Auto-generated method stub
//		auth.userDetailsService(userService);
//	}
//	
//	
//    @Bean
//    AuthTokenFilter authenticationJwtTokenFilter() {
//		return new AuthTokenFilter();
//	}
//
//
//    @Bean
//    DaoAuthenticationProvider authenticationProvider() {
//		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
//		authProvider.setUserDetailsService(userService);
//		authProvider.setPasswordEncoder(passwordEncoder());
//
//		return authProvider;
//	}
//
//
//    @Bean
//    AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
//		return authConfig.getAuthenticationManager();
//	}
//
//    @Bean
//    PasswordEncoder passwordEncoder() {
//		return NoOpPasswordEncoder.getInstance();
//	}
//    @Bean
//    public AuthenticationManager authenticationManagerBean() throws Exception{
//    	return super.authenticationManagerBean();
//    }
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//		http.csrf(csrf -> csrf.disable())
//			.cors().disable()
//			.authorizeRequests()
//			.antMatchers("/login").permitAll()
//			.antMatchers(HttpMethod.OPTIONS).permitAll()
//			//.anyRequest().authenticated()
//			.and()
//			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//		
//	}
//    
//    @Bean
//    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//		http.csrf(csrf -> csrf.disable())
//				.exceptionHandling(exception -> exception.authenticationEntryPoint(unauthorizedHandler))
//				.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//				.authorizeHttpRequests(auth -> auth.antMatchers("/api/auth/**").permitAll()
//						.antMatchers("/api/test/**").permitAll().anyRequest().authenticated());
//
//		http.authenticationProvider(authenticationProvider());
//
//		http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
//
//		return http.build();
//	}
//}