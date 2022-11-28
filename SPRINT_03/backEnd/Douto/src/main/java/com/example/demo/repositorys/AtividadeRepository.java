package com.example.demo.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Atividade;

@Repository
@Service
public interface AtividadeRepository extends JpaRepository<Atividade, Long> {

}
