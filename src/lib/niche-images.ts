import office from '@/assets/office.asset.json';
import accounting from '@/assets/accounting.asset.json';
import architecture from '@/assets/architecture.asset.json';
import logistics from '@/assets/logistics.asset.json';
import clinic from '@/assets/clinic.asset.json';
import gym from '@/assets/gym.asset.json';
import vet from '@/assets/vet.asset.json';
import retail from '@/assets/retail.asset.json';
import kitchen from '@/assets/pro-kitchen.asset.json';
import events from '@/assets/events.asset.json';
import mechanic from '@/assets/mechanic.asset.json';
import beauty from '@/assets/beauty.asset.json';
import workspace from '@/assets/workspace.asset.json';
import education from '@/assets/education.asset.json';
export const nicheImages: Record<string, { url: string; alt: string }> = {
 'Jurídico & Advocacia': { url: office.url, alt: 'Escritório moderno com salas envidraçadas e tons sóbrios' },
 'Contabilidade & Finanças': { url: accounting.url, alt: 'Consultoria financeira e análise de documentos' },
 'Mercado Imobiliário': { url: architecture.url, alt: 'Imóvel contemporâneo com arquitetura premium' },
 'Logística & Transportadoras': { url: logistics.url, alt: 'Centro de distribuição e logística organizado' },
 'Arquitetura & Design': { url: architecture.url, alt: 'Projeto arquitetônico de uma residência moderna' },
 'Clínicas & Médicos': { url: clinic.url, alt: 'Clínica médica com iluminação limpa e ambiente acolhedor' },
 'Academias & Personal Trainers': { url: gym.url, alt: 'Academia profissional com equipamentos de musculação' },
 'Pet Shops & Veterinárias': { url: vet.url, alt: 'Cuidado veterinário de um gato' },
 'Comércio Local & Varejo': { url: retail.url, alt: 'Loja de roupas com exposição organizada' },
 'Gastronomia': { url: kitchen.url, alt: 'Chef trabalhando em uma cozinha profissional sofisticada' },
 'Eventos & Buffets': { url: events.url, alt: 'Salão de eventos elegante preparado para uma celebração' },
 'Serviços & Manutenção': { url: mechanic.url, alt: 'Mecânico realizando manutenção profissional' },
 'Estética & Beleza': { url: beauty.url, alt: 'Salão de beleza moderno com decoração sóbria' },
 'Infoprodutores & Palestrantes': { url: workspace.url, alt: 'Tecnologia digital em um notebook' },
 'Escolas & Cursos': { url: education.url, alt: 'Alunos e professora em uma sala de aula' },
};
