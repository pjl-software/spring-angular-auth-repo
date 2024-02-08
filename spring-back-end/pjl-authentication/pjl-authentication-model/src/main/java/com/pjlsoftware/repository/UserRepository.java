package com.pjlsoftware.repository;

import com.pjlsoftware.entity.User;
import com.pjlsoftware.projection.UserProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<List<UserProjection>> findByEnabledIsTrue();

    Optional<User> findByUsername(String username);

    Optional<User> findByUsernameAndEnabledIsTrue(String username);
}
