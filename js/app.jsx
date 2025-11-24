const { useState } = React;

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#top">
          <span className="brand-safe">SAFE</span>
          <span className="brand-ride ms-1">RIDE</span>
          <span className="ms-2 small text-muted">Monitoramento</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#como-funciona">Como funciona</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#beneficios">Por que escolher</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#demo">Demonstração</a>
            </li>
            <li className="nav-item ms-lg-2">
              <a className="btn btn-sr-primary btn-sm" href="#demo">
                Agendar demonstração
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Monitoramento em tempo real para carros e motos
            </div>
            <h1 className="hero-title mb-3">
              OTIMIZE SUA FROTA
              <br />
              COM RASTREAMENTO INTELIGENTE <span style={{ color: "#f4b414" }}>SAFERIDE</span>
            </h1>
            <p className="hero-subtitle text-muted mb-4">
              A SafeRide Monitoramento coloca você no controle total dos seus veículos.
              Acompanhe em tempo real, reduza custos, aumente a segurança e tome decisões
              estratégicas com dados confiáveis.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <a href="#demo" className="btn btn-sr-primary">
                Agendar demonstração gratuita
              </a>
              <a href="#como-funciona" className="btn btn-sr-outline">
                Ver como funciona
              </a>
            </div>
            <p className="text-muted small mt-3">
              Ideal para empresas com frotas de carros, motos, utilitários e entregas urbanas.
            </p>
          </div>

          <div className="col-lg-5 offset-lg-1 text-center">
            <img
              src="img/saferide-logo.png"
              className="hero-logo img-fluid"
              alt="Logo SafeRide Monitoramento"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section-padding" id="como-funciona">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">Como a SafeRide funciona para sua empresa</h2>
          <p className="section-subtitle text-muted">
            Em poucos passos sua frota já estará protegida e monitorada em tempo real.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="step-card">
              <div className="step-number">1</div>
              <h5>Instalação simples</h5>
              <p className="text-muted mb-0">
                Dispositivos discretos e rápidos de instalar em qualquer carro, moto ou utilitário,
                sem atrapalhar a rotina da sua operação.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="step-card">
              <div className="step-number">2</div>
              <h5>Acesso à plataforma</h5>
              <p className="text-muted mb-0">
                Após a instalação, você recebe login e senha para acessar a plataforma
                de rastreamento em tempo real, via web ou celular.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="step-card">
              <div className="step-number">3</div>
              <h5>Monitoramento completo</h5>
              <p className="text-muted mb-0">
                Monitore veículos e condutores de qualquer lugar: posição, rotas, paradas,
                velocidade e eventos importantes em um único painel.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="step-card">
              <div className="step-number">4</div>
              <h5>Relatórios inteligentes</h5>
              <p className="text-muted mb-0">
                Analise relatórios detalhados para tomar decisões informadas, reduzir custos,
                aumentar produtividade e melhorar a operação da sua frota.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="section-padding bg-white" id="beneficios">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">Por que escolher a SafeRide?</h2>
          <p className="section-subtitle text-muted">
            Não é apenas rastrear. É ter um parceiro tecnológico para proteger seus veículos
            e dar segurança ao seu negócio.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="benefit-card">
              <div className="benefit-icon">📍</div>
              <h5>Monitoramento em tempo real</h5>
              <p className="text-muted mb-0">
                Localização precisa dos seus veículos, atualizada em segundos, com histórico de rotas.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h5>Redução de custos</h5>
              <p className="text-muted mb-0">
                Controle de uso indevido, melhor planejamento de rotas e redução de combustível
                e manutenção.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h5>Mais segurança</h5>
              <p className="text-muted mb-0">
                Aumente a segurança dos motoristas e da carga com alertas, cercas virtuais
                e ações rápidas em caso de emergência.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h5>Suporte especializado</h5>
              <p className="text-muted mb-0">
                Equipe pronta para te apoiar na implantação, treinamento e dia a dia da operação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
    frota: ""
  });

  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Dados do formulário:", form);
    setSent(true);
  }

  return (
    <section className="section-padding" id="demo">
      <div className="container">
        <div className="cta-section mx-auto">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-3">Experimente a solução em ação</h2>
              <p className="mb-3">
                Agende sua Demonstração Gratuita agora e veja como podemos transformar
                a gestão da sua frota na prática. Sem compromisso.
              </p>
              <ul className="small mb-0">
                <li>Apresentação da plataforma em tempo real</li>
                <li>Recomendações personalizadas para o seu tipo de frota</li>
                <li>Tira-dúvidas com especialista SafeRide</li>
              </ul>
            </div>

            <div className="col-lg-6">
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Nome completo</label>
                  <input
                    type="text"
                    name="nome"
                    className="form-control"
                    required
                    value={form.nome}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Empresa</label>
                  <input
                    type="text"
                    name="empresa"
                    className="form-control"
                    value={form.empresa}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    name="telefone"
                    className="form-control"
                    required
                    value={form.telefone}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Quantidade aproximada de veículos</label>
                  <select
                    name="frota"
                    className="form-select"
                    value={form.frota}
                    onChange={handleChange}
                  >
                    <option value="">Selecione</option>
                    <option value="ate10">Até 10 veículos</option>
                    <option value="11-30">De 11 a 30 veículos</option>
                    <option value="31-60">De 31 a 60 veículos</option>
                    <option value="61+">Mais de 60 veículos</option>
                  </select>
                </div>

                <div className="col-12 d-grid d-md-flex mt-2">
                  <button type="submit" className="btn btn-light fw-semibold px-4">
                    Quero agendar minha demonstração
                  </button>
                </div>

                {sent && (
                  <div className="col-12">
                    <p className="small mb-0">
                      ✅ Dados registrados localmente. Agora é só integrar este formulário
                      com o seu sistema de envio (e-mail, WhatsApp, CRM).
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer bg-white">
      <div className="container border-top pt-3">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <span className="text-muted">
            © {new Date().getFullYear()} SafeRide Monitoramento. Todos os direitos reservados.
          </span>
          <span className="text-muted small">
            Rastreamento inteligente para carros e motos.
          </span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <DemoSection />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
