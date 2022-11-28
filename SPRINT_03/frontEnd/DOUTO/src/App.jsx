import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Contato from './Pages/Contato/Contato';
import Sobrenos from './Pages/Sobrenos/Sobrenos';
import Doacoes from './Pages/Doacoes/Doacoes';
import Precisamosdevoces from './Pages/PrecisamosDevoces/Precisamosdevoces';
import CadastroAluno from './Pages/CadastroAluno/CadastroAluno';
import CadastroAdm from './Pages/CadastroAdm/CadastroAdm';
import SextoAno from './Pages/SextoAno/Sextoano';
import LoginAdm from './Pages/LoginAdm/LoginAdm';
import Login from './Pages/LoginAluno/LoginAluno';
import UpdateAluno from './Pages/Listas/ListaAlunos';
import UpdateAdm from './Pages/Listas/ListaAdm';
import Samaritano from './Pages/SextoAno/Samaritano/Samaritano';
import Entrevista from './Pages/SextoAno/Entrevista/Entrevista';
import Ansiedade from './Pages/SextoAno/Ansiedade/Ansiedade';
import Olimpiadas from './Pages/SextoAno/Olimpiadas/Olimpiadas';
import Indiojabuti from './Pages/SextoAno/Indiojabuti/Indiojabuti';
import Parabens from './Pages/Parabens/Parabens';
import QuintoAno from './Pages/QuintoAno/QuintoAno';
import PatinhoPreto from './Pages/QuintoAno/PatoPreto/PatoPreto';
import EducaMais from './Pages/QuintoAno/EducaMais/EducaMais';
import Cardapio from './Pages/QuintoAno/Cardapio/Cardapio';
import Lgbt from './Pages/QuintoAno/LGBT/Lgbt';
import Obesidade from './Pages/QuintoAno/Obesidade/Obesidade';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contato' element={<Contato />} />
        <Route path='/Sobrenos' element={<Sobrenos />} />
        <Route path='/Doacoes' element={<Doacoes />} />
        <Route path='/Precisamosdevoces' element={<Precisamosdevoces />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/LoginAdm' element={<LoginAdm />} />
        <Route path='/CadastroAluno' element={<CadastroAluno />} />
        <Route path='/CadastroAdm' element={<CadastroAdm />} />
        <Route path='/SextoAno' element={<SextoAno />} />
        <Route path='/QuintoAno' element={<QuintoAno />} />
        <Route path='/Lista-Alunos' element={<UpdateAluno />} />
        <Route path='/AlunoUpdate/:id' element={<CadastroAluno />} />
        <Route path='/Lista-Adm' element={<UpdateAdm />} />
        <Route path='/AdmUpdate/:id' element={<CadastroAdm />} />
        <Route path='/Samaritano' element={<Samaritano />} />
        <Route path='/Entrevista' element={<Entrevista />} />
        <Route path='/Ansiedade' element={<Ansiedade />} />
        <Route path='/Olimpiadas' element={<Olimpiadas />} />
        <Route path='/Indiojabuti' element={<Indiojabuti />} />
        <Route path='/Parabens' element={<Parabens />} />
        <Route path='/PatinhoPreto' element={<PatinhoPreto />} />
        <Route path='/EducaMais' element={<EducaMais />} />
        <Route path='/Cardapio' element={<Cardapio />} />
        <Route path='/Lgbt' element={<Lgbt />} />
        <Route path='/Obesidade' element={<Obesidade />} />
      </Routes>
      <Footer />
    </Router>
  )
};