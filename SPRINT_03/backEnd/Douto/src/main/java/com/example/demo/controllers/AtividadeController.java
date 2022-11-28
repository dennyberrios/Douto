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
import com.example.demo.entities.Atividade;
import com.example.demo.repositorys.AlunoRepository;
import com.example.demo.repositorys.AtividadeRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class AtividadeController {
	
	@Autowired
	private AlunoRepository alunoRepository;
	
	@Autowired
	private AtividadeRepository atividadeRepository;
	
	@GetMapping("/atividades")
	public List<Atividade> getAllAtividades(){
		return atividadeRepository.findAll();
	}
	
	@GetMapping("/atividades/{id}")
	public ResponseEntity<Atividade> getAtividadeById(@PathVariable Long id){
		Atividade atividade = atividadeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Atividade não existe"));
		return ResponseEntity.ok(atividade);
	}
	
	@PostMapping("/atividades")
	public Atividade createAtividade(@RequestBody Atividade atividade) {
		Aluno aluno = alunoRepository.findById(atividade.getAluno().getId()).get();
		atividade.setAluno(aluno);
		
		return atividadeRepository.save(atividade);
	}
	
	@PutMapping("atividades/{id}")
public ResponseEntity<Atividade> updateAtividade(@PathVariable Long id,@RequestBody Atividade atividadesDetails){
		
		Atividade atividade = atividadeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Atividade Inexistente"));
		Aluno aluno = alunoRepository.findById(atividadesDetails.getAluno().getId()).get();
		
		atividade.setAtvUm(atividadesDetails.getAtvUm());
		atividade.setAtvDois(atividadesDetails.getAtvDois());
		atividade.setAtvTres(atividadesDetails.getAtvTres());
		atividade.setAtvQuatro(atividadesDetails.getAtvQuatro());
		atividade.setAtvCinco(atividadesDetails.getAtvCinco());
		atividade.setAtvSeis(atividadesDetails.getAtvSeis());
		atividade.setAluno(aluno);
		
		Atividade newAtividade = atividadeRepository.save(atividade);
		
		return ResponseEntity.ok(newAtividade);
		
}

	@DeleteMapping("/atividades/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAtividade(@PathVariable Long id){
	
		Atividade atividade = atividadeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Atividade not exist"));
	
		atividadeRepository.delete(atividade);
		Map<String, Boolean> response = new HashMap<>();
		response.put("atividade deletada", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
