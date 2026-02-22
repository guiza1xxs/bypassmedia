import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav_why: "Why Us",
      nav_services: "Services",
      nav_contact: "Contact",
      hero_t1: "Your Traffic.",
      hero_t2: "Our Experience.",
      hero_sub: "High-performance lead acquisition for restricted niches. Discrete results. Exponential impact.",
      hero_cta: "Schedule Consultancy",
      hero_trusted: "Trusted by industry leaders",
      hero_exp: "2+ Years Experience",
      hero_gen: "€100k+ Generated",
      hero_conf: "100% Confidential",
      pillars_subtitle: "Our Methodology",
      pillars_title: "Built on Three Pillars",
      p1_title: "Precise Targeting",
      p1_desc: "Surgically segmented audiences through proprietary data intelligence and behavioral analysis.",
      p2_title: "Proven Funnels",
      p2_desc: "Conversion architectures tested on over €100K in ad spend across restricted niches.",
      p3_title: "Adaptive Tech",
      p3_desc: "Resilient technical infrastructure that adapts in real-time to policy and algorithm changes.",
      why_subtitle: "Why Choose Us",
      why_title_1: "Trust Takes",
      why_title_2: "Years To Build.",
      why_desc_1: "In a market where most promise impossible results, we build reputation through consistent delivery. Every campaign is treated with the same rigor and confidentiality we would apply to our own investments.",
      why_desc_2: "We work exclusively with a limited number of clients to ensure total attention and exceptional results. We are not for everyone — we are for those who demand the best.",
      why_stat_ret: "Client Retention",
      why_stat_exp: "Years Experience",
      why_stat_rev: "Revenue Generated",
      why_stat_conf: "Confidential",
      why_prop_1: "Mandatory NDA in all partnerships",
      why_prop_2: "Direct communication with decision-makers",
      why_prop_3: "Transparent real-time reports",
      quote: "In a world of noise, precision is power.",
      contact_subtitle: "Let's Connect",
      contact_title: "Ready to Scale?",
      contact_desc: "Schedule a confidential consultancy. No commitment. No aggressive pitch. Just a conversation about your business.",
      contact_btn: "Request Contact",
      contact_privacy: "Your data is protected and will never be shared.",
      footer_rights: "© 2026 BypassMedia. All rights reserved. Confidential.",
      footer_top: "Back to Top"
    }
  },
  pt: {
    translation: {
      nav_why: "Porquê Nós",
      nav_services: "Serviços",
      nav_contact: "Contacto",
      hero_t1: "O Seu Tráfego.",
      hero_t2: "A Nossa Experiência.",
      hero_sub: "Aquisição de leads de alta performance para nichos restritos. Resultados discretos. Impacto exponencial.",
      hero_cta: "Agendar Consultoria",
      hero_trusted: "Líderes de mercado confiam em nós",
      hero_exp: "2+ Anos de Experiência",
      hero_gen: "€100K+ Gerados",
      hero_conf: "100% Confidencial",
      pillars_subtitle: "A Nossa Metodologia",
      pillars_title: "Construído em Três Pilares",
      p1_title: "Segmentação Precisa",
      p1_desc: "Audiências cirurgicamente segmentadas através de data intelligence proprietária e behavioral analysis.",
      p2_title: "Funis Comprovados",
      p2_desc: "Arquiteturas de conversão testadas em mais de €100K em investimento publicitário em nichos restritos.",
      p3_title: "Tecnologia Adaptativa",
      p3_desc: "Infraestrutura técnica resiliente que se adapta em tempo real às mudanças de políticas e algoritmos.",
      why_subtitle: "Porquê Escolher-nos",
      why_title_1: "A Confiança Leva",
      why_title_2: "Anos a Construir.",
      why_desc_1: "Num mercado onde a maioria promete resultados impossíveis, nós construímos reputação através de entregas consistentes. Cada campanha é tratada com o mesmo rigor e confidencialidade que aplicaríamos aos nossos próprios investimentos.",
      why_desc_2: "Trabalhamos exclusivamente com um número limitado de clientes para garantir atenção total e resultados excepcionais. Não somos para todos — somos para os que exigem o melhor.",
      why_stat_ret: "Retenção de Clientes",
      why_stat_exp: "Anos de Experiência",
      why_stat_rev: "Receita Gerada",
      why_stat_conf: "Confidencial",
      why_prop_1: "NDA obrigatório em todas as parcerias",
      why_prop_2: "Comunicação direta com decision-makers",
      why_prop_3: "Relatórios transparentes em tempo real",
      quote: "Num mundo de ruído, a precisão é poder.",
      contact_subtitle: "Vamos Conversar",
      contact_title: "Pronto para Escalar?",
      contact_desc: "Agende uma consultoria confidencial. Sem compromisso. Sem pitch agressivo. Apenas uma conversa sobre o seu negócio.",
      contact_btn: "Solicitar Contacto",
      contact_privacy: "Os seus dados estão protegidos e nunca serão partilhados.",
      footer_rights: "© 2026 BypassMedia. Todos os direitos reservados. Confidencial.",
      footer_top: "Voltar ao Topo"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
