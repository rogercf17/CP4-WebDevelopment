import React from 'react';
import './Contato.css'; // Arquivo de estilização que criaremos em seguida

function Contato() {
    return (
        <div className="container">
            <nav className="navbar">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">Sobre</a>
                <a href="#" className="nav-link active">Contato</a>
            </nav>

            <div className="content">
                <div className="left-side">
                    <h1>Dúvidas e suporte, entre em contato:</h1>
                    <div className="social-icons">
                        <img src="/path/to/twitter-icon.png" alt="Twitter" className="icon" />
                        <img src="/path/to/instagram-icon.png" alt="Instagram" className="icon" />
                        <img src="/path/to/discord-icon.png" alt="Discord" className="icon" />
                    </div>
                </div>

                <div className="right-side">
                    <form>
                        <div className="input-group">
                            <label>Nome:</label>
                            <input type="text" placeholder="Seu nome" />
                        </div>
                        <div className="input-group">
                            <label>E-mail:</label>
                            <input type="email" placeholder="Seu e-mail" />
                        </div>
                        <div className="input-group">
                            <label>Mensagem:</label>
                            <textarea placeholder="Sua mensagem"></textarea>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contato;