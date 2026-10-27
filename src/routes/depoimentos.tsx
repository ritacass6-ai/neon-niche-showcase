import { createFileRoute } from '@tanstack/react-router';
import { Quote, Star } from 'lucide-react';
import { pageHead } from '@/lib/portfolio';
import { ContactCTA } from '@/components/portfolio-shell';

export const Route = createFileRoute('/depoimentos')({
  head: () => pageHead('Depoimentos de clientes | CELEREWEB', 'Veja o que dizem os clientes sobre os sites e landing pages de alta conversão criados pela CELEREWEB.'),
  component: Testimonials,
});

const testimonials = [
  { name: 'Fernanda Lopes', role: 'Advocacia', text: 'O site ficou elegante e exatamente alinhado ao que a OAB exige. Em poucas semanas, começamos a receber contatos de novos clientes direto pela página.' },
  { name: 'Dr. Rafael Monteiro', role: 'Clínica médica', text: 'Design humanizado e agendamento simples. A recepção elogiou: os pacientes chegam já sabendo quem somos. O processo foi rápido do início ao fim.' },
  { name: 'Camila Duarte', role: 'Restaurante', text: 'O cardápio digital integrado facilitou demais o delivery. Pedidos pelo WhatsApp aumentaram e o site passa uma sofisticação que combina com nossa cozinha.' },
  { name: 'Bruno Tavares', role: 'Arquitetura', text: 'Meu portfólio em mosaico valoriza cada projeto como eu sempre quis. Recebo elogios de colegas e clientes toda semana. Valeu cada centavo.' },
  { name: 'Juliana Prado', role: 'Infoprodutos', text: 'A sales page carrega rápido e a integração com o checkout foi impecável. Minha conversão subiu visivelmente na primeira campanha depois do lançamento.' },
  { name: 'Patrícia Mendes', role: 'Salão de beleza', text: 'Agendamento online mudou minha rotina: menos mensagens perdidas e mais horários marcados. O site mostra meu trabalho com a luz que ele merece.' },
];

function Testimonials() {
  return <main className="container-page inner-page section">
    <div className="page-heading reveal">
      <div className="eyebrow"><span className="eyebrow-line"/> Resultados na voz de quem viveu</div>
      <h1>Depoimentos de <span className="gradient-text">clientes.</span></h1>
      <p>Projetos entregues com agilidade, segurança e design — e negócios que passaram a vender mais no digital.</p>
    </div>
    <div className="testimonial-grid">
      {testimonials.map(item => <figure className="testimonial-card scroll-reveal" key={item.name}>
        <div className="testimonial-stars" aria-label="Avaliação: 5 de 5 estrelas">{Array.from({ length: 5 }, (_, index) => <Star key={index} fill="currentColor" size={13}/>)}</div>
        <blockquote className="testimonial-quote">{item.text}</blockquote>
        <figcaption className="testimonial-author">
          <span className="testimonial-avatar" aria-hidden="true">{item.name.split(' ').map(part => part[0]).slice(0, 2).join('')}</span>
          <span><b>{item.name}</b><small>{item.role}</small></span>
          <Quote className="testimonial-icon" size={26}/>
        </figcaption>
      </figure>)}
    </div>
    <p className="sample-note">Depoimentos de exemplo — envie os relatos reais dos seus clientes para substituí-los.</p>
    <ContactCTA/>
  </main>;
}
