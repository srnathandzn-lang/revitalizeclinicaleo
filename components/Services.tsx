import React from 'react';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Nossas Especialidades</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tratamentos completos para sua saúde</h3>
          <p className="text-slate-600 text-lg">
            Na Clínica Revitalize, unimos ciência e cuidado. Conheça nossas principais áreas de atuação.
          </p>
        </div>

        <div className="space-y-16">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100`}
            >
              <div className="flex-1 w-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary-100 rounded-xl text-primary-600">
                    <service.icon size={32} />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-900">{service.title}</h4>
                </div>
                
                <div className="space-y-4 text-slate-600 mb-8">
                  {service.fullDescription.map((desc, i) => (
                    <p key={i} className="leading-relaxed">{desc}</p>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-3">Benefícios</h5>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check size={16} className="text-primary-500 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-3">Indicado para</h5>
                    <ul className="space-y-2">
                      {service.indications.map((indication, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 flex-shrink-0"></div>
                          {indication}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-5/12">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-64 lg:h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;