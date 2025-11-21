import { Activity, Heart, UserCheck, Sparkles, Smile, ShieldCheck, Clock, MapPin } from "lucide-react";
import { ServiceItem, Testimonial, FAQItem, TeamMember, NavLink } from "./types";

export const COMPANY_INFO = {
  name: "Clínica Revitalize",
  city: "Feira de Santana",
  state: "BA",
  phone: "(75) 98709-8172",
  whatsapp: "5575987098172",
  instagram: "@clinicarevitalizefsa",
  slogan: "Cuidando de você por inteiro",
  address: "Rua Barão de Cotegipe, 1234 - Centro, Feira de Santana - BA", // Endereço fictício para layout
  mapsLink: "https://maps.google.com/?q=Feira+de+Santana",
};

export const NAV_LINKS: NavLink[] = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Depoimentos", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contato", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "fisioterapia",
    title: "Fisioterapia e Reabilitação",
    icon: Activity,
    shortDescription: "Tratamento especializado para recuperação de movimentos e alívio da dor.",
    fullDescription: [
      "Nossa abordagem em fisioterapia combina técnicas manuais avançadas e tecnologia de ponta para acelerar sua recuperação.",
      "Focamos não apenas em tratar a lesão, mas em identificar a causa raiz do problema para prevenir recidivas."
    ],
    benefits: ["Alívio imediato da dor", "Recuperação da mobilidade", "Fortalecimento muscular direcionado"],
    indications: ["Pós-operatório ortopédico", "Lesões esportivas", "Dores crônicas na coluna", "Tendinites e Bursites"]
  },
  {
    id: "pilates",
    title: "Pilates Clínico e Funcional",
    icon: UserCheck,
    shortDescription: "Fortalecimento, flexibilidade e correção postural em um ambiente exclusivo.",
    fullDescription: [
      "O método Pilates na Revitalize é ministrado por fisioterapeutas, garantindo segurança e adaptação para cada necessidade.",
      "Nossa estrutura completa de aparelhos permite desde a reabilitação suave até o condicionamento físico avançado."
    ],
    benefits: ["Melhora da postura", "Aumento da flexibilidade", "Tonificação muscular", "Consciência corporal"],
    indications: ["Dores lombares", "Hérnia de disco", "Gestantes", "Idosos", "Atletas"]
  },
  {
    id: "estetica",
    title: "Estética Avançada",
    icon: Sparkles,
    shortDescription: "Procedimentos modernos para realçar sua beleza natural com segurança.",
    fullDescription: [
      "Integramos saúde e beleza com protocolos personalizados. Utilizamos dermocosméticos de alta performance e equipamentos modernos.",
      "Cada tratamento começa com uma avaliação minuciosa para entender seus objetivos."
    ],
    benefits: ["Rejuvenescimento facial", "Redução de medidas", "Tratamento de celulite e estrias", "Bem-estar e autoestima"],
    indications: ["Limpeza de pele profunda", "Drenagem linfática", "Massagem modeladora", "Peelings"]
  },
  {
    id: "bem-estar",
    title: "Bem-estar e Prevenção",
    icon: Heart,
    shortDescription: "Programas focados em qualidade de vida e saúde integrada.",
    fullDescription: [
      "Acreditamos que a prevenção é o melhor remédio. Nossos programas de bem-estar visam manter seu corpo em equilíbrio.",
      "Ideal para quem busca envelhecimento saudável e vida livre de dores."
    ],
    benefits: ["Redução do estresse", "Melhora do sono", "Equilíbrio corpo e mente", "Manutenção da saúde física"],
    indications: ["Prevenção de lesões", "Manutenção pós-alta", "Relaxamento", "Saúde do idoso"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Ana Carla Souza", text: "Cheguei na clínica com uma dor lombar que me impedia de trabalhar. Após 2 meses de Pilates e Fisioterapia, sou outra pessoa! A equipe é maravilhosa.", rating: 5 },
  { id: 2, name: "Roberto Mendes", text: "Estrutura impecável e atendimento muito humano. Fiz minha reabilitação de joelho e me senti acolhido desde o primeiro dia.", rating: 5 },
  { id: 3, name: "Fernanda Oliveira", text: "A drenagem linfática é perfeita. O ambiente é super relaxante e as profissionais muito competentes. Recomendo de olhos fechados.", rating: 5 },
  { id: 4, name: "Lucas Ferreira", text: "Profissionais qualificados que realmente entendem do assunto. O tratamento para minha lesão no ombro foi muito eficaz.", rating: 5 },
  { id: 5, name: "Mariana Costa", text: "O Pilates mudou minha vida. Melhorei minha postura e não sinto mais dores nas costas. Agradeço a toda equipe Revitalize!", rating: 5 },
  { id: 6, name: "Patrícia Lima", text: "Fiz limpeza de pele e adorei o resultado. Produtos de qualidade e mão leve. A clínica é linda e super limpa.", rating: 5 },
  { id: 7, name: "Carlos Eduardo", text: "Atendimento pontual e respeitoso. O ambiente climatizado e organizado faz toda a diferença. Excelência em Feira de Santana.", rating: 5 },
  { id: 8, name: "Juliana Santos", text: "Sinto que cuidam de mim 'por inteiro' mesmo, como diz o slogan. É mais que uma clínica, é um lugar de paz.", rating: 5 },
];

export const FAQS: FAQItem[] = [
  { question: "Aceitam convênios?", answer: "Trabalhamos com sistema de reembolso e alguns convênios selecionados. Entre em contato pelo WhatsApp para verificar a cobertura do seu plano." },
  { question: "Preciso de encaminhamento médico?", answer: "Para avaliação fisioterapêutica, não é obrigatório, pois nossos fisioterapeutas têm autonomia para diagnóstico funcional. Porém, trazê-lo ajuda no tratamento." },
  { question: "Como agendar uma avaliação?", answer: "Você pode agendar diretamente pelo nosso WhatsApp (75) 98709-8172 ou preenchendo o formulário aqui no site." },
  { question: "O Pilates é individual ou em grupo?", answer: "Oferecemos ambas as modalidades. O Pilates individual é focado em reabilitação específica, enquanto os grupos são reduzidos (máx 3 pessoas) para garantir atenção total." },
  { question: "Quais formas de pagamento?", answer: "Aceitamos cartões de crédito, débito, PIX e dinheiro. Temos pacotes promocionais para tratamentos contínuos." },
  { question: "A clínica possui estacionamento?", answer: "Sim, temos convênio com estacionamento próximo e vagas rotativas na rua para sua comodidade." },
  { question: "Quanto tempo dura uma sessão?", answer: "As sessões variam de 50 a 60 minutos, dependendo do procedimento e necessidade do paciente." },
  { question: "Atendem crianças e idosos?", answer: "Sim! Temos especialistas em fisioterapia geriátrica e pediátrica, adaptando o ambiente para segurança de todos." },
  { question: "Onde fica a clínica?", answer: "Estamos localizados em Feira de Santana - BA, em uma região central e de fácil acesso." },
  { question: "Oferecem pacotes de estética?", answer: "Sim, criamos protocolos personalizados que combinam diferentes terapias para potencializar seus resultados com custo-benefício." },
];

export const BLOG_TOPICS = [
  "5 Benefícios do Pilates para quem trabalha sentado",
  "Dor lombar: Quando procurar um fisioterapeuta?",
  "Drenagem Linfática vs. Massagem Modeladora: Qual escolher?",
  "A importância da Fisioterapia Preventiva na terceira idade",
  "Como a postura afeta sua produtividade e humor",
  "Reabilitação pós-Covid: Recuperando a capacidade pulmonar",
  "Mitos e Verdades sobre Hérnia de Disco",
  "Skincare e saúde: Cuidados diários essenciais"
];

export const TEAM: TeamMember[] = [
  { name: "Dra. Camila Rocha", role: "Fisioterapeuta Responsável", description: "Especialista em Traumato-ortopedia e Pilates Clínico com 10 anos de experiência.", image: "https://picsum.photos/300/300?random=10" },
  { name: "Dr. André Silva", role: "Fisioterapeuta e Osteopata", description: "Focado em terapia manual e reabilitação esportiva de alto rendimento.", image: "https://picsum.photos/300/300?random=11" },
  { name: "Dra. Beatriz Lima", role: "Biomédica Esteta", description: "Apaixonada por harmonização e cuidados com a pele, trazendo o que há de mais moderno.", image: "https://picsum.photos/300/300?random=12" }
];