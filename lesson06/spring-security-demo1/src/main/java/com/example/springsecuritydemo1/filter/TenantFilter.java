package com.example.springsecuritydemo1.filter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.nio.file.AccessDeniedException;

//@WebFilter(value = "/products/**")
public class TenantFilter extends HttpFilter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        String headerValue = httpRequest.getHeader("X-Tenant-Id");
        if(headerValue != null && headerValue.equals("admin")) {
            chain.doFilter(request, response);
            return;
        } else {
            throw new AccessDeniedException("Access Denied");
        }

    }
}
