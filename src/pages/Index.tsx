import Navbar from "@/components/Navbar";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-[500px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsl(var(--background) / 0.8), hsl(var(--background) / 0.95)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
            บล็อกเพื่อการอ่านที่ดี
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
            เรื่องราวที่น่าสนใจ แรงบันดาลใจ และความรู้ในภาษาไทย
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-display font-bold text-foreground mb-8">
          บทความเด่น
        </h2>
        <div className="grid grid-cols-1 gap-8">
          <ArticleCard {...featuredArticle} featured />
        </div>
      </section>

      {/* Article Grid */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-display font-bold text-foreground mb-8">
          บทความล่าสุด
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-primary mb-2">
                BoomBigNose
              </h3>
              <p className="text-muted-foreground">
                บล็อกเพื่อการอ่านที่ดี ในภาษาไทย
              </p>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                เกี่ยวกับเรา
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                ติดต่อ
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                นโยบายความเป็นส่วนตัว
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2567 BoomBigNose. สงวนลิขสิทธิ์.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
