package DhanushaHasheel.Fullstack_Backend.repository;

import DhanushaHasheel.Fullstack_Backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
