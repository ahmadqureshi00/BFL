'use client';

import Link from 'next/link';
import { ArrowLeft, Award, DollarSign, Calendar, BookOpen } from 'lucide-react';

export default function ScholarshipsPage() {
  const scholarships = [
    {
      id: '1',
      name: 'Global Excellence Scholarship',
      provider: 'BFL.pk',
      amount: '$5,000 - $15,000',
      deadline: 'March 15, 2026',
      description: 'Merit-based scholarship for outstanding students pursuing undergraduate or graduate degrees abroad.',
      eligibility: 'Minimum 3.5 GPA, demonstrated leadership, financial need consideration',
      countries: ['UK', 'USA', 'Canada', 'Australia']
    },
    {
      id: '2',
      name: 'Women in STEM Scholarship',
      provider: 'International Education Foundation',
      amount: '$10,000',
      deadline: 'April 30, 2026',
      description: 'Supporting women pursuing degrees in Science, Technology, Engineering, and Mathematics fields.',
      eligibility: 'Female students enrolled in STEM programs, minimum 3.0 GPA',
      countries: ['USA', 'Germany', 'Netherlands']
    },
    {
      id: '3',
      name: 'Emerging Leaders Grant',
      provider: 'Commonwealth Scholarship Commission',
      amount: '$7,500',
      deadline: 'May 20, 2026',
      description: 'For students from developing countries demonstrating exceptional leadership potential.',
      eligibility: 'Citizens of Commonwealth countries, strong academic record, leadership experience',
      countries: ['India', 'Nigeria', 'Malaysia', 'South Africa']
    },
    {
      id: '4',
      name: 'Language Diversity Award',
      provider: 'European Cultural Exchange',
      amount: '$3,000',
      deadline: 'June 10, 2026',
      description: 'Supporting students studying in non-English speaking countries to promote language diversity.',
      eligibility: 'Studying in French, German, Spanish, or Mandarin programs, intermediate language proficiency',
      countries: ['France', 'Germany', 'Spain', 'China']
    },
    {
      id: '5',
      name: 'Rhodes Scholarship',
      provider: 'University of Oxford',
      amount: '$50,000',
      deadline: 'July 31, 2026',
      description: 'Fully funded postgraduate scholarship for international students to study at the University of Oxford.',
      eligibility: 'Outstanding academic achievement, leadership qualities, and commitment to service',
      countries: ['UK']
    },
    {
      id: '6',
      name: 'Fulbright Scholarship',
      provider: 'US Department of State',
      amount: '$35,000',
      deadline: 'September 15, 2026',
      description: 'Funded opportunity for international students to study, conduct research, or teach in the United States.',
      eligibility: 'Bachelor\'s degree, strong academic record, and leadership potential',
      countries: ['USA']
    }
  ];

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
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Scholarships & Financial Aid</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover funding opportunities to support your study abroad journey. 
            From government grants to university-specific awards, find financial assistance tailored to your needs.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8 bg-white shadow rounded-lg p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <select
                id="country"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option>All Countries</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Germany</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="level" className="block text-sm font-medium text-gray-700">
                Study Level
              </label>
              <select
                id="level"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option>All Levels</option>
                <option>Undergraduate</option>
                <option>Postgraduate</option>
                <option>PhD</option>
                <option>Research</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="field" className="block text-sm font-medium text-gray-700">
                Field of Study
              </label>
              <select
                id="field"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option>All Fields</option>
                <option>Business</option>
                <option>Engineering</option>
                <option>Medicine</option>
                <option>Computer Science</option>
                <option>Arts & Humanities</option>
                <option>Sciences</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map(scholarship => (
            <div key={scholarship.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{scholarship.name}</h3>
                    <p className="text-blue-600">{scholarship.provider}</p>
                  </div>
                  <div className="bg-blue-100 rounded-full p-2">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{scholarship.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-700 font-medium">{scholarship.amount}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-700">Deadline: {scholarship.deadline}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-700">Eligibility: {scholarship.eligibility}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">Available in:</p>
                  <div className="flex flex-wrap gap-2">
                    {scholarship.countries.map(country => (
                      <span 
                        key={country} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg shadow-md p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Finding Scholarships?</h2>
            <p className="text-blue-100 mb-6">
              Our advisors can help you identify and apply for scholarships that match your profile and goals.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-yellow-500 text-blue-900 font-bold px-6 py-3 rounded-md hover:bg-yellow-600"
            >
              Contact Our Advisors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}