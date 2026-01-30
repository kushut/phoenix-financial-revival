-- Create table for article link configurations
CREATE TABLE public.article_links (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  article_slug TEXT NOT NULL UNIQUE,
  article_title TEXT NOT NULL,
  offer_url TEXT NOT NULL DEFAULT '#',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.article_links ENABLE ROW LEVEL SECURITY;

-- Allow public read access (articles need to read the links)
CREATE POLICY "Anyone can view article links"
ON public.article_links
FOR SELECT
USING (true);

-- Allow public update for now (simple admin without auth)
-- In production you'd want admin auth here
CREATE POLICY "Anyone can update article links"
ON public.article_links
FOR UPDATE
USING (true);

CREATE POLICY "Anyone can insert article links"
ON public.article_links
FOR INSERT
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_article_links_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_article_links_updated_at
BEFORE UPDATE ON public.article_links
FOR EACH ROW
EXECUTE FUNCTION public.update_article_links_updated_at();

-- Insert default entries for all existing articles
INSERT INTO public.article_links (article_slug, article_title, offer_url) VALUES
  ('/gelsenkirchener-sparkassen-fiasko', '65.000 Euro im Sparkassen-Fiasko verloren', '#'),
  ('/42000-euro-verloren', '42.000 Euro verloren – Seniorin stabilisiert Vermögen', '#'),
  ('/maschmeyer-investment-geheimnis', 'Maschmeyer enthüllt Bank-Geheimnis', '#'),
  ('/frank-thelen-cheat-code', 'Frank Thelen: Das ist wie ein Cheat-Code', '#'),
  ('/eu-bankenregeln-fair-access', 'EU-Gesetz zwingt Banken zur Fairness', '#'),
  ('/vw-ingenieur-finanzielle-freiheit', 'VW-Ingenieur findet finanzielle Freiheit', '#'),
  ('/krankenschwester-entdeckt-bank-geheimnis', 'Krankenschwester entdeckt Bank-Geheimnis', '#'),
  ('/rentner-verdoppelt-alterseinkommen', 'Rentner verdoppelt Alterseinkommen', '#'),
  ('/finanztest-warnung-rentner', 'Finanztest warnt Rentner', '#'),
  ('/stiftung-warentest-warnung-sparer', 'Stiftung Warentest warnt Sparer', '#');