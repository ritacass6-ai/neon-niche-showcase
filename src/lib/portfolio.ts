import { z } from 'zod';

export const whatsappUrl = 'https://wa.me/5521980473591?text=' + encodeURIComponent('Olá, Rita! Gostaria de conversar sobre um site para meu negócio.');
export const groups = [
  { title: 'Corporativo & serviços', icon: 'briefcase', niches: [
    ['Jurídico & Advocacia', 'Landing pages elegantes, alinhadas ao código da OAB, com mapas e blog.'],
    ['Contabilidade & Finanças', 'Sites corporativos com foco em abertura de empresas e consultoria.'],
    ['Mercado Imobiliário', 'Vitrine de imóveis com filtros de busca e contato direto com corretores.'],
    ['Logística & Transportadoras', 'Cotações de fretes inteligentes e apresentação da sua frota.'],
    ['Arquitetura & Design', 'Portfólios premium em mosaico para valorizar cada projeto.'],
  ] },
  { title: 'Saúde & bem-estar', icon: 'heart', niches: [
    ['Clínicas & Médicos', 'Design humanizado, especialidades e contato para agendamentos.'],
    ['Academias & Personal Trainers', 'Páginas focadas em matrículas, modalidades e horários.'],
    ['Pet Shops & Veterinárias', 'Agendamento de banho e tosa e vitrine dos seus principais produtos.'],
  ] },
  { title: 'Comércio, gastronomia & eventos', icon: 'shop', niches: [
    ['Comércio Local & Varejo', 'Catálogos virtuais e SEO local para ser encontrado no Google.'],
    ['Gastronomia', 'Cardápios digitais integrados e contato direto para delivery.'],
    ['Eventos & Buffets', 'Pacotes de festas, galeria de eventos e orçamento personalizado.'],
    ['Serviços & Manutenção', 'Galerias de antes e depois e contato de emergência no celular.'],
    ['Estética & Beleza', 'Portfólios visuais para salões e barbearias com agendamento online.'],
  ] },
  { title: 'Digital & educação', icon: 'rocket', niches: [
    ['Infoprodutores & Palestrantes', 'Sales pages rápidas com contagem regressiva e integração de checkout.'],
    ['Escolas & Cursos', 'Captação de matrículas e tour virtual em fotos para sua instituição.'],
  ] },
];
export const niches = groups.flatMap(group => group.niches.map(([name]) => name));
export const contactSchema = z.object({
  nome: z.string().trim().min(2, 'Informe seu nome.').max(100),
  email: z.string().trim().email('Informe um e-mail válido.').max(255),
  whatsapp: z.string().trim().min(10, 'Informe seu WhatsApp com DDD.').max(25).regex(/^[+\d\s()-]+$/, 'Informe um telefone válido.'),
  nicho: z.string().refine(value => niches.includes(value), 'Selecione seu nicho.'),
  mensagem: z.string().trim().min(10, 'Conte um pouco mais sobre seu projeto (mínimo de 10 caracteres).').max(2000),
  website: z.string().max(0).optional(),
});
export function pageHead(title: string, description: string, image?: string) {
  return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }, ...(image ? [{ property: 'og:image', content: image }, { name: 'twitter:image', content: image }] : [])] };
}