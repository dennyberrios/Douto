<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix='c'%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<link rel="stylesheet" href="./css/admlist.css">
	<title>Pesquisa de Estudante</title>
<!-- CSS only -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
	</head>
<body>
	<header>
      <!--bootstrap nav com alterações-->
      <nav class="navbar navbar-expand-lg navbar-dark" id="navega">
            <div id="topo">
                <a href="./index.html"><img class="logo" src="./assets/logo/logoico.png" alt="Logo douto"></a>
            </div>
            <div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html">HOME</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PARA OS PAIS
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="needYou.html">PRECISAMOS DE VOCÊS</a></li>
                                    <li><a class="dropdown-item" href="doacoes.html">DOAÇÕES</a></li>
                                    <li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="sobrenos.html">SOBRE NÓS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="contato.html">CONTATO</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="btn-login" aria-current="page"
                                    href="loginE.html">LOGIN E</a>
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main class="container">
   	 <section class="row">
    	<div class="cold-md-7">
    	<br>
    	<br>
    	<form action="CreateAndFind" method="GET" class="d-flex" role="search">
    			 <input name="pesquisa" class="form-control me-2" type="search" placeholder="buscar por email ou senha" aria-label="Search">
     			 <button class="btn btn-warning" type="submit">buscar</button>
   			 </form>
    		<hr>
    		<h1>lista de Estudante</h1>
    		<hr> 
    		<table class="table">
    			<thead>
    				<tr>
    					<th>#</th>
    					<th>Nome</th>
    					<th>Sobrenome</th>
    					<th>Nascimento</th>
    					<th>Ano Escolar</th>
    					<th>Estado</th>
    					<th>Cidade</th>
    					<th>E-mail</th>
    					<th>Senha</th>
    				</tr> 
    			</thead>
    			<tbody>
    				<c:forEach items="${estudantes}" var="estudante">
						<tr>
							<td>${estudante.id}</td>
							<td>${estudante.nome}</td>
							<td>${estudante.sobrenome}</td>
							<td>${estudante.nascimento}</td>
							<td>${estudante.serie}</td>
							<td>${estudante.estado}</td>
							<td>${estudante.cidade}</td>
							<td>${estudante.email}</td>
							<td>${estudante.senha}</td>
							<td>
								<a class="btn btn-danger" type="submit" href="EstudanteDelete?estudanteId=${estudante.id}">Deletar</a>
								<a class="btn btn-success" type="submit" href="EstudanteFindAndUpdate?estudanteId=${estudante.id}">Atualizar</a>
							</td>
						</tr>
					</c:forEach>
    			</tbody>
    		</table>
    		</div>
   	 </section>
    
    </main>
    
    

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>
</html>