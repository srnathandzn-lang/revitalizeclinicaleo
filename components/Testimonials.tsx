import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-primary-900 text-white relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-400 rounded-full blur-3xl"></div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary-200 font-semibold tracking-wide uppercase text-sm mb-2">Depoimentos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Histórias de quem recuperou a qualidade de vida</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.slice(0, 8).map((t) => (
            <div key={t.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors duration-300">
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <Quote className="text-primary-300 mb-4 opacity-50" size={32} />
              <p className="text-primary-50 mb-6 text-sm leading-relaxed italic">"{t.text}"</p>
              <div className="mt-auto border-t border-white/10 pt-4">
                <p className="font-bold text-white">{t.name}</p>
                {t.role && <p className="text-xs text-primary-200">{t.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;