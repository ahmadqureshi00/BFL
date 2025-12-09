// User roles
export type UserRole = 'student' | 'admin';

// Base User interface
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

// Student specific fields
export interface Student extends User {
  academicHistory?: string;
  interestedCountries?: string[];
  profilePicture?: string;
}

// University interface
export interface UniversityLocation {
  city: string;
  country: string;
  continent: string;
}

export interface UniversityTuition {
  value: number;
  currency: string;
  period: string;
}

export interface UniversityImage {
  hero: string;
  gallery: string[];
}

export interface UniversityHighlight {
  title: string;
  desc: string;
}

export interface University {
  id: string;
  name: string;
  slug: string;
  location: UniversityLocation;
  ranking: number;
  acceptanceRate: string;
  tuition: UniversityTuition;
  subjects: string[];
  levels: string[];
  images: UniversityImage;
  description: string;
  highlights: UniversityHighlight[];
}

// Subject interface
export interface Subject {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

// Booking interface
export interface Booking {
  id: string;
  studentId: string;
  universityId: string;
  dateTime: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}