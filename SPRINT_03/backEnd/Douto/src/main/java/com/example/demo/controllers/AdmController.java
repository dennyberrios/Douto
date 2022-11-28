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
import com.example.demo.entities.Adm;
import com.example.demo.repositorys.AdmRepository;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class AdmController {
	
	
	@Autowired
	private AdmRepository admRepository;
	
	// Read or Get all
	
	@GetMapping("/adms")
	public List<Adm> getAllAdms(){
		return admRepository.findAll();
	}
	
	// Read or Get by id 
	
	@GetMapping("/adms/{id}")
	public ResponseEntity<Adm> getAdmById(@PathVariable Long id){
		Adm adm = admRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Administrador inexistente com id fornecido"));
		return ResponseEntity.ok(adm);		
	}
	
	// Post or create
	
	@PostMapping("/adms")
	public Adm createAdm(@RequestBody Adm adm) {
		return admRepository.save(adm);
	}
	
	// Put or update
	
	@PutMapping("/adms/{id}")
	public ResponseEntity<Adm> updateAdm(@PathVariable Long id, @RequestBody Adm admsDetails){
		
		Adm adm = admRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Administrador inexistente com id fornecido"));
		
		adm.setNome(admsDetails.getNome());
		adm.setSobrenome(admsDetails.getSobrenome());
		adm.setEmail(admsDetails.getEmail());
		adm.setSenha(admsDetails.getSenha());
		
		
		Adm newAdm = admRepository.save(adm);
		
		return ResponseEntity.ok(newAdm);
	}
	
	// Delete
	
	@DeleteMapping("/adms/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAdm(@PathVariable Long id){
		
		Adm adm = admRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Administrador inexiste com o id fornecedio"));
		
		admRepository.delete(adm);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Delete", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
