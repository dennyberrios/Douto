<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix='c'%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="./css/index.css">
<title>Atualizar Cliente</title>
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
    		<hr>
    		<h1>Atualizar Cadastro</h1>
    		<hr> 
    		<form action="EstudanteFindAndUpdate" method="POST">
    			<input value="${estudante.id}" name="id" type="number" style="visibility:hidden">
    			<div class="form-floating mb-3">
						<input value="${estudante.nome}" name="nome" maxlength="15" type="text" class="form-control" id="floatingInput1"> 
						<label>nome</label>
				</div>
    			<div class="form-floating mb-3">
						<input value="${estudante.sobrenome}" name="sobrenome" maxlength="80" type="text" class="form-control" placeholder="nome"> 
						<label>sobrenome</label>
				</div>
				<div class="form-floating mb-3">
						<input value="${estudante.nascimento}" name="nascimento" maxlength="50" type="date" class="form-control" placeholder="rua"> 
						<label>nascimento</label>
				</div>
				<div class="form-floating mb-3">
						<input value="${estudante.serie}" name="serie" maxlength="50" type="text" class="form-control" placeholder="bairro"> 
						<label>serie</label>
				</div>
				<div class="form-floating mb-3">
						<input value="${estudante.estado}" name="estado" maxlength="10" type="text" class="form-control"> 
						<label>uf</label>
				</div>
				<div class="form-floating mb-3">
						<input value="${estudante.cidade}" name="cidade" maxlength="50" type="text" class="form-control"> 
						<label>Cidade</label>
				</div>
				<div class="form-floating mb-3">
						<input value="${estudante.email}" name="email" maxlength="50" type="text" class="form-control"> 
						<label>E-mail</label>
				</div>
				<div class="form-floating mb-3">
						<input value="${estudante.senha}" name="senha" maxlength="15" type="password" class="form-control"> 
						<label>senha</label>
				</div>
				
				<button class="btn btn-success" type="submit">Atualizar Dados</button>
				<button class="btn btn-secondary" type="reset">Limpar Formulário</button>
    		</form>  
    		<br>
    	</div>
   	 </section>
    
    </main>
     <footer>
        <div class="red-sociais">
            <div>
                <p>Conecte-se conosco nas redes sociais:</p>
            </div>
            <div>
                <a href="#"><img width="25px" src="./assets/svg/twiter.svg" alt="twiter"></a>
                <a href="#"><img width="25px" src="./assets/svg/gmail.svg" alt="gmail"></a>
                <a href="#"><img width="25" src="./assets/svg/instagram.svg" alt="linkedin"></a>
                <a href="#"><img width="25" src="./assets/svg/facebook.svg" alt="github"></a>
            </div>
        </div>
        <hr>
        <div class="box-table">
            <div class="tab">
                <table>
                    <tr>
                        <th>
                            <h3><img width="50" src="./assets/ico/logoico.png" alt=""> Douto</h3>
                        </th>
                    </tr>
                    <tr>
                        <td class="apresentRodape">Temos o dever de auxiliar a  evolução da leitura dos jovens tupiniquins. Pra nós é um prazer!</td>
                    </tr>
                </table>
            </div>
            <div class="tab">
                <table>
                    <tr>
                        <th>SERVIÇOS</th>
                    </tr>
                    <tr>
                        <td><a href="needYou.html">PRECISAMOS DE VOCÊ</a></td>
                       
                        <td><a href="doacoes.html">Doações</a></td>
                      
                    </tr>
                </table>
            </div>
            <div class="tab">
                <table>
                    <tr>
                        <th><a class="rodFlex" href="">LINKS UšTEIS</a></th>
                    </tr>
                    <tr>
                        
                        <td><a href="contato.html">Contato</a></td>
                        <td><a href="sobrenos.html">Sobre nós</a></td>
                    </tr>
                </table>
            </div>
            <div class="tab">
                <table>
                    <tr>
                        <th><a class="rodFlex" href="contato.html">CONTATO</a></th>
                    </tr>
                    <tr>
                        <td> Brasil, Br 0000, BR</a></td>
                        <td> info@example.com</td>
                        <td> + 55 71 0000-0000</td>
                        <td> + 55 71 0000-0000</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="tab">
            <p>&copy; 2022 Copyright: <a href="#navega">douto.com</a></p>
        </div>
    </footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>
</html>