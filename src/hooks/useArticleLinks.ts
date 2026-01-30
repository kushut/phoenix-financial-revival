import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface ArticleLink {
  id: string;
  article_slug: string;
  article_title: string;
  offer_url: string;
  updated_at: string;
}

export const useArticleLinks = () => {
  const [links, setLinks] = useState<ArticleLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLinks = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("article_links")
        .select("*")
        .order("article_title");

      if (error) throw error;
      setLinks(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fehler beim Laden");
    } finally {
      setLoading(false);
    }
  };

  const updateLinks = async (slugs: string[], newUrl: string) => {
    try {
      const { error } = await supabase
        .from("article_links")
        .update({ offer_url: newUrl })
        .in("article_slug", slugs);

      if (error) throw error;
      await fetchLinks();
      return { success: true };
    } catch (err) {
      return { success: false, error: err instanceof Error ? err.message : "Fehler" };
    }
  };

  const addArticle = async (slug: string, title: string, url: string = "#") => {
    try {
      const { error } = await supabase
        .from("article_links")
        .insert({ article_slug: slug, article_title: title, offer_url: url });

      if (error) throw error;
      await fetchLinks();
      return { success: true };
    } catch (err) {
      return { success: false, error: err instanceof Error ? err.message : "Fehler" };
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return { links, loading, error, updateLinks, addArticle, refetch: fetchLinks };
};

export const useOfferUrl = (slug: string) => {
  const [url, setUrl] = useState<string>("#");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const { data, error } = await supabase
          .from("article_links")
          .select("offer_url")
          .eq("article_slug", slug)
          .single();

        if (error) throw error;
        setUrl(data?.offer_url || "#");
      } catch {
        setUrl("#");
      } finally {
        setLoading(false);
      }
    };

    fetchUrl();
  }, [slug]);

  return { url, loading };
};
