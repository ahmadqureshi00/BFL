'use client';

import { Suspense } from 'react';
import UniversitiesClient from './UniversitiesClient';

export default function UniversitiesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <UniversitiesClient />
    </Suspense>
  );
}
