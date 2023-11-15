import { Link } from 'react-router-dom'; 
import './style.css';
import Error from './error.svg'

function Erro(){
    return(
        <main>
            <section>
                <div className='left'>
                    <h2>ERRO 404</h2>
                    <p>Ops! Parece que você se perdeu pelo caminho. <br/> Mais estamos aqui para ajuda-lo a voltar ao destino certo.</p>
                    <Link to="/">Home</Link>
                </div>
                <div className='right'>
                    <img src={ Error } alt='Erro'/>
                    <div className='shadow'></div>
                </div>
            </section>
        </main>
    );
}

export default Erro;