'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function ConsultantProfilePage() {
  const params = useParams();
  const consultantId = params.id;

  // Mock data - in a real app this would come from an API
  const consultant = {
    id: consultantId,
    name: 'Dr. Sarah Johnson',
    specialty: 'UK University Applications',
    rating: 4.8,
    reviewCount: 124,
    successRate: 92,
    bio: 'Specialized in Oxford and Cambridge applications with 10+ years of experience. Former admissions officer at Oxford University. Helped over 500 students secure admission to top UK universities.',
    yearsOfExperience: 10,
    languages: ['English', 'French', 'Spanish'],
    education: [
      { degree: 'PhD in Education', institution: 'Oxford University', year: '2010' },
      { degree: 'MA in International Relations', institution: 'Cambridge University', year: '2006' },
      { degree: 'BA in Psychology', institution: 'University of Edinburgh', year: '2004' },
    ],
    services: [
      'University Selection',
      'Application Review',
      'Personal Statement Editing',
      'Interview Preparation',
      'Visa Guidance',
    ],
    reviews: [
      {
        id: 1,
        name: 'Alex Johnson',
        rating: 5,
        date: '2023-05-15',
        comment: 'Dr. Johnson helped me get into my dream program at Oxford. Her insights were invaluable!',
      },
      {
        id: 2,
        name: 'Maria Garcia',
        rating: 5,
        date: '2023-04-22',
        comment: 'Professional, knowledgeable, and responsive. Highly recommend her services.',
      },
      {
        id: 3,
        name: 'James Wilson',
        rating: 4,
        date: '2023-03-10',
        comment: 'Great consultant with excellent expertise. Helped me navigate the complex UK application process.',
      },
    ],
  };

  // Render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`h-5 w-5 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Back button */}
          <div className="mb-6">
            <Link
              href="/consultants"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Consultants
            </Link>
          </div>

          {/* Consultant Profile */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48" />
                </div>
                <div className="md:w-3/4 md:pl-6">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">{consultant.name}</h1>
                      <p className="mt-1 text-lg text-blue-600">{consultant.specialty}</p>
                      
                      <div className="mt-4 flex items-center">
                        <div className="flex">
                          {renderStars(consultant.rating)}
                        </div>
                        <span className="ml-2 text-gray-600">
                          {consultant.rating} ({consultant.reviewCount} reviews)
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0">
                      <Link
                        href="#booking"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Book Consultation
                      </Link>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-blue-700">{consultant.successRate}%</p>
                      <p className="text-sm text-gray-600">Success Rate</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-green-700">{consultant.yearsOfExperience}+</p>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-yellow-700">100%</p>
                      <p className="text-sm text-gray-600">Response Rate</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-purple-700">24h</p>
                      <p className="text-sm text-gray-600">Avg. Response Time</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-900">About</h2>
                    <p className="mt-2 text-gray-600">{consultant.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services and Languages */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">Services Offered</h3>
              </div>
              <div className="border-t border-gray-200">
                <ul className="divide-y divide-gray-200">
                  {consultant.services.map((service, index) => (
                    <li key={index} className="px-6 py-4">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-3 text-gray-700">{service}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">Languages Spoken</h3>
              </div>
              <div className="border-t border-gray-200">
                <ul className="divide-y divide-gray-200">
                  {consultant.languages.map((language, index) => (
                    <li key={index} className="px-6 py-4">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                        <span className="ml-3 text-gray-700">{language}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium text-gray-900">Education</h3>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {consultant.education.map((edu, index) => (
                  <li key={index} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{edu.degree}</p>
                        <p className="text-sm text-gray-500">{edu.institution}</p>
                      </div>
                      <div className="text-sm text-gray-500">{edu.year}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Section */}
          <div id="booking" className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium text-gray-900">Book a Consultation</h3>
              <p className="mt-1 text-sm text-gray-500">
                Schedule a session with {consultant.name} to discuss your study abroad plans
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-md font-medium text-gray-900 mb-4">Available Time Slots</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'].map((time, index) => (
                      <button
                        key={index}
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-md font-medium text-gray-900 mb-4">Booking Form</h4>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                        Select Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                        Select Time
                      </label>
                      <select
                        id="time"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option>Select a time slot</option>
                        {['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'].map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Tell us about your study abroad goals..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Request Booking
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Reviews</h3>
                <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
                  Write a Review
                </button>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {consultant.reviews.map((review) => (
                  <li key={review.id} className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                      <span className="ml-2 text-gray-600">{review.date}</span>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium text-gray-900">{review.name}</p>
                      <p className="mt-1 text-sm text-gray-600">{review.comment}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}