
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
    icon: <Globe className="w-8 h-8" />
  },
  {
    id: 'blockchain',
    title: 'Blockchain Development',
    description: 'Secure, decentralized solutions including smart contracts, dApps, and enterprise blockchain implementations.',
    icon: <Bitcoin className="w-8 h-8" />
  },
  {
    id: 'ai-dev',
    title: 'AI Development Services',
    description: 'Harness the power of Machine Learning and LLMs to automate processes and unlock deep business insights.',
    icon: <Cpu className="w-8 h-8" />
  },
  {
    id: 'data-crm',
    title: 'Data & CRM Software',
    description: 'Robust data management and custom CRM systems to streamline your operations and enhance customer relations.',
    icon: <Database className="w-8 h-8" />
  },
  {
    id: 'mobile-dev',
    title: 'iOS & Android App Development',
    description: 'High-performance native and cross-platform mobile applications that users love to interact with.',
    icon: <Smartphone className="w-8 h-8" />
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    description: 'Scalable SaaS platforms and complex enterprise web applications designed for growth and efficiency.',
    icon: <Layers className="w-8 h-8" />
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    description: 'Immersive 2D and 3D gaming experiences across platforms, from concept and design to final launch.',
    icon: <Gamepad2 className="w-8 h-8" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FinTech Dashboard',
    category: ProjectCategory.WEB,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'Real-time financial analytics for global traders featuring live market data and predictive trends.'
  },
  {
    id: '2',
    title: 'Crypto Wallet v2',
    category: ProjectCategory.BLOCKCHAIN,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
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
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Founder',
    company: 'BitFlow',
    content: 'The blockchain solution WebStack developed for us is incredibly robust. Security was our priority, and they delivered.',
    rating: 5,
    avatar: 'https://picsum.photos/id/65/100/100'
  },
  {
    id: '3',
    name: 'Emma Williams',
    role: 'Product Manager',
    company: 'GlobalData',
    content: 'Exceptional attention to detail in our new CRM. It has boosted our sales team productivity by over 40%.',
    rating: 5,
    avatar: 'https://picsum.photos/id/66/100/100'
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
