import { createServerFn } from '@tanstack/react-start';
import { contactSchema } from './portfolio';

export const submitContact = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const cutoff = new Date(Date.now() - 60_000).toISOString();
    const { count, error: checkError } = await supabaseAdmin.from('leads_portfolio').select('id', { count: 'exact', head: true }).eq('email', data.email).gte('created_at', cutoff);
    if (checkError) throw new Error('Não foi possível enviar agora. Tente novamente.');
    if ((count ?? 0) > 0) throw new Error('Sua mensagem já foi recebida. Aguarde um minuto antes de enviar outra.');
    const { website: _website, ...lead } = data;
    const { error } = await supabaseAdmin.from('leads_portfolio').insert(lead);
    if (error) throw new Error('Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.');
    return { success: true };
  });