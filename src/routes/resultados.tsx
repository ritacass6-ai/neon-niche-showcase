import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, MessageCircle, Search, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageHead } from '@/lib/portfolio';
import { ContactCTA } from '@/components/portfolio-shell';

export const Route = createFileRoute('/resultados')({
  head: () => pageHead('Resultados | CELEREWEB', 'O que muda quando seu negócio vai ao digital: presença moderna, contato direto, design memorável e entrega acelerada.'),
  component: Results,
});

const stats = [
  { value: '15', label: 'nichos atendidos', text: 'Soluções sob medida para 15 segmentos de mercado, do jurídico à gastronomia.' },
  { value: '4', label: 'grupos de soluções', text: 'Corporativo, saúde, comércio e digital — cada área com páginas pensadas para o seu público.' },
  { value: '100%', label: 'responsivo', text: 'Seu site perfeito no celular, no tablet e no computador, onde seus clientes estão.' },
  { value: 'IA', label: 'no processo', text: 'Desenvolvimento acelerado por inteligência artificial: entrega em dias, não em meses.' },
];

const outcomes = [
  { Icon: Search, title: 'Visibilidade no Google', text: 'Estrutura pensada para SEO e busca local, para que clientes encontrem seu negócio quando procurarem o que você oferece.' },
  { Icon: MessageCircle, title: 'Contato que converte', text: 'Formulário e WhatsApp integrados: cada visita tem um caminho claro para se transformar em conversa e em venda.' },
  { Icon: Sparkles, title: 'Design memorável', text: 'Identidade visual coerente com a essência da sua marca, em um site que passa profissionalismo desde a primeira dobra.' },
  { Icon: ShieldCheck, title: 'Base segura e rápida', text: 'Boas práticas de segurança, carregamento veloz e dados de contato protegidos — tecnologia a serviço do seu negócio.' },
];

function Results() {
  return <main className="container-page inner-page section">
    <div className="page-heading reveal">
      <div className="eyebrow"><span className="eyebrow-line"/> O que muda quando seu negócio vai ao digital</div>
      <h1>Resultados que <span className="gradient-text">falam.</span></h1>
      <p>Cada projeto da CELEREWEB é construído para gerar um resultado concreto: presença forte, contato fácil e um site que trabalha por você.</p>
    </div>
    <div className="result-stats scroll-reveal">
      {stats.map(item => <div className="result-stat" key={item.label}><b>{item.value}</b><small>{item.label}</small><p>{item.text}</p></div>)}
    </div>
    <div className="about-values scroll-reveal">
      {outcomes.map(({ Icon, title, text }) => <div key={title}><Icon/><h3>{title}</h3><p>{text}</p></div>)}
    </div>
    <div className="results-actions scroll-reveal">
      <Button asChild variant="premium" size="lg"><Link to="/solucoes">Ver soluções por nicho <ArrowUpRight/></Link></Button>
      <Button asChild variant="glass" size="lg"><Link to="/contato">Começar meu projeto <ArrowUpRight/></Link></Button>
    </div>
    <ContactCTA/>
  </main>;
}
