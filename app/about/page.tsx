'use client';

import Link from 'next/link';
import { ArrowLeft, Users, Target, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Ahmed Raza',
      role: 'Founder & CEO',
      image: '/materials/team-ahmed.jpg',
      bio: 'Former international student with 15 years of experience in education consulting.'
    },
    {
      name: 'Fatima Khan',
      role: 'Director of Operations',
      image: '/materials/team-fatima.jpg',
      bio: 'Education policy expert with a focus on making study abroad accessible.'
    },
    {
      name: 'Usman Ali',
      role: 'Lead Advisor',
      image: '/materials/team-usman.jpg',
      bio: 'Alumni of top UK universities with expertise in scholarship acquisition.'
    },
    {
      name: 'Ayesha Siddiqui',
      role: 'Student Success Manager',
      image: '/materials/team-ayesha.jpg',
      bio: 'Dedicated to supporting students throughout their study abroad journey.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Student-First Approach',
      description: 'Everything we do is centered around student success and wellbeing.'
    },
    {
      icon: Target,
      title: 'Precision Matching',
      description: 'We connect students with programs that truly align with their goals.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We partner only with accredited institutions and verified programs.'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Creating networks that last beyond graduation.'
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
      
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Our Story</h1>
            <p className="text-xl">
              Empowering students to pursue world-class education beyond borders since 2015.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              At BFL.pk, we believe that quality education should be accessible to everyone, 
              regardless of their geographical boundaries. We are committed to leading the way 
              with affordable study abroad opportunities, connecting ambitious students with 
              world-class institutions that match their aspirations and budgets.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become the most trusted partner for students seeking international education, 
                  breaking down barriers and creating pathways to global opportunities.
                </p>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                <p className="text-gray-600">
                  We are committed to transparency, integrity, and student success. Our services 
                  are designed to empower students with the knowledge and tools they need to 
                  make informed decisions about their future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Meet Our Team</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Passionate professionals dedicated to making your study abroad dreams a reality.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their futures with our help.
          </p>
          <Link 
            href="/universities" 
            className="inline-block bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-600 transition duration-300"
          >
            Find Your Program
          </Link>
        </div>
      </div>
    </div>
  );
}