import universitiesData from '@/src/data/universities.json';
import subjectsData from '@/src/data/subjects.json';
import { University, Subject } from '@/types';

// Type guard to ensure data conforms to our interfaces
export const universities: University[] = universitiesData as University[];
export const subjects: Subject[] = subjectsData as Subject[];

// Utility functions for data access
export const getUniversityBySlug = (slug: string): University | undefined => {
  return universities.find(university => university.slug === slug);
};

export const getUniversityById = (id: string): University | undefined => {
  return universities.find(university => university.id === id);
};

export const getSubjectBySlug = (slug: string): Subject | undefined => {
  return subjects.find(subject => subject.slug === slug);
};

export const getUniversitiesBySubject = (subjectSlug: string): University[] => {
  return universities.filter(university => 
    university.subjects.includes(subjectSlug)
  );
};

export const getUniversitiesByContinent = (continent: string): University[] => {
  return universities.filter(university => 
    university.location.continent.toLowerCase() === continent.toLowerCase()
  );
};

export const getUniversitiesByCountry = (country: string): University[] => {
  return universities.filter(university => 
    university.location.country.toLowerCase() === country.toLowerCase()
  );
};

export const getAllContinents = (): string[] => {
  const continents = universities.map(u => u.location.continent);
  return [...new Set(continents)];
};

export const getCountriesByContinent = (continent: string): string[] => {
  const countries = universities
    .filter(u => u.location.continent.toLowerCase() === continent.toLowerCase())
    .map(u => u.location.country);
  return [...new Set(countries)];
};