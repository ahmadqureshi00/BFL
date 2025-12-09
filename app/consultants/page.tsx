'use client';

import ConsultantCard from '@/components/features/ConsultantCard';

export default function ConsultantsPage() {
  // Mock data - in a real app this would come from an API
  const consultants = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'UK University Applications',
      rating: 4.8,
      reviewCount: 124,
      successRate: 92,
      bio: 'Specialized in Oxford and Cambridge applications with 10+ years of experience. Former admissions officer.',
      profileImage: '',
    },
    {
      id: '2',
      name: 'Prof. Michael Chen',
      specialty: 'STEM Programs USA',
      rating: 4.9,
      reviewCount: 89,
      successRate: 87,
      bio: 'Expert in engineering and computer science programs across top US universities. MIT alumnus.',
      profileImage: '',
    },
    {
      id: '3',
      name: 'Ms. Emma Wilson',
      specialty: 'Canadian University Admissions',
      rating: 4.7,
      reviewCount: 156,
      successRate: 85,
      bio: 'Specialized in Canadian university applications with focus on scholarships and financial aid.',
      profileImage: '',
    },
    {
      id: '4',
      name: 'Dr. James Rodriguez',
      specialty: 'European Universities',
      rating: 4.6,
      reviewCount: 98,
      successRate: 90,
      bio: 'Expert in German, French, and Dutch university applications. PhD from Heidelberg University.',
      profileImage: '',
    },
    {
      id: '5',
      name: 'Ms. Priya Sharma',
      specialty: 'Australian & New Zealand',
      rating: 4.9,
      reviewCount: 76,
      successRate: 88,
      bio: 'Specialized in applications to top universities in Australia and New Zealand with focus on MBA programs.',
      profileImage: '',
    },
    {
      id: '6',
      name: 'Mr. David Kim',
      specialty: 'Medical School Applications',
      rating: 4.8,
      reviewCount: 65,
      successRate: 91,
      bio: 'Expert in medical school applications worldwide. Former admissions committee member.',
      profileImage: '',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Find the Perfect Educational Consultant
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Connect with verified experts who can guide you through your study abroad journey
            </p>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-lg font-medium text-gray-900">
                Showing {consultants.length} consultants
              </h2>
            </div>
            <div>
              <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                <option>Sort by: Highest Rated</option>
                <option>Sort by: Most Reviews</option>
                <option>Sort by: Success Rate</option>
                <option>Sort by: Newest</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {consultants.map((consultant) => (
              <ConsultantCard
                key={consultant.id}
                id={consultant.id}
                name={consultant.name}
                specialty={consultant.specialty}
                rating={consultant.rating}
                reviewCount={consultant.reviewCount}
                successRate={consultant.successRate}
                bio={consultant.bio}
                profileImage={consultant.profileImage}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{' '}
                  <span className="font-medium">24</span> results
                </p>
              </div>
              <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  >
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                    ...
                  </span>
                  <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    9
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    10
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}