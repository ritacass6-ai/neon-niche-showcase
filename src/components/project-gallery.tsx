import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import architecture from '@/assets/architecture.asset.json';
import clinic from '@/assets/clinic.asset.json';
import food from '@/assets/food.asset.json';
const projects = [
 { image: architecture.url, name: 'Arquitetura & Design', type: 'Portfólio que valoriza cada detalhe.', domain:'studioarquitetura.com.br', brand:'STUDIO / ARQUITETURA', headline:'Espaços para viver. Design para sentir.', tags:['Site institucional', 'Portfólio'] },
 { image: clinic.url, name: 'Clínicas & Saúde', type: 'Uma experiência acolhedora desde o primeiro clique.', domain:'clinicavital.com.br', brand:'VITAL · SAÚDE INTEGRADA', headline:'Cuidar de você é a nossa essência.', tags:['Landing page', 'Agendamento'] },
 { image: food.url, name: 'Gastronomia', type: 'Uma presença digital de dar água na boca.', domain:'essenzarestaurante.com.br', brand:'ESSENZA / GASTRONOMIA', headline:'Uma experiência para todos os sentidos.', tags:['Cardápio digital', 'Delivery'] },
];
export function ProjectGallery() {
 return <div><div className="project-grid">{projects.map(project => <Link to="/solucoes" className="project-card" key={project.name}><div className="browser-top"><i className="browser-dot"/><i className="browser-dot"/><i className="browser-dot"/><span className="browser-url">{project.domain}</span></div><div className="project-preview"><img src={project.image} alt={project.name} loading="lazy"/><div className="project-overlay"><span className="preview-brand">{project.brand}</span><div className="preview-title">{project.headline}</div><span className="preview-button">CONHEÇA NOSSA PROPOSTA ↗</span></div></div><div className="project-info"><div className="project-info-top"><h3>{project.name}</h3><ArrowUpRight/></div><p>{project.type}</p>{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></Link>)}</div><p className="sample-note">Conceitos demonstrativos de soluções digitais.</p></div>;
}
