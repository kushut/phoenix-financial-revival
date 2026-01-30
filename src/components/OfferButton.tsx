import { useOfferUrl } from "@/hooks/useArticleLinks";
import { useLocation } from "react-router-dom";

interface OfferButtonProps {
  children: React.ReactNode;
  className?: string;
}

const OfferButton = ({ children, className = "" }: OfferButtonProps) => {
  const location = useLocation();
  const { url, loading } = useOfferUrl(location.pathname);

  if (loading) {
    return (
      <span className={`cta-button opacity-70 cursor-wait ${className}`}>
        {children}
      </span>
    );
  }

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-button ${className}`}
    >
      {children}
    </a>
  );
};

export default OfferButton;
