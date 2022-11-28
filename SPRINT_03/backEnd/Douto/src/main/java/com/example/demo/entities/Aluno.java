package com.example.demo.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "aluno")
public class Aluno {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long  id;
	
	@Column(name = "nome", length = 50)
	private String nome;
	
	@Column(name = "sobrenome", length = 50)
	private String sobrenome;
	
	@Column(name = "nascimento")
	private Date nascimento;
	
	@Column(name = "serie", length = 6)
	private String serie;
	
	@Column(name = "estado", length = 21)
	private String estado;
	
	@Column(name = "cidade", length = 70)
	private String cidade;
	
	@Column(name = "email", length = 100)
	private String email;
	
	@Column(name = "senha", length = 8)
	private String senha;

	
	// Database connection
	
	@JsonIgnore
    @OneToMany(mappedBy = "aluno", cascade = CascadeType.ALL)
    private List<Atividade> atividades = new ArrayList<Atividade>();

	@JsonIgnore
    @ManyToMany(cascade = {
            CascadeType.ALL
    }, mappedBy = "alunos")
    List<Adm> adms;
	
	// Generate constructor using Fields none selected
	
	public Aluno() {
		super();
	}

    // Generate constructor using Fields all selected 

	public Aluno(long id, String nome, String sobrenome, Date nascimento, String serie, String estado, String cidade,
			String email, String senha) {
		super();
		this.id = id;
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.nascimento = nascimento;
		this.serie = serie;
		this.estado = estado;
		this.cidade = cidade;
		this.email = email;
		this.senha = senha;
	}
	
	// Generate getters and setters
	
	
	
	public long getId() {
		return id;
	}

	public List<Adm> getAdms() {
		return adms;
	}

	public void setAdms(List<Adm> adms) {
		this.adms = adms;
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

	public Date getNascimento() {
		return nascimento;
	}

	public void setNascimento(Date nascimento) {
		this.nascimento = nascimento;
	}

	public String getSerie() {
		return serie;
	}

	public void setSerie(String serie) {
		this.serie = serie;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
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
