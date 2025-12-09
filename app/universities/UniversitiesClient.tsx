'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronDown, MapPin, GraduationCap, DollarSign, Filter, X } from 'lucide-react';
import { universities } from '@/lib/data';
import { University } from '@/types';

export default function UniversitiesClient() {
  const searchParams = useSearchParams();
  
  // Filter states
  const [budgetMin, setBudgetMin] = useState<number | ''>('');
  const [budgetMax, setBudgetMax] = useState<number | ''>('');
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>(universities);
  const [showFilters, setShowFilters] = useState(false); // For mobile filter toggle
  
  // Unique values for filters
  const allCountries = [...new Set(universities.map(u => u.location.country))];
  const allSubjects = [...new Set(universities.flatMap(u => u.subjects))];
  const allLevels = [...new Set(universities.flatMap(u => u.levels))];

  // Apply filters
  useEffect(() => {
    let result = [...universities];
    
    // Budget filter
    if (budgetMin !== '') {
      result = result.filter(u => u.tuition.value >= Number(budgetMin));
    }
    if (budgetMax !== '') {
      result = result.filter(u => u.tuition.value <= Number(budgetMax));
    }
    
    // Country filter
    if (selectedCountries.length > 0) {
      result = result.filter(u => selectedCountries.includes(u.location.country));
    }
    
    // Subject filter
    if (selectedSubjects.length > 0) {
      result = result.filter(u => 
        u.subjects.some(subject => selectedSubjects.includes(subject))
      );
    }
    
    // Level filter
    if (selectedLevels.length > 0) {
      result = result.filter(u => 
        u.levels.some(level => selectedLevels.includes(level))
      );
    }
    
    setFilteredUniversities(result);
  }, [budgetMin, budgetMax, selectedCountries, selectedSubjects, selectedLevels]);

  // Handle checkbox changes
  const handleCountryChange = (country: string) => {
    setSelectedCountries(prev => 
      prev.includes(country) 
        ? prev.filter(c => c !== country) 
        : [...prev, country]
    );
  };
  
  const handleSubjectChange = (subject: string) => {
    setSelectedSubjects(prev => 
      prev.includes(subject) 
        ? prev.filter(s => s !== subject) 
        : [...prev, subject]
    );
  };
  
  const handleLevelChange = (level: string) => {
    setSelectedLevels(prev => 
      prev.includes(level) 
        ? prev.filter(l => l !== level) 
        : [...prev, level]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Find Your University</h1>
          <p className="text-gray-600 mt-2">
            Discover the perfect university for your study abroad journey
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center w-full py-2 px-4 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              <Filter className="h-5 w-5 mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
          
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block lg:w-1/4`}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                <button 
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {/* Budget Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Budget (Per Year)
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Min ($)</label>
                    <input
                      type="number"
                      value={budgetMin}
                      onChange={(e) => setBudgetMin(e.target.value ? Number(e.target.value) : '')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Max ($)</label>
                    <input
                      type="number"
                      value={budgetMax}
                      onChange={(e) => setBudgetMax(e.target.value ? Number(e.target.value) : '')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="50000"
                    />
                  </div>
                </div>
              </div>
              
              {/* Country Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Country
                </h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {allCountries.map(country => (
                    <div key={country} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`country-${country}`}
                        checked={selectedCountries.includes(country)}
                        onChange={() => handleCountryChange(country)}
                        className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={`country-${country}`} className="ml-2 text-gray-700">
                        {country}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Subject Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Subject
                </h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {allSubjects.map(subject => (
                    <div key={subject} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`subject-${subject}`}
                        checked={selectedSubjects.includes(subject)}
                        onChange={() => handleSubjectChange(subject)}
                        className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={`subject-${subject}`} className="ml-2 text-gray-700">
                        {subject.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Level Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Level</h3>
                <div className="space-y-2">
                  {allLevels.map(level => (
                    <div key={level} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`level-${level}`}
                        checked={selectedLevels.includes(level)}
                        onChange={() => handleLevelChange(level)}
                        className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={`level-${level}`} className="ml-2 text-gray-700">
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Clear Filters */}
              <button
                onClick={() => {
                  setBudgetMin('');
                  setBudgetMax('');
                  setSelectedCountries([]);
                  setSelectedSubjects([]);
                  setSelectedLevels([]);
                }}
                className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Clear Filters
              </button>
            </div>
          </div>
          
          {/* University Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredUniversities.length} of {universities.length} universities
              </p>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Sort by: Recommended</option>
                  <option>Sort by: Rank (Lowest first)</option>
                  <option>Sort by: Cost (Lowest first)</option>
                  <option>Sort by: Cost (Highest first)</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            
            {filteredUniversities.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No universities found</h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your filters to see more results
                </p>
                <button
                  onClick={() => {
                    setBudgetMin('');
                    setBudgetMax('');
                    setSelectedCountries([]);
                    setSelectedSubjects([]);
                    setSelectedLevels([]);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredUniversities.map(university => (
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
                        <div className="flex flex-wrap gap-2">
                          {university.subjects.slice(0, 3).map(subject => (
                            <span 
                              key={subject} 
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              {subject.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-lg font-bold text-gray-900">
                            {university.tuition.currency} {university.tuition.value.toLocaleString()} / {university.tuition.period}
                          </p>
                          <p className="text-sm text-gray-500">Acceptance: {university.acceptanceRate}</p>
                        </div>
                        <Link 
                          href={`/universities/${university.slug}`}
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}