import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {

    const navigate = useNavigate()

  return (
    <div id="root">
      <div style={{ alignSelf: 'center' }}>
        <h1 className="logoEris">
          <img src="/AerisLOGOsemBG 2.png" className="logo-img" />
          <span className="logo-eris-palavra">
            <span className="upside-down-v">V</span>eris
          </span>
        </h1>
        <p className="sub-frase">Inscreva-se em nossa plataforma!</p>
      </div>

      {/* Primeira caixa de texto */}
      <div className="form-container">
        <p className="texto-acima">Nome Completo:</p>
        <div className="input-wrapper">
          <img src="/clipboard-user 1.png" className="input-icon" alt="ícone" />
          <input
            className="input-Escrita"
            type="text"
            placeholder="Insira seu nome:"
          />
        </div>
      </div>
      {/* Segunda caixa de texto, um pouco abaixo */}
      <div className="form-container" style={{ marginTop: '2em' }}>
        <p className="texto-acima">E-mail:</p>
        <div className="input-wrapper">
          <img src="/envelopes (1) 1.png" className="input-icon" alt="ícone" />
          <input
            className="input-Escrita"
            type="text"
            placeholder="Insira seu e-mail:"
          />
        </div>
      </div>
      {/* Terceira caixa de texto, um pouco abaixo */}
      <div className="form-container" style={{ marginTop: '2em' }}>
        <p className="texto-acima">Senha:</p>
        <div className="input-wrapper">
          <img src="/lock-hashtag 1.png" className="input-icon" alt="ícone" />
          <input
            className="input-Escrita"
            type="text"
            placeholder="Insira sua senha:"
          />
        </div>
      </div>

      {/* Botão abaixo das caixas de texto */}
      <button className="botao-criar-conta" style={{ marginTop: '2em' }} onClick={() => navigate('/TelaPrincipal')}>
        Criar conta
      </button>

      {/* Botão de já tem conta? */}
      <button className="botao-link" type="button"  onClick={() => navigate('/login')}>
        Já tem uma conta? Clique aqui para fazer login!
      </button>
    </div> 
  )
}

export default App