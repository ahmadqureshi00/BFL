'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  MapPin, 
  DollarSign, 
  Calendar, 
  Clock, 
  User, 
  BookOpen, 
  CheckCircle, 
  ArrowLeft,
  Star,
  Globe
} from 'lucide-react';
import { getUniversityBySlug } from '@/lib/data';
import { University } from '@/types';

export default function UniversityDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const university = getUniversityBySlug(slug);
  
  const [activeTab, setActiveTab] = useState('overview');
  
  if (!university) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">University Not Found</h1>
          <Link 
            href="/universities" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Universities
          </Link>
        </div>
      </div>
    );
  }

  // Format tuition cost
  const formatTuition = (tuition: University['tuition']) => {
    return `${tuition.currency} ${tuition.value.toLocaleString()} / ${tuition.period}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          href="/universities" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Universities
        </Link>
      </div>
      
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">{university.name}</h1>
            <p className="text-xl flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              {university.location.city}, {university.location.country}
            </p>
            <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-yellow-500 text-blue-900 font-bold">
              <DollarSign className="h-4 w-4 mr-1" />
              {formatTuition(university.tuition)}
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Buttons */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="flex justify-end gap-4">
          <button className="px-6 py-3 bg-white text-blue-900 font-bold rounded-md border-2 border-blue-900 hover:bg-blue-50">
            Apply Now
          </button>
          <button className="px-6 py-3 bg-yellow-500 text-blue-900 font-bold rounded-md hover:bg-yellow-600">
            Inquire Now
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sticky Sub-Navigation */}
            <div className="sticky top-16 bg-white rounded-lg shadow-md p-4 mb-8 z-10">
              <div className="flex overflow-x-auto gap-6">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'highlights', label: 'Highlights' },
                  { id: 'dates', label: 'Dates & Costs' },
                  { id: 'academics', label: 'Academics' },
                  { id: 'faqs', label: 'FAQs' }
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
            
            {/* Tab Content */}
            <div>
              {/* Overview */}
              {activeTab === 'overview' && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About {university.name}</h2>
                  <p className="text-gray-600 mb-6">{university.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-2">Ranking</h3>
                      <p className="text-2xl font-bold text-blue-600">#{university.ranking} Worldwide</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-2">Acceptance Rate</h3>
                      <p className="text-2xl font-bold text-blue-600">{university.acceptanceRate}</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                      <p className="text-2xl font-bold text-blue-600">{university.location.city}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Highlights */}
              {activeTab === 'highlights' && (
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg shadow-md p-8 mb-8 text-white">
                  <h2 className="text-2xl font-bold mb-6">Why Study at {university.name}?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {university.highlights.map((highlight, index) => (
                      <div key={index} className="bg-white bg-opacity-10 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                        <p>{highlight.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Dates & Costs */}
              {activeTab === 'dates' && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Terms & Costs</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Spring Term */}
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-900">Spring Term</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          Open
                        </span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Application Deadline</span>
                          <span className="font-medium">October 15, 2024</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Program Start</span>
                          <span className="font-medium">January 15, 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Program End</span>
                          <span className="font-medium">May 15, 2025</span>
                        </div>
                        <div className="flex justify-between pt-4 border-t border-gray-200">
                          <span className="text-gray-600">Total Cost</span>
                          <span className="font-bold text-lg">{formatTuition(university.tuition)}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Fall Term */}
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-900">Fall Term</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                          Closing Soon
                        </span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Application Deadline</span>
                          <span className="font-medium">April 15, 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Program Start</span>
                          <span className="font-medium">September 15, 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Program End</span>
                          <span className="font-medium">December 15, 2025</span>
                        </div>
                        <div className="flex justify-between pt-4 border-t border-gray-200">
                          <span className="text-gray-600">Total Cost</span>
                          <span className="font-bold text-lg">{formatTuition(university.tuition)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Academics */}
              {activeTab === 'academics' && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Academic Programs</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Available Subjects</h3>
                    <div className="flex flex-wrap gap-2">
                      {university.subjects.map(subject => (
                        <span 
                          key={subject} 
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                        >
                          {subject.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Program Levels</h3>
                    <div className="flex flex-wrap gap-2">
                      {university.levels.map(level => (
                        <span 
                          key={level} 
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                        >
                          {level.charAt(0).toUpperCase() + level.slice(1)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* FAQs */}
              {activeTab === 'faqs' && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">What are the admission requirements?</h3>
                      <p className="text-gray-600">
                        Admission requirements vary by program but typically include official transcripts, 
                        letters of recommendation, a statement of purpose, and proof of English proficiency 
                        (TOEFL/IELTS scores).
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">How do I apply for financial aid?</h3>
                      <p className="text-gray-600">
                        Students are automatically considered for merit-based scholarships upon admission. 
                        Need-based aid requires submission of the CSS Profile and other financial documentation.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">What housing options are available?</h3>
                      <p className="text-gray-600">
                        We offer on-campus residence halls, off-campus apartments, and homestay options. 
                        First-year students are guaranteed on-campus housing.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Can I work while studying?</h3>
                      <p className="text-gray-600">
                        International students can work up to 20 hours per week on campus during the academic 
                        year and full-time during breaks. Off-campus work requires special authorization.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{university.location.city}, {university.location.country}</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{university.location.continent}</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Rank #{university.ranking} Worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <User className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Acceptance Rate: {university.acceptanceRate}</span>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{formatTuition(university.tuition)}</span>
                  </li>
                </ul>
              </div>
              
              {/* Apply Button */}
              <button className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded-md hover:bg-yellow-600 mb-4">
                Apply Now
              </button>
              
              <button className="w-full py-3 bg-white text-blue-900 font-bold rounded-md border-2 border-blue-900 hover:bg-blue-50">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}