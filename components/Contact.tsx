import React from 'react';
import { useForm } from 'react-hook-form';
import { COMPANY_INFO } from '../constants';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Construct WhatsApp URL
    const text = `Olá! Me chamo ${data.name}. Gostaria de saber mais sobre ${data.service}. Mensagem: ${data.message}`;
    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Info */}
            <div className="bg-primary-700 p-10 md:p-14 text-white">
              <h3 className="text-3xl font-bold mb-6">Entre em contato</h3>
              <p className="text-primary-100 mb-12 text-lg">
                Pronto para transformar sua saúde? Agende sua avaliação ou tire suas dúvidas.
                Nossa equipe está pronta para atender você.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-600 p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Telefone</h4>
                    <p className="text-primary-100">{COMPANY_INFO.phone}</p>
                    <p className="text-sm text-primary-200 mt-1">Seg à Sex, 08h às 19h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-600 p-3 rounded-lg">
                     <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Localização</h4>
                    <p className="text-primary-100">{COMPANY_INFO.address}</p>
                    <a href={COMPANY_INFO.mapsLink} target="_blank" rel="noopener noreferrer" className="text-sm text-white underline mt-1 block hover:text-primary-200">
                      Ver no Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-600 p-3 rounded-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Horário de Atendimento</h4>
                    <p className="text-primary-100">Segunda a Sexta: 07:00 - 19:00</p>
                    <p className="text-primary-100">Sábado: 08:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-10 md:p-14 bg-white">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Agendar Avaliação</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                  <input
                    {...register("name", { required: true })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                  {errors.name && <span className="text-red-500 text-xs">Campo obrigatório</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Telefone / WhatsApp</label>
                  <input
                    {...register("phone", { required: true })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="(75) 99999-9999"
                  />
                  {errors.phone && <span className="text-red-500 text-xs">Campo obrigatório</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Interesse</label>
                  <select
                    {...register("service", { required: true })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Fisioterapia">Fisioterapia</option>
                    <option value="Pilates">Pilates</option>
                    <option value="Estética">Estética</option>
                    <option value="Outros">Outros</option>
                  </select>
                  {errors.service && <span className="text-red-500 text-xs">Selecione uma opção</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem (Opcional)</label>
                  <textarea
                    {...register("message")}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="Conte um pouco sobre sua necessidade..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Enviar via WhatsApp
                </button>
                <p className="text-center text-xs text-slate-400 mt-4">
                   Ao clicar, você será redirecionado para o WhatsApp da clínica.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;