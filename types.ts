
import React from 'react';

export interface ServiceDetailInfo {
  longDescription: string;
  features: string[];
  process: { step: string; description: string }[];
  benefits: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  detailedInfo?: ServiceDetailInfo;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
}

export enum ProjectCategory {
  WEB = 'Web',
  MOBILE = 'Mobile',
  AI = 'AI',
  BLOCKCHAIN = 'Blockchain',
  GAMES = 'Games',
  ALL = 'All'
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}
