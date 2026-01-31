-- Fix 1: Allow users to view their own role
CREATE POLICY "Users can view own role"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

-- Fix 2: Restrict article_links INSERT to admins only
DROP POLICY IF EXISTS "Anyone can insert article links" ON public.article_links;

CREATE POLICY "Admins can insert article links"
ON public.article_links
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Also restrict UPDATE to admins only for consistency
DROP POLICY IF EXISTS "Anyone can update article links" ON public.article_links;

CREATE POLICY "Admins can update article links"
ON public.article_links
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));