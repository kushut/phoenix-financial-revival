import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Lock } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !password.trim()) {
      toast.error("Bitte E-Mail und Passwort eingeben");
      return;
    }

    setLoading(true);

    try {
      // Sign in
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
      });

      if (authError) {
        if (authError.message.includes("Invalid login credentials")) {
          toast.error("Ungültige Zugangsdaten");
        } else {
          toast.error(authError.message);
        }
        setLoading(false);
        return;
      }

      if (!authData.user) {
        toast.error("Login fehlgeschlagen");
        setLoading(false);
        return;
      }

      // Check if user has admin role
      const { data: roleData, error: roleError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", authData.user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (roleError || !roleData) {
        // Sign out if not admin
        await supabase.auth.signOut();
        toast.error("Keine Admin-Berechtigung");
        setLoading(false);
        return;
      }

      toast.success("Erfolgreich angemeldet");
      navigate("/sys-mgmt-7k9x");
    } catch (error) {
      toast.error("Ein Fehler ist aufgetreten");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-xl font-bold">Admin Login</h1>
            <p className="text-sm text-muted-foreground">Zugangsdaten eingeben</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Passwort"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Anmelden..." : "Anmelden"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
