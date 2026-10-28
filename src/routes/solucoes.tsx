import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, HeartPulse, Store, Rocket, Sparkles, CodeXml } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { groups, pageHead } from '@/lib/portfolio';
import { nicheImages, customProjectImage } from '@/lib/niche-images';
import { ContactCTA } from '@/components/portfolio-shell';
export const Route = createFileRoute('/solucoes')({ head: () => pageHead('Soluções por Nicho | CELEREWEB', 'Sites e landing pages sob medida para 15 segmentos de mercado, da advocacia à educação.'), component: Solutions });
function Solutions() {
 const [active, setActive] = useState(0);
 const icons = [BriefcaseBusiness,HeartPulse,Store,Rocket];
 const group = groups[active] ?? groups[0];
 return <main><section className="container-page inner-page section"><div className="page-heading reveal"><div className="eyebrow"><span className="eyebrow-line"/> Especialista no seu próximo passo</div><h1>Seu nicho. Sua identidade.<br/><span className="gradient-text">A solução certa.</span></h1><p>Cada mercado tem uma forma de se conectar. Encontre a experiência digital que faz sentido para o seu negócio.</p></div><div className="niche-tabs" role="tablist" aria-label="Categorias de soluções">{groups.map((item,index) => { const Icon=icons[index] ?? CodeXml; return <Button key={item.title} variant="glass" role="tab" className="niche-tab" id={`tab-${index}`} aria-controls="niche-panel" aria-selected={active===index} onClick={() => setActive(index)}><Icon/>{item.title}</Button>; })}</div><div className="solution-grid" id="niche-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>{group?.niches.map(([title,description]) => <article className="solution-card reveal" key={title}><div className="solution-photo"><img src={nicheImages[title]?.url} alt={nicheImages[title]?.alt ?? title} loading="lazy"/></div><div className="solution-body"><h3>{title}</h3><p>{description}</p><Button asChild variant="glass"><Link to="/contato" search={{ nicho:title }}>Quero essa solução <ArrowUpRight/></Link></Button></div></article>)}{(group?.niches.length === 5 || active===3) && <article className="solution-card custom-solution reveal"><div className="solution-photo"><img src={customProjectImage.url} alt={customProjectImage.alt} loading="lazy"/></div><div className="solution-body"><Sparkles/><h3>Projetos personalizados</h3><p>Seu negócio não está na lista? Criamos soluções exclusivas para transformar sua ideia em uma experiência digital sob demanda.</p><Button asChild variant="premium"><Link to="/contato">Vamos criar juntos <ArrowUpRight/></Link></Button></div></article>}</div></section><ContactCTA/></main>;
}
