'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: December 1, 2025</p>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using the BFL.pk website and services, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
              from using or accessing this site.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 mb-4">
              BFL.pk provides educational consulting services to assist students in researching and applying to 
              international universities. Our services include but are not limited to university research, application 
              guidance, and scholarship information.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              Users are responsible for maintaining the confidentiality of their account and password and for 
              restricting access to their computer. Users agree to accept responsibility for all activities that 
              occur under their account or password.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All content included on this site, such as text, graphics, logos, button icons, images, audio clips, 
              digital downloads, data compilations, and software, is the property of BFL.pk or its content suppliers 
              and protected by international copyright laws.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              BFL.pk shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting 
              from your access to or use of or inability to access or use the service.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What 
              constitutes a material change will be determined at our sole discretion. By continuing to access or 
              use our service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These Terms shall be governed and construed in accordance with the laws of Pakistan, without regard 
              to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will 
              not be considered a waiver of those rights.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-600 mb-4">
              BFL.pk<br />
              Email: info@bfl.pk<br />
              Phone: +92 300 1234567<br />
              Address: 123 Education Street, Karachi, Pakistan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}