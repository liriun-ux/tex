/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BlueprintViewer } from './components/BlueprintViewer';
import { CourseCatalog } from './components/CourseCatalog';
import { FabricCalculator } from './components/FabricCalculator';
import { AtelierMethodology } from './components/AtelierMethodology';
import { CourseDetailModal } from './components/CourseDetailModal';
import { InquiryModal } from './components/InquiryModal';
import { Footer } from './components/Footer';
import { Course } from './types';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryCourseTitle, setInquiryCourseTitle] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (courseTitle?: string) => {
    setInquiryCourseTitle(courseTitle);
    setIsInquiryOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#1C1A18] flex flex-col font-sans selection:bg-[#EAE4D8] selection:text-[#1A1816]">
      {/* 3-Zone Top Navigation Contract */}
      <Header onOpenInquiry={handleOpenInquiry} />

      {/* Main Content with generous vertical breathing room between sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreCourses={() => scrollToSection('cursos')}
          onViewBlueprints={() => scrollToSection('planos')}
        />

        {/* Interactive Cutting Blueprint Studio (Planos de Corte) */}
        <BlueprintViewer />

        {/* Specialized Courses Catalog */}
        <CourseCatalog
          onSelectCourse={(course) => setSelectedCourse(course)}
          onOpenInquiry={(title) => handleOpenInquiry(title)}
        />

        {/* Fabric Calculator and Yield Optimization Tool */}
        <FabricCalculator />

        {/* Atelier Methodology & Craft Precision */}
        <AtelierMethodology />
      </main>

      {/* Modals & Dialogs with zero solid borders & elevated shadows */}
      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={(title) => handleOpenInquiry(title)}
      />

      <InquiryModal
        isOpen={isInquiryOpen}
        preselectedCourse={inquiryCourseTitle}
        onClose={() => setIsInquiryOpen(false)}
      />

      {/* Quiet, refined footer */}
      <Footer />
    </div>
  );
}
