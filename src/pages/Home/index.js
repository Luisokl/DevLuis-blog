import { Link } from "react-router-dom";
import './style.css';

function Home() {
    return (
      <div className="title-pages">
        <h1>Bem vindo ao Blog Tecnologia</h1>
        <span>Eu sou o Luis Fernando.</span> <br/><br/>
        
        <Link to="/produto/123"> Acessar Produto 123</Link>
      </div>
    );
  }
  
  export default Home;