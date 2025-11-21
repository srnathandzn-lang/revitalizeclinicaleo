import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920" 
          alt="Ambiente da Clínica Revitalize" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20 md:via-white/80 md:to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <CheckCircle size={16} />
              Referência em Fisioterapia em Feira de Santana
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              {COMPANY_INFO.slogan}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Uma clínica moderna e acolhedora dedicada à sua reabilitação, estética e bem-estar. 
              Equipe qualificada e estrutura sofisticada para você viver sem dor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/30 hover:-translate-y-1"
              >
                Agendar Avaliação
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="#services"
                className="inline-flex justify-center items-center px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-lg font-semibold text-lg hover:border-primary-600 hover:text-primary-600 transition-all"
              >
                Conhecer Serviços
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 flex items-center gap-8 text-slate-500 text-sm font-medium"
          >
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                Atendimento Personalizado
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                Tecnologia Avançada
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                Ambiente Climatizado
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;