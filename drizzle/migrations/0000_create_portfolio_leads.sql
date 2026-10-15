CREATE TABLE public.leads_portfolio (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 nome text NOT NULL CHECK (char_length(nome) BETWEEN 2 AND 100),
 email text NOT NULL CHECK (char_length(email) <= 255),
 whatsapp text NOT NULL CHECK (char_length(whatsapp) BETWEEN 10 AND 25),
 nicho text NOT NULL CHECK (char_length(nicho) <= 100),
 mensagem text NOT NULL CHECK (char_length(mensagem) BETWEEN 10 AND 2000)
);
GRANT ALL ON public.leads_portfolio TO service_role;
ALTER TABLE public.leads_portfolio ENABLE ROW LEVEL SECURITY;
CREATE INDEX leads_portfolio_created_at_idx ON public.leads_portfolio (created_at DESC);