package com.example.demo.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.JoinColumn;

@Entity
@Table(name = "adm")
public class Adm {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long  id;
	
	@Column(name = "nome", length = 50)
	private String nome;
	
	@Column(name = "sobrenome", length = 50)
	private String sobrenome;
	
	@Column(name = "email", length = 100)
	private String email;
	
	@Column(name = "senha", length = 8)
	private String senha;
	
	
	// Database connection
	
	@ManyToMany(cascade = {            
            CascadeType.ALL
            })
    @JoinTable(name = "fornece",
    joinColumns = {@JoinColumn(name="adm_fk")},
    inverseJoinColumns = {@JoinColumn(name="atividade_fk")}
        )
    private List<Atividade> atividades;
    
    @ManyToMany(cascade = {            
            CascadeType.ALL
            })
    @JoinTable(name = "acessa",
    joinColumns = {@JoinColumn(name="adm_fk")},
    inverseJoinColumns = {@JoinColumn(name="aluno_fk")}
        )
    private List<Aluno> alunos;

	// Generate constructor using Fields none selected
	
	public Adm() {
		super();
	}

	// Generate constructor using Fields all selected 
	
	public Adm(long id, String nome, String sobrenome, String email, String senha) {
		super();
		this.id = id;
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.email = email;
		this.senha = senha;
	}	
		
	// Generate getters and setters

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

}
