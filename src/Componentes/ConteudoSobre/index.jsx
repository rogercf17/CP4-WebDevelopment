export default function ConteudoSobre() {
    return(
        <>
            <section id='hero-dois'>
                <div className="div-hero">
                    <h1>Bem-vindo à revolução dos vídeos!</h1>
                    <p>
                        Somos uma startup com o objetivo de facilitar a 
                        produção de conteúdo em larga escala com qualidade profissional, 
                        capaz de atingir uma audiência de milhões de seguidores.
                    </p>
                    <button className="button-hero">Baixe o app</button>
                </div>
                <img src="/celular.png" alt="Imagem do Hero" />
                <img src="/celular-dois.png" alt="Imagem do Hero" />
            </section>

            <section id="box-planos">
                <h2>Planos</h2>
                <div class="planos">
                    <div class="plano individual">
                        <div class="titulo"><h3>Individual</h3></div>
                        <div class="informacoes">
                            <p>1 Usuário</p>
                            <div>
                                <p>10 Vídeos <strong>R$15</strong></p>
                                <img src="chevron-right.png" alt="Icone" height="15px" style="cursor: pointer;"/>
                            </div>
                            <img src="chevron-right.png" alt="Icone" height="15px" width="15px" style="cursor: pointer;" class="icon"/>
                            
                        </div>
                        <a href="#"><button class="btn-plano">Cadastrar</button></a>
                    </div>

                    <div class="plano profissional">
                        <div class="titulo"><h3>Profissional - Times</h3></div>
                        <div class="informacoes">
                            <p>1-10 Usuários</p>
                            <div>
                                <p>Vídeos Ilimitados <strong>R$40</strong></p>
                                <img src="chevron-right.png" alt="Icone" height="15px" style="cursor: pointer;"/>
                            </div>
                            <p>+10 Usuários</p>
                            <div>
                                <p>Vídeos Ilimitados <strong>R$20</strong></p>
                                <img src="chevron-right.png" alt="Icone" height="15px" style="cursor: pointer;"/>
                            </div>
                            <img src="chevron-right.png" alt="Icone" height="15px" width="15px" style="cursor: pointer;" class="icon"/>
                            
                        </div>
                        <a href="#"><button class="btn-plano">Cadastrar</button></a>
                    </div>

                    <div class="plano corporativo">
                        <div class="titulo"><h3>Corporativo</h3></div>
                        <div class="informacoes">
                            <img src="undraw_Mobile_feed_re_72ta 1.png" height="110px" width="120px" alt="Imagem plano corporativo" class="icon-celular"/>
                            
                        </div>
                        <a href="#"><button class="btn-plano">Entre Em Contato</button></a>
                    </div>
                </div>
            </section>
        </>
    )
}