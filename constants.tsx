
import React from 'react';
import { 
  Globe, 
  Cpu, 
  Database, 
  Smartphone, 
  Layers, 
  Gamepad2, 
  Bitcoin,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Star
} from 'lucide-react';
import { Service, Project, ProjectCategory, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Custom, responsive websites built with the latest frameworks to deliver exceptional performance and user experience.',
    icon: <Globe className="w-8 h-8" />,
    detailedInfo: {
      longDescription: "In the digital-first era, your website is your most powerful asset. We build high-performance, SEO-optimized web experiences that convert visitors into loyal customers. Our stack focuses on React, Next.js, and modern headless CMS solutions to ensure your site is as fast as it is beautiful.",
      features: ["Next.js & React Architectures", "Core Web Vitals Optimization", "Headless CMS Integration", "Responsive Fluid Design", "PWA (Progressive Web App) Capabilities"],
      process: [
        { step: "Strategy", description: "In-depth analysis of your brand, goals, and target audience." },
        { step: "Design", description: "UI/UX wireframing and high-fidelity prototypes." },
        { step: "Build", description: "Clean, modular code with continuous integration." },
        { step: "Deploy", description: "Rigorous testing followed by global CDN deployment." }
      ],
      benefits: ["Increased conversion rates", "Lightning-fast load times", "Seamless mobile experience", "Future-proof scalability"]
    }
  },
  {
    id: 'blockchain',
    title: 'Blockchain Development',
    description: 'Secure, decentralized solutions including smart contracts, dApps, and enterprise blockchain implementations.',
    icon: <Bitcoin className="w-8 h-8" />,
    detailedInfo: {
      longDescription: "We help you navigate the decentralized web. From private Hyperledger fabrics for enterprise supply chains to public dApps on Ethereum and Solana, our blockchain experts ensure security and transparency are at the core of your digital transformation.",
      features: ["Smart Contract Auditing", "Custom dApp Development", "Tokenomics Design", "DeFi Protocol Architecture", "Private Blockchain Infrastructure"],
      process: [
        { step: "Architecture", description: "Determining the right protocol for your use case." },
        { step: "Security First", description: "Writing gas-optimized and highly secure smart contracts." },
        { step: "Integration", description: "Connecting Web3 components with Web2 legacy systems." },
        { step: "Audit", description: "Third-party security verification and launch." }
      ],
      benefits: ["Unparalleled data integrity", "Decentralized trust", "Reduced operational costs", "Transparent audit trails"]
    }
  },
  {
    id: 'ai-dev',
    title: 'AI Development Services',
    description: 'Harness the power of Machine Learning and LLMs to automate processes and unlock deep business insights.',
    icon: <Cpu className="w-8 h-8" />,
    detailedInfo: {
      longDescription: "Artificial Intelligence is no longer a luxury; it's a necessity. We integrate custom LLMs, computer vision, and predictive analytics into your existing workflows to drive efficiency and uncover hidden growth opportunities.",
      features: ["Custom LLM Fine-tuning", "Predictive Analytics Dashboards", "Natural Language Processing", "Computer Vision Systems", "AI Strategy Consulting"],
      process: [
        { step: "Data Audit", description: "Evaluating your existing data quality and sources." },
        { step: "Model Selection", description: "Choosing or training the right AI model for the task." },
        { step: "Integration", description: "Deploying AI as an API or embedded feature." },
        { step: "Feedback Loop", description: "Continuous model refinement based on real-world results." }
      ],
      benefits: ["Automated complex tasks", "Data-driven decision making", "Personalized customer experiences", "Significant time savings"]
    }
  },
  {
    id: 'data-crm',
    title: 'Data & CRM Software',
    description: 'Robust data management and custom CRM systems to streamline your operations and enhance customer relations.',
    icon: <Database className="w-8 h-8" />,
    detailedInfo: {
      longDescription: "Your data is only valuable if it's accessible. We build custom CRM and ERP solutions tailored to your specific business logic, ensuring your team has the insights they need to close more deals and manage operations smoothly.",
      features: ["Custom Sales Pipelines", "Automated Reporting", "Third-party API Integrations", "Data Visualization", "Enterprise Security Controls"],
      process: [
        { step: "Workflow Mapping", description: "Understanding how your team currently works." },
        { step: "Database Design", description: "Architecting a scalable and secure data model." },
        { step: "UI Customization", description: "Building a dashboard that people actually enjoy using." },
        { step: "Migration", description: "Seamless transition of your existing data." }
      ],
      benefits: ["Centralized customer data", "Enhanced team collaboration", "Actionable business intelligence", "Reduced manual data entry"]
    }
  },
  {
    id: 'mobile-dev',
    title: 'iOS & Android App Development',
    description: 'High-performance native and cross-platform mobile applications that users love to interact with.',
    icon: <Smartphone className="w-8 h-8" />,
    detailedInfo: {
      longDescription: "We build mobile apps that live in your users' pockets. Whether it's a high-performance native Swift app or a cross-platform React Native solution, we focus on smooth animations, offline capabilities, and intuitive design.",
      features: ["React Native & Flutter Experts", "Native iOS/Android Development", "Apple Watch & Wearable Support", "Push Notification Strategy", "App Store Optimization (ASO)"],
      process: [
        { step: "Prototype", description: "Interactive mockups for early user feedback." },
        { step: "Development", description: "Agile sprints with bi-weekly builds." },
        { step: "QA", description: "Testing across dozens of physical devices." },
        { step: "Submission", description: "Handling the entire App Store/Play Store review process." }
      ],
      benefits: ["High user retention", "Seamless hardware integration", "Optimized performance", "Stronger brand loyalty"]
    }
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    description: 'Scalable SaaS platforms and complex enterprise web applications designed for growth and efficiency.',
    icon: <Layers className="w-8 h-8" />,
    detailedInfo: {
      longDescription: "Enterprise-grade web applications require a special kind of thinking. We specialize in SaaS platforms, multi-tenant architectures, and complex dashboards that handle thousands of concurrent users without breaking a sweat.",
      features: ["Microservices Architecture", "Multi-tenant SaaS Logic", "Real-time Collaboration Features", "Complex State Management", "High-security Cloud Hosting"],
      process: [
        { step: "Scoping", description: "Defining the minimum viable product (MVP)." },
        { step: "Architecture", description: "Planning for horizontal and vertical scaling." },
        { step: "Agile Build", description: "Iterative development with high visibility." },
        { step: "Security Check", description: "Penetration testing and SOC2 compliance checks." }
      ],
      benefits: ["Recurring revenue potential", "Global accessibility", "Easy updates and maintenance", "Scalable business model"]
    }
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    description: 'Immersive 2D and 3D gaming experiences across platforms, from concept and design to final launch.',
    icon: <Gamepad2 className="w-8 h-8" />,
    detailedInfo: {
      longDescription: "We bring stories to life through interactive play. Our game development team works with Unity and Unreal Engine to create immersive experiences for mobile, desktop, and consoles.",
      features: ["Unity & Unreal Engine Expertise", "2D/3D Asset Pipeline", "Game Mechanic Design", "Multiplayer Server Logic", "Cross-platform Porting"],
      process: [
        { step: "Game Design", description: "Core mechanics, story, and art style definition." },
        { step: "Prototyping", description: "Focusing on the 'fun factor' first." },
        { step: "Production", description: "Full-scale asset creation and coding." },
        { step: "Polishing", description: "Sound design, VFX, and performance optimization." }
      ],
      benefits: ["Viral engagement potential", "High user monetization", "Immersive brand experiences", "Cutting-edge technology usage"]
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FinTech Dashboard',
    category: ProjectCategory.WEB,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'Real-time financial analytics for global traders featuring live market data and predictive trends.'
  },
  {
    id: '2',
    title: 'Crypto Wallet v2',
    category: ProjectCategory.BLOCKCHAIN,
    image: 'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?auto=format&fit=crop&q=80&w=800',
    description: 'Multi-chain secure wallet with biometric authentication and DeFi staking capabilities.'
  },
  {
    id: '3',
    title: 'AI Customer Bot',
    category: ProjectCategory.AI,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    description: 'Intelligent support agent built on custom LLMs, reducing manual response times by 80%.'
  },
  {
    id: '4',
    title: 'HealthTrack Pro',
    category: ProjectCategory.MOBILE,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    description: 'Comprehensive medical tracking app for patient-doctor synchronicity and fitness monitoring.'
  },
  {
    id: '5',
    title: 'Neon Odyssey',
    category: ProjectCategory.GAMES,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    description: 'Award-winning action RPG with realistic physics and immersive neon-cyberpunk environments.'
  },
  {
    id: '6',
    title: 'SupplyChain Hub',
    category: ProjectCategory.BLOCKCHAIN,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    description: 'Transparent global logistics tracking system using private Hyperledger blockchain.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CTO',
    company: 'NexLevel Tech',
    content: 'WebStack transformed our legacy systems into a modern, scalable cloud infrastructure. Their team is top-notch.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Founder',
    company: 'BitFlow',
    content: 'The blockchain solution WebStack developed for us is incredibly robust. Security was our priority, and they delivered.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '3',
    name: 'Emma Williams',
    role: 'Product Manager',
    company: 'GlobalData',
    content: 'Exceptional attention to detail in our new CRM. It has boosted our sales team productivity by over 40%.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100'
  }
];

export const WHY_CHOOSE_US = [
  'Experienced Team of 50+ Experts',
  'Scalable & Future-Proof Solutions',
  '24/7 Dedicated Technical Support',
  'Industry-Leading Security Standards'
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];
