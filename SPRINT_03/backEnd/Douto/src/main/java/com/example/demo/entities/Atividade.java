package com.example.demo.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "atividade")
public class Atividade {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long  id;
	
	@Column(name = "atv_um")
	private int atvUm;
	
	@Column(name = "atv_dois")
	private int atvDois;
	
	@Column(name = "atv_tres")
	private int atvTres;
	
	@Column(name = "atv_quatro")
	private int atvQuatro;
	
	@Column(name = "atv_cinco")
	private int atvCinco;
	
	@Column(name = "atv_seis")
	private int atvSeis;
	
	
	// Database connection
	
	@JsonIgnore
    @ManyToMany(cascade = {
            CascadeType.ALL
    }, mappedBy = "atividades")
    List<Adm> adms;
    
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "aluno_fk")
    private Aluno aluno;

	// Generate constructor using Fields none selected
		
	public Atividade() {
		super();
	}
	
	// Generate constructor using Fields all selected 

	public Atividade(long id, int atvUm, int atvDois, int atvTres, int atvQuatro, int atvCinco, int atvSeis) {
		super();
		this.id = id;
		this.atvUm = atvUm;
		this.atvDois = atvDois;
		this.atvTres = atvTres;
		this.atvQuatro = atvQuatro;
		this.atvCinco = atvCinco;
		this.atvSeis = atvSeis;
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

	public Aluno getAluno() {
		return aluno;
	}

	public void setAluno(Aluno aluno) {
		this.aluno = aluno;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getAtvUm() {
		return atvUm;
	}

	public void setAtvUm(int atvUm) {
		this.atvUm = atvUm;
	}

	public int getAtvDois() {
		return atvDois;
	}

	public void setAtvDois(int atvDois) {
		this.atvDois = atvDois;
	}

	public int getAtvTres() {
		return atvTres;
	}

	public void setAtvTres(int atvTres) {
		this.atvTres = atvTres;
	}

	public int getAtvQuatro() {
		return atvQuatro;
	}

	public void setAtvQuatro(int atvQuatro) {
		this.atvQuatro = atvQuatro;
	}

	public int getAtvCinco() {
		return atvCinco;
	}

	public void setAtvCinco(int atvCinco) {
		this.atvCinco = atvCinco;
	}

	public int getAtvSeis() {
		return atvSeis;
	}

	public void setAtvSeis(int atvSeis) {
		this.atvSeis = atvSeis;
	}
	
}
