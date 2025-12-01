import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

const ArticleCard = ({
  id,
  title,
  excerpt,
  author,
  readTime,
  category,
  image,
  featured = false,
}: ArticleCardProps) => {
  return (
    <Link to={`/article/${id}`}>
      <article
        className={`group cursor-pointer ${
          featured ? "md:col-span-2 md:row-span-2" : ""
        }`}
      >
        <div className="relative overflow-hidden rounded-lg bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="p-6">
            <Badge variant="secondary" className="mb-3">
              {category}
            </Badge>
            
            <h3
              className={`font-display font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors ${
                featured ? "text-3xl" : "text-xl"
              }`}
            >
              {title}
            </h3>
            
            <p className={`text-muted-foreground mb-4 line-clamp-2 ${featured ? "text-lg" : ""}`}>
              {excerpt}
            </p>
            
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span className="font-medium">{author}</span>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
