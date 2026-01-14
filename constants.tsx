import React from 'react';
import { Shield, Flame, ClipboardCheck, GraduationCap, Settings, Truck, Building2, Factory, School, Droplets } from 'lucide-react';
import { Service, TeamMember, PricePackage } from './types';

export const WHATSAPP_NUMBER = "919158502612";

export const SERVICES: Service[] = [
  {
    id: 'noc',
    title: 'Fire NOC Acquisition',
    description: 'Expert guidance for obtaining Provisional and Final No Objection Certificates from the Solapur Fire Department.',
    icon: 'Shield',
    details: [
      'Maharashtra Fire Prevention Act compliance',
      'Technical site inspection',
      'Renewals and status tracking'
    ]
  },
  {
    id: 'audit',
    title: 'Fire Safety Audits',
    description: 'Comprehensive risk assessment for industrial and residential buildings.',
    icon: 'ClipboardCheck',
    details: [
      'Electrical fire risk assessment',
      'Emergency exit compliance',
      'Detailed audit reports'
    ]
  },
  {
    id: 'training',
    title: 'Professional Training',
    description: 'Certified programs for your staff to respond effectively to emergencies.',
    icon: 'GraduationCap',
    details: [
      'First-aid firefighting',
      'Search and rescue operations',
      'Fire extinguisher usage'
    ]
  },
  {
    id: 'products',
    title: 'Fire Fighting Products',
    description: 'Premium quality equipment including extinguishers, hydrants, and alarms.',
    icon: 'Flame',
    details: [
      'ISI marked extinguishers',
      'Automatic sprinkler systems',
      'Modern fire alarm panels'
    ]
  },
  {
    id: 'amc',
    title: 'Fire AMC Services',
    description: 'Yearly maintenance contracts ensuring equipment is always operational.',
    icon: 'Settings',
    details: [
      'Extinguisher refilling',
      'Hydrant system testing',
      'System calibration'
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Aftab Maniyar',
    role: 'Founder & CEO',
    bio: 'Visionary leader with a decade of expertise in Solapur fire safety regulations.',
    fullBio: 'Aftab Maniyar founded RIFA with a mission to make Solapur fire-compliant. His strategic vision has led to over 500+ successful certifications.',
    image: 'https://res.cloudinary.com/dxw5mimqj/image/upload/v1768387056/Gemini_Generated_Image_15pqsi15pqsi15pq_1_mxqsaa.png',
    stats: { exp: '10+', audits: '500+', trainings: '200+' }
  },
  {
    id: '2',
    name: 'Aaftab Maniyar',
    role: 'Co-Founder & Managing Partner, Marketing Head',
    bio: 'Managing partner driving RIFA\'s growth and community safety awareness.',
    fullBio: 'Aaftab specializes in market outreach and operational growth, ensuring every business in the region understands the importance of safety.',
    image: 'https://res.cloudinary.com/dxw5mimqj/image/upload/v1768377850/663bf491-11be-4f2d-9b8c-cd57aca85dd7_tlym9x.png',
    stats: { exp: '8+', audits: '300+', trainings: '100+' }
  },
  {
    id: '3',
    name: 'Ayaan Perampalli',
    role: 'CFO, Managing Director, Sales And Revenue Head',
    bio: 'Chief Financial Officer driving revenue and strategic sales across Maharashtra.',
    fullBio: 'Ayaan ensures the financial health and commercial viability of RIFA\'s large-scale industrial projects.',
    image: 'https://res.cloudinary.com/dxw5mimqj/image/upload/v1768387213/Gemini_Generated_Image_gptvj7gptvj7gptv_cihlds.png',
    stats: { exp: '7+', audits: '150+', trainings: '50+' }
  },
  {
    id: '4',
    name: 'Kailas Kaiyyawale',
    role: 'Chief Operating Officer (COO) / Operations Manager',
    bio: 'Operations manager overseeing on-ground safety audits and technical teams.',
    fullBio: 'Kailas manages the technical execution of all safety projects, ensuring 100% precision in every audit.',
    image: 'https://res.cloudinary.com/dxw5mimqj/image/upload/v1768387327/Gemini_Generated_Image_kfuzunkfuzunkfuz_noq0ih.png',
    stats: { exp: '9+', audits: '450+', trainings: '150+' }
  },
  {
    id: '5',
    name: 'Aishwarya Gaikwad',
    role: 'Human Resources (HR) Officer',
    bio: 'Human Resources lead building the elite team behind RIFA\'s excellence.',
    fullBio: 'Aishwarya is responsible for the talent acquisition and organizational culture that makes RIFA a leader in safety services.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    stats: { exp: '5+', audits: '0', trainings: '30+' }
  }
];

export const CLIENTS = [
  { name: 'Oil & Gas Company', icon: Droplets },
  { name: 'Solapur Textiles', icon: Factory },
  { name: 'Medical Centers', icon: Building2 },
  { name: 'Logistics Hubs', icon: Truck },
];

export const GALLERY = [
  'https://res.cloudinary.com/dxw5mimqj/image/upload/v1768393261/burning-shopping-center-mall-with-smoke_limaqv.jpg',
  'https://res.cloudinary.com/dxw5mimqj/image/upload/v1768393260/crowded-indian-city_aql8uv.jpg',
  'https://res.cloudinary.com/dxw5mimqj/image/upload/v1768393256/577773672_1246463750861143_1043884560845707133_n_rv8rp7.jpg',
  'https://res.cloudinary.com/dxw5mimqj/image/upload/v1768393255/836081-surat-fire-1-pti_m3emon.jpg',
  'https://res.cloudinary.com/dxw5mimqj/image/upload/v1768393255/bawana-fire_a3rzwm.jpg',
  'https://res.cloudinary.com/dxw5mimqj/image/upload/v1768393254/download_3_sxujrp.jpg',
  'https://res.cloudinary.com/dxw5mimqj/image/upload/v1768393254/download_4_yobyfn.jpg',
];

export const CERTIFICATES = [
  { title: 'ISO 9001:2015', issuer: 'Quality Standards' },
  { title: 'Maharashtra Govt License', issuer: 'Fire Dept.' },
  { title: 'Master Trainer Certified', issuer: 'National Safety Council' },
];

export const PRICING: PricePackage[] = [
  {
    name: 'Basic Audit',
    range: '₹15,000 - ₹25,000',
    features: ['Single Building Inspection', 'Basic Hazard Report', 'Fire Extinguisher Check'],
    recommendedFor: 'Small Retail Outlets / Clinics'
  },
  {
    name: 'Industrial Pro',
    range: '₹45,000 - ₹85,000',
    features: ['Full Plant Audit', 'NOC Processing Assistance', 'Employee Training Session'],
    recommendedFor: 'Factories / Large Hospitals'
  }
];