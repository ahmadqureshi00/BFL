'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, MapPin, DollarSign } from 'lucide-react';
import { getSubjectBySlug, getUniversitiesBySubject } from '@/lib/data';
import { universities } from '@/lib/data';

export default function SubjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const subject = getSubjectBySlug(slug);
  const subjectUniversities = getUniversitiesBySubject(slug);
  
  const [activeTab, setActiveTab] = useState('overview');
  
  // Get other subjects for the carousel
  const otherSubjects = universities
    .flatMap(u => u.subjects)
    .filter((value, index, self) => self.indexOf(value) === index)
    .slice(0, 6);
  
  if (!subject) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Subject Not Found</h1>
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>
      
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${subject.image || '/materials/subject-default.jpg'})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">{subject.name} Study Abroad Programs</h1>
            <p className="text-xl max-w-3xl">{subject.description}</p>
          </div>
        </div>
      </div>
      
      {/* Sticky Sub-Navigation */}
      <div className="sticky top-16 bg-white shadow-md z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-6 py-4">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'universities', label: 'Universities' },
              { id: 'other', label: 'Other Subjects' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect Studying {subject.name}</h2>
            <p className="text-gray-600 mb-6">
              Studying {subject.name} abroad offers unique opportunities to gain international perspectives 
              and hands-on experience in diverse academic environments. Students typically engage in rigorous 
              coursework, collaborative projects, and research opportunities that prepare them for global careers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Career Prospects</h3>
                <p className="text-gray-600">
                  Graduates often pursue roles in multinational corporations, research institutions, and international organizations.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Research Opportunities</h3>
                <p className="text-gray-600">
                  Access to cutting-edge facilities and collaboration with leading experts in the field.
              </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Global Network</h3>
                <p className="text-gray-600">
                  Build connections with peers and professionals from around the world.
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Program Structure</h3>
            <p className="text-gray-600 mb-6">
              Most {subject.name} programs combine theoretical foundations with practical applications. 
              Students typically complete core courses, electives, and a capstone project or thesis. 
              Many programs also include internship opportunities with industry partners.
            </p>
          </div>
        )}
        
        {/* Universities Tab */}
        {activeTab === 'universities' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Universities Offering {subject.name}</h2>
              <p className="text-gray-600">{subjectUniversities.length} programs available</p>
            </div>
            
            {subjectUniversities.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">No universities found</h3>
                <p className="text-gray-500">
                  We're working on adding more programs for {subject.name}. Check back soon!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {subjectUniversities.map(university => (
                  <div key={university.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{university.name}</h3>
                          <p className="text-gray-600 flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {university.location.city}, {university.location.country}
                          </p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Rank #{university.ranking}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-gray-600 line-clamp-2">{university.description}</p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-lg font-bold text-gray-900">
                            {university.tuition.currency} {university.tuition.value.toLocaleString()} / {university.tuition.period}
                          </p>
                        </div>
                        <Link 
                          href={`/universities/${university.slug}`}
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                          View Program
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        
        {/* Other Subjects Tab */}
        {activeTab === 'other' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Other Subjects</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {otherSubjects.map((subjSlug, index) => {
                // Find subject data (simplified for this example)
                const subj = {
                  name: subjSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                  slug: subjSlug
                };
                
                return (
                  <Link 
                    key={index}
                    href={`/subjects/${subj.slug}`}
                    className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-3" />
                    <h3 className="font-medium text-gray-900">{subj.name}</h3>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}