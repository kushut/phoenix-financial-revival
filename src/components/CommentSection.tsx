import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Comment {
  id: number;
  author: string;
  time: string;
  text: string;
  likes: number;
  isUserComment?: boolean;
}

interface CommentSectionProps {
  initialComments: Comment[];
}

const CommentSection = ({ initialComments }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");
  const [showNameInput, setShowNameInput] = useState(false);

  const handleSubmitComment = () => {
    if (!newComment.trim()) return;
    
    if (!userName.trim()) {
      setShowNameInput(true);
      return;
    }

    const userComment: Comment = {
      id: Date.now(),
      author: userName.trim(),
      time: "gerade eben",
      text: newComment.trim(),
      likes: 0,
      isUserComment: true
    };

    setComments([userComment, ...comments]);
    setNewComment("");
  };

  const handleNameSubmit = () => {
    if (userName.trim() && newComment.trim()) {
      handleSubmitComment();
      setShowNameInput(false);
    }
  };

  const handleLike = (commentId: number) => {
    setComments(comments.map(c => 
      c.id === commentId ? { ...c, likes: c.likes + 1 } : c
    ));
  };

  return (
    <section className="mt-12 pt-8 border-t">
      <h3 className="text-xl font-bold mb-6 font-spiegel-serif flex items-center gap-2">
        <MessageSquare className="w-5 h-5" />
        {comments.length} Kommentare
      </h3>

      {/* Comment Input */}
      <div className="mb-8 p-4 bg-secondary/30 rounded-lg">
        <p className="text-sm font-medium mb-3">Schreiben Sie einen Kommentar:</p>
        
        {showNameInput && (
          <div className="mb-3">
            <input
              type="text"
              placeholder="Ihr Name (z.B. Max M.)"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 rounded border bg-background text-sm"
              maxLength={30}
            />
          </div>
        )}
        
        <Textarea
          placeholder="Ihr Kommentar..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-3 bg-background resize-none"
          rows={3}
          maxLength={500}
        />
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {newComment.length}/500 Zeichen
          </span>
          <Button 
            onClick={showNameInput ? handleNameSubmit : handleSubmitComment}
            disabled={!newComment.trim()}
            size="sm"
          >
            {showNameInput ? "Absenden" : "Kommentieren"}
          </Button>
        </div>
      </div>
      
      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className={`border-b pb-6 last:border-b-0 ${comment.isUserComment ? 'bg-primary/5 -mx-2 px-2 py-3 rounded-lg' : ''}`}>
            <div className="flex items-start gap-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback className={`text-sm ${comment.isUserComment ? 'bg-primary/20' : 'bg-secondary'}`}>
                  {comment.author.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm">{comment.author}</span>
                  {comment.isUserComment && (
                    <span className="text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded">Sie</span>
                  )}
                  <span className="text-xs text-muted-foreground">{comment.time}</span>
                </div>
                <p className="text-sm leading-relaxed">{comment.text}</p>
                <div className="flex items-center gap-4 mt-2">
                  <button 
                    onClick={() => handleLike(comment.id)}
                    className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                  >
                    👍 {comment.likes}
                  </button>
                  <button className="text-xs text-muted-foreground hover:text-foreground">
                    Antworten
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentSection;
