'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Globe, BookOpen, CreditCard, Calendar, Plane, Wallet, Languages, CheckCircle, FileText, ChevronDown, ChevronLeft, ChevronRightIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { universities } from '@/lib/data';

export default function Home() {
  // State for FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // State for testimonial carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Toggle FAQ accordion
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Navigate to next testimonial
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  // Navigate to previous testimonial
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get first 3 universities for preview
  const previewUniversities = universities.slice(0, 3);

  // How it works steps
  const steps = [
    { icon: BookOpen, title: 'Explore', desc: 'Browse programs worldwide' },
    { icon: CheckCircle, title: 'Pick', desc: 'Select your ideal university' },
    { icon: FileText, title: 'Apply', desc: 'Submit your application' },
    { icon: CreditCard, title: 'Funding', desc: 'Secure financial support' },
    { icon: Calendar, title: 'Prepare', desc: 'Get ready for departure' },
    { icon: Plane, title: 'Travel', desc: 'Begin your adventure' },
  ];

  // Feature tabs
  const features = [
    {
      id: 'scholarships',
      title: 'Scholarships',
      content: 'Discover funding opportunities to support your study abroad journey. From government grants to university-specific awards, find financial assistance tailored to your needs.',
      image: '/materials/scholarships.jpg'
    },
    {
      id: 'visas',
      title: 'Visas',
      content: 'Navigate the visa application process with confidence. Our guides and checklists ensure you meet all requirements and submit your documents correctly.',
      image: '/materials/visas.jpg'
    },
    {
      id: 'housing',
      title: 'Housing',
      content: 'Find the perfect accommodation for your stay. Compare dormitories, apartments, and homestays to match your budget and lifestyle preferences.',
      image: '/materials/housing.jpg'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      quote: 'BFL.pk made finding my dream university in Spain incredibly easy. Their guidance was invaluable throughout the entire process.',
      destination: 'University of Barcelona, Spain'
    },
    {
      name: 'Michael Chen',
      quote: 'Thanks to BFL.pk, I secured a full scholarship to study engineering in Germany. Their expertise saved me months of research.',
      destination: 'Technical University of Munich, Germany'
    },
    {
      name: 'Emma Wilson',
      quote: 'The personalized support I received was exceptional. They understood my goals and matched me with the perfect program.',
      destination: 'University of Melbourne, Australia'
    }
  ];

  // FAQs
  const faqs = [
    {
      question: 'How much does it cost to study abroad?',
      answer: 'Costs vary significantly depending on the country and university. On average, expect $10,000-$40,000 per year including tuition and living expenses.'
    },
    {
      question: 'Is it safe to study in another country?',
      answer: 'Most study abroad destinations are very safe, especially university campuses. We provide detailed safety information for each location.'
    },
    {
      question: 'Will my credits transfer back home?',
      answer: 'In most cases, yes. We work with universities that have established credit transfer agreements with institutions worldwide.'
    },
    {
      question: 'How long does the application process take?',
      answer: 'Typically 2-4 months. We recommend starting the process 6-8 months before your intended start date.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full viewport height */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Find Your Dream University Abroad
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              href="/universities" 
              className="inline-block bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
            >
              Find a Program
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hero Highlight Cards - Floating row */}
      <section className="relative z-20 -mt-20 md:-mt-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-40 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <Globe className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Semester under $10,000</h3>
                <Link 
                  href="/universities?budget_max=10000" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Explore options
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-40 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                <Languages className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Classes in English</h3>
                <Link 
                  href="/universities?lang=english" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Find programs
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-40 bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                <Wallet className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">No frills - just what you want</h3>
                <Link 
                  href="/universities" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Discover programs
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600">
            At BFL.pk, we believe that quality education should be accessible to everyone, regardless of their geographical boundaries. 
            We are committed to leading the way with affordable study abroad opportunities, connecting ambitious students with world-class 
            institutions that match their aspirations and budgets.
          </p>
        </div>
      </section>

      {/* University Preview Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Featured Universities</h2>
            <Link 
              href="/universities" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Universities
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewUniversities.map((university, index) => (
              <motion.div
                key={university.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{university.name}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{university.name}</h3>
                      <p className="text-gray-600">{university.location.city}, {university.location.country}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Rank #{university.ranking}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">
                      {university.tuition.currency} {university.tuition.value.toLocaleString()} / {university.tuition.period}
                    </span>
                    <Link 
                      href={`/universities/${university.slug}`} 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Carousel */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Popular Destinations</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Europe', 'Asia', 'North America', 'Oceania'].map((continent, index) => (
              <motion.div
                key={continent}
                className="relative h-64 rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">{continent}</h3>
                </div>
                <Link 
                  href={`/universities?continent=${continent.toLowerCase().replace(' ', '-')}`} 
                  className="absolute inset-0"
                >
                  <span className="sr-only">Explore {continent}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How BFL.pk Works */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How BFL.pk Works</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Student Resources</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex border-b border-gray-200">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  className={`py-4 px-6 font-medium text-sm border-b-2 transition-colors ${
                    index === 0 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {feature.title}
                </button>
              ))}
            </div>
            
            <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Scholarships</h3>
                  <p className="text-gray-600 mb-6">
                    Discover funding opportunities to support your study abroad journey. From government grants to university-specific awards, 
                    find financial assistance tailored to your needs.
                  </p>
                  <Link 
                    href="/scholarships" 
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Explore Scholarships
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="md:w-1/2 bg-gray-200 h-64 md:h-auto">
                  {/* Placeholder for image */}
                  <div className="w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Student Stories</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-xl shadow-lg p-8">
              <div className="text-center">
                <div className="text-5xl text-yellow-400 mb-4">"</div>
                <p className="text-xl text-gray-600 italic mb-6">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div>
                  <p className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].destination}</p>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon className="h-6 w-6 text-gray-600" />
              </button>
              
              {/* Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button 
                  className="flex justify-between items-center w-full p-6 bg-white rounded-lg shadow-md text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === index && (
                  <div className="bg-white rounded-b-lg p-6 shadow-md mt-0">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}