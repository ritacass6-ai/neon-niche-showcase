import { describe, expect, it } from 'vitest';
import { contactSchema, groups, niches, whatsappUrl } from '@/lib/portfolio';
const valid = { nome:'Cliente Exemplo', email:'cliente@example.com', whatsapp:'21980473591', nicho:'Jurídico & Advocacia', mensagem:'Gostaria de um site para meu escritório.' };
describe('Portfolio requirements', () => {
 it('contains 15 market niches grouped in four categories', () => { expect(niches).toHaveLength(15); expect(groups.map(g=>g.niches.length)).toEqual([5,3,5,2]); });
 it('uses the WhatsApp number supplied by Rita', () => { expect(new URL(whatsappUrl).pathname).toBe('/5521980473591'); });
 it('accepts all five requested contact fields', () => { expect(contactSchema.parse(valid)).toEqual(valid); });
 it('does not accept a niche outside the requested segments', () => { expect(contactSchema.safeParse({...valid,nicho:'Invalid'}).success).toBe(false); });
 it('rejects invalid email and automated honeypot submissions', () => { expect(contactSchema.safeParse({...valid,email:'invalid'}).success).toBe(false); expect(contactSchema.safeParse({...valid,website:'spam'}).success).toBe(false); });
});
