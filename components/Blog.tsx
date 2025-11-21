import React from 'react';
import { BLOG_TOPICS } from '../constants';
import { ArrowRight } from 'lucide-react';

const BLOG_IMAGES = [
    "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=400", // Postura/Sentado
    "https://images.unsplash.com/photo-1531363025179-35611f000cb1?auto=format&fit=crop&q=80&w=400", // Dor lombar/Fisio
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400", // Massagem/Drenagem
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400"  // Idoso/Prevenção
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Blog & Dicas</h2>
                <h3 className="text-3xl font-bold text-slate-900">Conteúdo para sua saúde</h3>
            </div>
            <a href="#" className="hidden md:flex items-center text-primary-600 font-medium hover:text-primary-700">
                Ver todos os artigos <ArrowRight size={16} className="ml-2"/>
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BLOG_TOPICS.slice(0, 4).map((topic, index) => (
                <div key={index} className="group cursor-pointer">
                    <div className="aspect-video rounded-xl overflow-hidden bg-slate-100 mb-4 relative">
                         <img 
                            src={BLOG_IMAGES[index % BLOG_IMAGES.length]} 
                            alt={topic} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                         />
                         <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-primary-700">
                            SAÚDE
                         </div>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                        {topic}
                    </h4>
                    <span className="text-sm text-slate-500">Ler artigo →</span>
                </div>
            ))}
        </div>
         <div className="mt-8 md:hidden text-center">
            <a href="#" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                Ver todos os artigos <ArrowRight size={16} className="ml-2"/>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;