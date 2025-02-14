package com.attendance.server.security;

import com.attendance.server.entity.BlacklistedToken;
import com.attendance.server.entity.Role;
import com.attendance.server.entity.User;
import com.attendance.server.repository.BlacklistedTokenRepository;
import com.attendance.server.repository.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class JwtUtil {

    private static final SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS512);

    private final int jwtExpirationMs = 7200000;

    private UserRepository userRepository;
    private final BlacklistedTokenRepository blacklistedTokenRepository;

    public JwtUtil(UserRepository userRepository, BlacklistedTokenRepository blacklistedTokenRepository) {
        this.userRepository = userRepository;
        this.blacklistedTokenRepository = blacklistedTokenRepository;
    }

    //token generation
    public String generateToken(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        Set<Role> roles = user.get().getRoles();

        //add roles to the token

        return Jwts.builder().setSubject(username).claim("roles", roles.stream()
                        .map(role -> role.getName()).collect(Collectors.joining(",")))
                .setIssuedAt(new Date()).setExpiration(new Date(new Date().getTime() + jwtExpirationMs))
                .signWith(secretKey).compact();
    }

    //username extraction
    public String extractUsername(String token) {
        return Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }

    //extract roles

    public Set<String> extractRoles(String token) {
        String roleString = Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload().get("roles", String.class);
        return Set.of(roleString);
    }

    public void blacklistToken(String token) {
        try {
            // Debugging: Log the received token
            System.out.println("Inside blacklistToken method. Token: " + token);

            // Parse the token to extract claims and expiration date
            Claims claims = Jwts.parser()
                    .verifyWith(secretKey)
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();

            Date expiryDate = claims.getExpiration();

            // Debugging: Log the extracted expiration date
            System.out.println("Token expiry date: " + expiryDate);

            // Create a BlacklistedToken entity and save it to the database
            BlacklistedToken blacklistedToken = new BlacklistedToken(token, expiryDate);
            blacklistedTokenRepository.save(blacklistedToken);

            // Debugging: Confirm successful blacklisting
            System.out.println("Token successfully blacklisted and saved: " + token);

        } catch (Exception e) {
            // Error handling: Log the exception if any occurs
            System.err.println("Error blacklisting token: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // Check if the token is blacklisted
    private boolean isTokenBlacklisted(String token) {
        return blacklistedTokenRepository.findByToken(token).isPresent();
    }

    //validation
    public boolean isTokenValid(String token) {
        if (isTokenBlacklisted(token)) {
            System.out.println("Token is blacklisted: " + token);
            return false; // Token is blacklisted
        }
        try {
            Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            System.out.println("Token validation failed: " + e.getMessage());
            return false;
        }

    }
}


