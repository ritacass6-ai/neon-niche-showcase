import { Link, useLocation } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ArrowUpRight, CodeXml, Menu, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { whatsappUrl } from '@/lib/portfolio';

const nav = [{ to: '/', text: 'Home' }, { to: '/solucoes', text: 'Soluções por Nicho' }, { to: '/sobre', text: 'Sobre Mim' }, { to: '/contato', text: 'Contato' }] as const;
export function PortfolioHeader() {
 const [open, setOpen] = useState(false);
 const location = useLocation();
 useEffect(() => { setOpen(false); }, [location.pathname]);
 return <header className="site-header"><div className="container-page header-inner"><Link to="/" className="brand" aria-label="Rita Maciel — Home"><CodeXml className="brand-symbol" size={33}/><div><div className="brand-name">CELEREWEB</div><div className="brand-caption">Desenvolvedora web</div></div></Link><nav className="desktop-nav" aria-label="Menu principal">{nav.map(item => <Link key={item.to} to={item.to} className="nav-link" activeOptions={{ exact: true }}>{item.text}</Link>)}<Button asChild variant="premium" className="header-cta"><Link to="/contato">Vamos conversar <ArrowUpRight/></Link></Button></nav><Button variant="ghost" size="icon" className="mobile-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button></div>{open && <nav className="mobile-nav" aria-label="Menu móvel">{nav.map(item => <Link className="nav-link" to={item.to} key={item.to}>{item.text}</Link>)}</nav>}</header>;
}
export function PortfolioFooter() {
 return <><footer className="footer"><div className="container-page footer-inner"><Link to="/" className="footer-brand">rita maciel<span className="text-accent">.</span></Link><span>© 2026 Rita de Cássia Maciel Gomes. Todos os direitos reservados.</span><span>Feito com estratégia, código e propósito.</span></div></footer><Button variant="whatsapp" asChild className="floating-wa"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp" title="Conversar pelo WhatsApp"><MessageCircle/></a></Button></>;
}
export function ScrollReveal() {
 const location = useLocation();
 useEffect(() => {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .08 });
  document.querySelectorAll('.scroll-reveal').forEach(element => observer.observe(element));
  return () => observer.disconnect();
 }, [location.pathname]);
 return null;
}
export function ContactCTA() {
 return <section className="cta-band scroll-reveal"><h2>Seu próximo capítulo começa <span className="gradient-text">no digital.</span></h2><p>Vamos transformar sua ideia em um site que trabalha pelo seu negócio?</p><Button asChild variant="premium" size="lg"><Link to="/contato">Vamos criar seu projeto <ArrowUpRight/></Link></Button></section>;
}
