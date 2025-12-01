import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { articles } from "@/data/articles";

const Article = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-display font-bold mb-4">ไม่พบบทความ</h1>
          <Link to="/">
            <Button>กลับหน้าแรก</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6 -ml-4 group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            กลับหน้าแรก
          </Button>
        </Link>

        <Badge variant="secondary" className="mb-4">
          {article.category}
        </Badge>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
          <span className="font-medium text-foreground">{article.author}</span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {article.publishedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {article.readTime}
          </span>
        </div>

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8 shadow-[var(--shadow-card)]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="text-xl text-muted-foreground leading-relaxed mb-8 font-light">
            {article.excerpt}
          </div>
          
          <div 
            className="article-content text-foreground leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ 
              __html: article.content
                .split('\n')
                .map(line => {
                  if (line.startsWith('## ')) {
                    return `<h2 class="text-3xl font-display font-bold mt-12 mb-6">${line.slice(3)}</h2>`;
                  }
                  if (line.startsWith('### ')) {
                    return `<h3 class="text-2xl font-display font-semibold mt-8 mb-4">${line.slice(4)}</h3>`;
                  }
                  if (line.match(/^\d+\./)) {
                    return `<p class="ml-4">${line}</p>`;
                  }
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return `<p class="font-semibold">${line.slice(2, -2)}</p>`;
                  }
                  if (line.trim() === '') {
                    return '<br />';
                  }
                  return `<p>${line}</p>`;
                })
                .join('')
            }}
          />
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-display font-bold text-primary">
                {article.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-semibold text-lg text-foreground">{article.author}</p>
              <p className="text-muted-foreground">ผู้เขียน</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Article;
