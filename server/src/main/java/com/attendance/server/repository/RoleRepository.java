package com.attendance.server.repository;

import com.attendance.server.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository <Role,Long>{
    Optional<Role> findByName(String name);
}
