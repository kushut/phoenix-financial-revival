import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export const useAdminAuth = () => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session?.user) {
          setIsAdmin(false);
          setLoading(false);
          navigate("/sys-auth-7k9x");
          return;
        }

        // Check admin role
        const { data: roleData, error } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", session.user.id)
          .eq("role", "admin")
          .maybeSingle();

        if (error || !roleData) {
          setIsAdmin(false);
          await supabase.auth.signOut();
          navigate("/sys-auth-7k9x");
        } else {
          setIsAdmin(true);
        }
      } catch (error) {
        setIsAdmin(false);
        navigate("/sys-auth-7k9x");
      } finally {
        setLoading(false);
      }
    };

    checkAdminStatus();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") {
        setIsAdmin(false);
        navigate("/sys-auth-7k9x");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/sys-auth-7k9x");
  };

  return { isAdmin, loading, logout };
};
