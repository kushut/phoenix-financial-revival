import { useState } from "react";
import { useArticleLinks, ArticleLink } from "@/hooks/useArticleLinks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { ArrowLeft, Save, Plus, ExternalLink } from "lucide-react";

const Admin = () => {
  const { links, loading, updateLinks, addArticle } = useArticleLinks();
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const [newUrl, setNewUrl] = useState("");
  const [saving, setSaving] = useState(false);
  
  // For adding new articles
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSlug, setNewSlug] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const toggleSelection = (slug: string) => {
    setSelectedSlugs(prev => 
      prev.includes(slug) 
        ? prev.filter(s => s !== slug) 
        : [...prev, slug]
    );
  };

  const selectAll = () => {
    if (selectedSlugs.length === links.length) {
      setSelectedSlugs([]);
    } else {
      setSelectedSlugs(links.map(l => l.article_slug));
    }
  };

  const handleSave = async () => {
    if (selectedSlugs.length === 0) {
      toast.error("Bitte wähle mindestens einen Artikel aus");
      return;
    }
    if (!newUrl.trim()) {
      toast.error("Bitte gib eine URL ein");
      return;
    }

    setSaving(true);
    const result = await updateLinks(selectedSlugs, newUrl.trim());
    setSaving(false);

    if (result.success) {
      toast.success(`${selectedSlugs.length} Artikel-Link(s) aktualisiert`);
      setSelectedSlugs([]);
      setNewUrl("");
    } else {
      toast.error(result.error || "Fehler beim Speichern");
    }
  };

  const handleAddArticle = async () => {
    if (!newSlug.trim() || !newTitle.trim()) {
      toast.error("Bitte Slug und Titel eingeben");
      return;
    }

    const slug = newSlug.startsWith("/") ? newSlug : `/${newSlug}`;
    const result = await addArticle(slug, newTitle.trim());

    if (result.success) {
      toast.success("Artikel hinzugefügt");
      setNewSlug("");
      setNewTitle("");
      setShowAddForm(false);
    } else {
      toast.error(result.error || "Fehler beim Hinzufügen");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Lade...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-white p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:opacity-80">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
          <span className="text-sm opacity-80">{links.length} Artikel</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* URL Input Section */}
        <div className="bg-white rounded-lg border p-4 sm:p-6 mb-6">
          <h2 className="font-bold text-lg mb-4">Angebots-Link ändern</h2>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              placeholder="Neue URL eingeben (z.B. https://example.com/offer)"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={handleSave} 
              disabled={saving || selectedSlugs.length === 0}
              className="gap-2"
            >
              <Save className="w-4 h-4" />
              {saving ? "Speichern..." : `Speichern (${selectedSlugs.length})`}
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-2">
            Wähle unten die Artikel aus, für die du den Link ändern möchtest.
          </p>
        </div>

        {/* Article Selection */}
        <div className="bg-white rounded-lg border overflow-hidden">
          {/* Select All Header */}
          <div className="flex items-center justify-between p-4 bg-secondary/50 border-b">
            <div className="flex items-center gap-3">
              <Checkbox
                checked={selectedSlugs.length === links.length && links.length > 0}
                onCheckedChange={selectAll}
              />
              <span className="font-semibold text-sm">
                {selectedSlugs.length > 0 
                  ? `${selectedSlugs.length} ausgewählt` 
                  : "Alle auswählen"}
              </span>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowAddForm(!showAddForm)}
              className="gap-2"
            >
              <Plus className="w-4 h-4" />
              Neuer Artikel
            </Button>
          </div>

          {/* Add New Article Form */}
          {showAddForm && (
            <div className="p-4 bg-secondary/30 border-b">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="Slug (z.B. /neuer-artikel)"
                  value={newSlug}
                  onChange={(e) => setNewSlug(e.target.value)}
                  className="flex-1"
                />
                <Input
                  placeholder="Titel"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleAddArticle} size="sm">
                  Hinzufügen
                </Button>
              </div>
            </div>
          )}

          {/* Article List */}
          <div className="divide-y">
            {links.map((link) => (
              <ArticleRow
                key={link.id}
                link={link}
                selected={selectedSlugs.includes(link.article_slug)}
                onToggle={() => toggleSelection(link.article_slug)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

interface ArticleRowProps {
  link: ArticleLink;
  selected: boolean;
  onToggle: () => void;
}

const ArticleRow = ({ link, selected, onToggle }: ArticleRowProps) => {
  return (
    <div 
      className={`flex items-start gap-3 p-4 hover:bg-secondary/30 cursor-pointer transition-colors ${
        selected ? "bg-primary/5" : ""
      }`}
      onClick={onToggle}
    >
      <Checkbox checked={selected} className="mt-1" />
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm leading-snug">{link.article_title}</p>
        <p className="text-xs text-muted-foreground mt-1 truncate">
          {link.article_slug}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-muted-foreground">Link:</span>
          {link.offer_url === "#" ? (
            <span className="text-xs text-destructive">Nicht gesetzt</span>
          ) : (
            <a 
              href={link.offer_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline flex items-center gap-1 truncate max-w-[200px] sm:max-w-[400px]"
              onClick={(e) => e.stopPropagation()}
            >
              {link.offer_url}
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
