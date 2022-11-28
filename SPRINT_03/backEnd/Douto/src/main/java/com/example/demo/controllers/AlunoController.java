package com.example.demo.controllers;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.ResourceNotFoundException;
import com.example.demo.entities.Aluno;
import com.example.demo.repositorys.AlunoRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class AlunoController {
	
	@Autowired
	private AlunoRepository alunoRepository;
	

	
	// Read or Get all
	
	@GetMapping("/alunos")
	public List<Aluno> getAllAlunos(){
		return alunoRepository.findAll();
	}
	
	// Read or Get by id 
	
	@GetMapping("/alunos/{id}")
	public ResponseEntity<Aluno> getAlunoById(@PathVariable Long id){
		Aluno aluno = alunoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Aluno inexistente com id fornecido"));
		return ResponseEntity.ok(aluno);		
	}
	
	// Post or create
	
	@PostMapping("/alunos")
	public Aluno createAluno(@RequestBody Aluno aluno) {
		return alunoRepository.save(aluno);
	}
	
	// Put or update
	
	@PutMapping("/alunos/{id}")
	public ResponseEntity<Aluno> updateAluno(@PathVariable Long id, @RequestBody Aluno alunosDetails){
		
		Aluno aluno = alunoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Aluno inexistente com id fornecido"));
		
		aluno.setNome(alunosDetails.getNome());
		aluno.setSobrenome(alunosDetails.getSobrenome());
		aluno.setNascimento(alunosDetails.getNascimento());
		aluno.setSerie(alunosDetails.getSerie());
		aluno.setEstado(alunosDetails.getEstado());
		aluno.setCidade(alunosDetails.getCidade());
		aluno.setEmail(alunosDetails.getEmail());
		aluno.setSenha(alunosDetails.getSenha());		
		
		Aluno newAluno = alunoRepository.save(aluno);
		
		return ResponseEntity.ok(newAluno);
	}
	
	// Delete
	
	@DeleteMapping("/alunos/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAluno(@PathVariable Long id){
		
		Aluno aluno = alunoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Cliente inexiste com o id fornecedio"));
		
		alunoRepository.delete(aluno);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Delete", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/login")
	public String logar(Aluno alunoParam) {
		Aluno aluno = alunoRepository.login(alunoParam.getSenha(),alunoParam.getEmail());
		Aluno aluno2 = alunoRepository.login2(alunoParam.getSenha(),alunoParam.getEmail());
		
		if (aluno != null) {
			return "/api/QuintoAno";
		}else if(aluno2 != null) {
			return "/api/SextoAno";
		}else {
			return "/loginError";
		}
	}
	
	
}
