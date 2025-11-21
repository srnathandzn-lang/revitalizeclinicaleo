import React from 'react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              {COMPANY_INFO.slogan}. Uma abordagem integrada para recuperar sua saúde e elevar sua autoestima em Feira de Santana.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                    <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                    <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                    <Linkedin size={20} />
                </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Navegação</h4>
            <ul className="space-y-3">
                {NAV_LINKS.map(link => (
                    <li key={link.name}>
                        <a href={link.href} className="hover:text-primary-400 transition-colors text-sm">{link.name}</a>
                    </li>
                ))}
            </ul>
          </div>

          {/* Services */}
          <div>
             <h4 className="text-white font-bold mb-6">Serviços</h4>
             <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-primary-400">Fisioterapia Ortopédica</a></li>
                <li><a href="#" className="hover:text-primary-400">Pilates Clínico</a></li>
                <li><a href="#" className="hover:text-primary-400">Estética Facial</a></li>
                <li><a href="#" className="hover:text-primary-400">Estética Corporal</a></li>
                <li><a href="#" className="hover:text-primary-400">Reabilitação Pós-Cirúrgica</a></li>
             </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-3 text-sm">
                <li>Feira de Santana - BA</li>
                <li>{COMPANY_INFO.address}</li>
                <li>{COMPANY_INFO.phone}</li>
                <li>contato@clinicarevitalize.com.br</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Clínica Revitalize. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Política de Privacidade</a>
                <a href="#" className="hover:text-white">Termos de Uso</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;