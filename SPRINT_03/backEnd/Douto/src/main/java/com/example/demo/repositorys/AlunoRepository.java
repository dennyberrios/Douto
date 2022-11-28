package com.example.demo.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Aluno;

@Repository
@Service
public interface AlunoRepository extends JpaRepository<Aluno, Long>{
	
	@Query(value="SELECT * FROM ALUNO WHERE SENHA LIKE :senha AND EMAIL LIKE :email AND SERIE LIKE 'quinto' ", nativeQuery = true)
	public Aluno login(@Param("senha") String senha, @Param("email") String email);
	
	@Query(value="SELECT * FROM ALUNO WHERE SENHA LIKE :senha AND EMAIL LIKE :email AND SERIE LIKE 'sexto' ", nativeQuery = true)
	public Aluno login2(@Param("senha") String senha, @Param("email") String email);
}
