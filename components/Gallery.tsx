import React from 'react';

const GALLERY_ITEMS = [
    { title: "Recepção Acolhedora", img: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=600" },
    { title: "Studio de Pilates", img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600" },
    { title: "Sala de Fisioterapia", img: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=600" },
    { title: "Sala de Estética", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600" },
    { title: "Equipamentos Modernos", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600" },
    { title: "Área de Avaliação", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600" },
];

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Nossa Estrutura</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Um espaço pensado no seu conforto</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY_ITEMS.map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                    <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;