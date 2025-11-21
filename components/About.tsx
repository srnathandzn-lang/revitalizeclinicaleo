import React from 'react';
import { TEAM } from '../constants';
import { Target, Eye, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Sobre a Clínica</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Sua saúde em primeiro lugar, em um ambiente pensado para você.</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              A <strong>Clínica Revitalize</strong> nasceu do sonho de integrar reabilitação física e bem-estar em um único espaço em Feira de Santana.
              Fugimos do padrão frio de clínicas tradicionais para oferecer um ambiente acolhedor, climatizado e sofisticado, onde cada paciente se sente único.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Nossa estrutura conta com equipamentos de última geração para Pilates e Fisioterapia, além de salas privativas para estética e avaliação, 
              garantindo conforto e resultados eficazes.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full opacity-50 z-0"></div>
             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-50 rounded-full opacity-50 z-0"></div>
             <img 
                src="https://images.unsplash.com/photo-1631217868269-dfc1c5c0b338?auto=format&fit=crop&q=80&w=800" 
                alt="Atendimento Clínica Revitalize" 
                className="relative z-10 rounded-2xl shadow-2xl object-cover h-96 w-full"
             />
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <Target className="text-primary-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Missão</h4>
            <p className="text-slate-600">Proporcionar reabilitação e bem-estar através de um atendimento humanizado e excelência técnica.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <Eye className="text-primary-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Visão</h4>
            <p className="text-slate-600">Ser referência em Feira de Santana em tratamentos integrados de saúde física e estética.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <Heart className="text-primary-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Valores</h4>
            <p className="text-slate-600">Ética profissional, acolhimento, inovação constante e compromisso com o resultado do paciente.</p>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-12">
           <h3 className="text-3xl font-bold text-slate-900">Nossos Especialistas</h3>
           <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Uma equipe multidisciplinar apaixonada pelo que faz e pronta para cuidar de você.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member, index) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                <p className="text-primary-600 font-medium text-sm mb-3 uppercase">{member.role}</p>
                <p className="text-slate-500 text-sm">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;