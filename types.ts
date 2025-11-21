import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  fullDescription: string[];
  benefits: string[];
  indications: string[];
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface NavLink {
  name: string;
  href: string;
}