import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Instagram, SearchX, Link2Off, Zap, Smartphone, Rocket, MousePointerClick, Building2, Play, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageHead, whatsappUrl } from '@/lib/portfolio';
import { nicheImages, customProjectImage } from '@/lib/niche-images';
import videoOferta from '@/assets/videos/celereweb-oferta-sites-que-vendem.mp4.asset.json';
import videoNichos from '@/assets/videos/celereweb-15-nichos.mp4.asset.json';
import videoBeneficios from '@/assets/videos/celereweb-beneficios.mp4.asset.json';
import videoProcesso from '@/assets/videos/celereweb-processo-acelerado-por-ia.mp4.asset.json';
import videoWhatsapp from '@/assets/videos/celereweb-fale-pelo-whatsapp.mp4.asset.json';

export const Route = createFileRoute('/lp')({
  head: () => pageHead('CELEREWEB | Coloque sua empresa no Google com um site profissional', 'Desenvolvemos Landing Pages e Sites Institucionais sob medida para o seu negócio atrair mais clientes e fechar mais contratos.'),
  component: LandingPage,
});

const videos = [videoOferta, videoNichos, videoBeneficios, videoProcesso, videoWhatsapp];
const photos = ['Jurídico & Advocacia', 'Contabilidade & Finanças', 'Mercado Imobiliário', 'Logística & Transportadoras', 'Arquitetura & Design', 'Clínicas & Médicos', 'Academias & Personal Trainers', 'Pet Shops & Veterinárias', 'Comércio Local & Varejo', 'Gastronomia'].map(name => nicheImages[name]!);

const faqs = [
  { q: 'Quanto tempo demora?', a: 'Landing pages ficam prontas em poucos dias e sites institucionais em poucas semanas. Nosso processo moderno, acelerado por inteligência artificial, coloca seu projeto no ar em tempo recorde — sem abrir mão da qualidade.' },
  { q: 'O site será meu?', a: 'Sim. O site é 100% seu: domínio, conteúdo e acesso ficam no seu nome. Você não fica preso a mensalidades de aluguel de plataforma nem a contratos de fidelidade.' },
  { q: 'Preciso ter logo e textos prontos?', a: 'Não. Nós cuidamos de tudo: identidade visual, textos persuasivos, fotos e estrutura. Você só precisa nos contar sobre o seu negócio.' },
  { q: 'Meu site vai aparecer no Google?', a: 'Sim. Todos os sites são entregues otimizados para o Google, com títulos, descrições e estrutura pensados para atrair clientes da sua região e do seu nicho.' },
  { q: 'Como funciona o orçamento gratuito?', a: 'Você clica no botão, fala com a gente no WhatsApp e conta sua ideia. Em seguida enviamos uma proposta personalizada, sem compromisso e sem custo.' },
];

function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return <main className="lp">
    <section className="lp-hero">
      <div className="container-page lp-hero-inner reveal">
        <div className="lp-hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> CELEREWEB · Desenvolvimento web</div>
          <h1>Coloque sua empresa no Google com um site profissional de <span className="gradient-text">alta performance.</span></h1>
          <p className="lp-hero-sub">Desenvolvemos Landing Pages e Sites Institucionais sob medida para o seu negócio atrair mais clientes e fechar mais contratos.</p>
          <div className="hero-actions">
            <Button asChild variant="premium" size="lg" className="lp-glow"><Link to="/contato">Quero um Orçamento Gratuito <ArrowUpRight /></Link></Button>
          </div>
        </div>
        <div className="lp-hero-video">
          <video src={videoOferta.url} autoPlay muted loop playsInline preload="metadata" aria-label="Vídeo apresentando os sites desenvolvidos pela CELEREWEB" />
          <div className="lp-video-badge"><Play size={11} /> Veja nosso trabalho</div>
        </div>
      </div>
    </section>

    <section className="container-page section scroll-reveal">
      <div className="lp-center-heading">
        <div className="eyebrow lp-center-eyebrow"><span className="eyebrow-line" /> O problema</div>
        <h2>Sua empresa ainda comete esses erros no digital?</h2>
      </div>
      <div className="lp-pain-grid">
        {[
          { icon: Instagram, title: 'Depender só do Instagram', text: 'O alcance orgânico cai a cada dia. Sem um site, seu negócio desaparece quando o algoritmo muda — e você perde clientes sem perceber.' },
          { icon: SearchX, title: 'Perder clientes no Google', text: 'Quando alguém pesquisa pelo seu serviço, quem aparece é o concorrente. Cada busca sem a sua empresa é um contrato fechado por outro.' },
          { icon: Link2Off, title: 'Parecer amador', text: 'Links quebrados, páginas desatualizadas e visual improvisado passam insegurança. Clientes julgam sua empresa pela presença digital.' },
        ].map(({ icon: Icon, title, text }) => <div className="lp-pain-card" key={title}>
          <span className="lp-pain-x" aria-hidden="true">✕</span>
          <Icon className="lp-pain-icon" />
          <h3>{title}</h3>
          <p>{text}</p>
        </div>)}
      </div>
    </section>

    <section className="lp-services">
      <div className="container-page section scroll-reveal">
        <div className="lp-center-heading">
          <div className="eyebrow lp-center-eyebrow"><span className="eyebrow-line" /> A solução</div>
          <h2>Tudo o que o seu negócio precisa para crescer na internet</h2>
        </div>
        <div className="lp-service-grid">
          <div className="lp-service-card">
            <div className="solution-photo"><img src={customProjectImage.url} alt={customProjectImage.alt} loading="lazy" /></div>
            <div className="solution-body">
              <MousePointerClick />
              <h3>Landing Pages (Páginas de Vendas)</h3>
              <p>Focadas 100% em conversão e anúncios. Uma página direta, rápida e persuasiva para transformar visitantes em pedidos de orçamento.</p>
              <Button asChild variant="glass"><Link to="/contato">Quero uma landing page <ArrowUpRight /></Link></Button>
            </div>
          </div>
          <div className="lp-service-card">
            <div className="solution-photo"><img src={nicheImages['Infoprodutores & Palestrantes']!.url} alt={nicheImages['Infoprodutores & Palestrantes']!.alt} loading="lazy" /></div>
            <div className="solution-body">
              <Building2 />
              <h3>Sites Institucionais</h3>
              <p>Estruturas completas para gerar autoridade no Google. Apresente seus serviços, sua história e conquiste a confiança de quem ainda não te conhece.</p>
              <Button asChild variant="glass"><Link to="/contato">Quero um site institucional <ArrowUpRight /></Link></Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="container-page section scroll-reveal">
      <div className="lp-center-heading">
        <div className="eyebrow lp-center-eyebrow"><span className="eyebrow-line" /> Nossos diferenciais</div>
        <h2>Por que escolher nossa agência?</h2>
      </div>
      <div className="lp-feature-grid">
        {[
          { icon: Zap, title: 'Velocidade Máxima', text: 'Sites otimizados que abrem instantaneamente.' },
          { icon: Smartphone, title: '100% Responsivo', text: 'Layout perfeito para celular e computador.' },
          { icon: Rocket, title: 'Entrega Ágil', text: 'Processo moderno para colocar seu projeto no ar em tempo recorde.' },
        ].map(({ icon: Icon, title, text }) => <div className="lp-feature" key={title}>
          <span className="lp-feature-icon"><Icon /></span>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>)}
      </div>
    </section>

    <section className="lp-portfolio">
      <div className="container-page section scroll-reveal">
        <div className="lp-center-heading">
          <div className="eyebrow lp-center-eyebrow"><span className="eyebrow-line" /> Portfólio</div>
          <h2>Conheça nosso trabalho</h2>
          <p className="section-intro">Projetos recentes desenvolvidos com tecnologia de ponta.</p>
        </div>
        <div className="lp-video-grid">
          {videos.map((video, index) => <div className="lp-video-card" key={video.url}>
            <video src={video.url} muted loop playsInline preload="metadata" aria-label={`Vídeo de apresentação ${index + 1} da CELEREWEB`} onMouseEnter={event => event.currentTarget.play()} onMouseLeave={event => event.currentTarget.pause()} />
          </div>)}
        </div>
        <div className="lp-photo-grid">
          {photos.map(photo => <div className="lp-photo-card" key={photo.url}>
            <img src={photo.url} alt={photo.alt} loading="lazy" />
          </div>)}
        </div>
        <p className="sample-note">Conceitos demonstrativos de soluções digitais.</p>
      </div>
    </section>

    <section className="container-page section scroll-reveal">
      <div className="lp-center-heading">
        <div className="eyebrow lp-center-eyebrow"><span className="eyebrow-line" /> Dúvidas frequentes</div>
        <h2>Perguntas & respostas</h2>
      </div>
      <div className="lp-faq">
        {faqs.map((faq, index) => <div className="lp-faq-item" key={faq.q}>
          <button type="button" className="lp-faq-question" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
            {faq.q}
            <ChevronDown className="lp-faq-chevron" />
          </button>
          {openFaq === index && <p className="lp-faq-answer">{faq.a}</p>}
        </div>)}
      </div>
    </section>

    <section className="lp-final-cta scroll-reveal">
      <div className="container-page">
        <h2>Pronto para dar o <span className="gradient-text">próximo passo?</span></h2>
        <p>Fale agora com quem vai desenvolver o seu site. Orçamento gratuito, sem compromisso.</p>
        <Button asChild variant="whatsapp" size="lg" className="lp-glow"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Falar com Desenvolvedor no WhatsApp <MessageCircle /></a></Button>
      </div>
    </section>
  </main>;
}
