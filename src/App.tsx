import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueStrip } from './components/ValueStrip';
import { ProblemSolution } from './components/ProblemSolution';
import { FeatureGrid } from './components/FeatureGrid';
import { ComplaintSection } from './components/ComplaintSection';
import { SnagSection } from './components/SnagSection';
import { WorkOrderSection } from './components/WorkOrderSection';
import { MaintenanceSection } from './components/MaintenanceSection';
import { AssetSection } from './components/AssetSection';
import { InventorySection } from './components/InventorySection';
import { InspectionSection } from './components/InspectionSection';
import { VendorSection } from './components/VendorSection';
import { AICopilotSection } from './components/AICopilotSection';
import { RoleSolutions } from './components/RoleSolutions';
import { OperationsWorkflow } from './components/OperationsWorkflow';
import { AnalyticsSection } from './components/AnalyticsSection';
import { WhyNexgenOps } from './components/WhyNexgenOps';
import { TalkToFounderSection } from './components/TalkToFounderSection';
import { BookDemoSection } from './components/BookDemoSection';
import { Footer } from './components/Footer';
import { FounderModal } from './components/FounderModal';
import { AIBotDrawer } from './components/AIBotDrawer';

export default function App() {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);
  const [isAIDrawerOpen, setIsAIDrawerOpen] = useState(false);

  const scrollToDemoForm = () => {
    const demoElement = document.getElementById('demo-form');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPlatform = () => {
    const platformElement = document.getElementById('features');
    if (platformElement) {
      platformElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFounder = () => {
    const founderElement = document.getElementById('talk-to-founder');
    if (founderElement) {
      founderElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsFounderModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200 transition-colors duration-200">
      {/* Sticky Translucent Navbar */}
      <Navbar
        onOpenFounderModal={scrollToFounder}
        onOpenDemoForm={scrollToDemoForm}
      />

      <main id="main-content">
        {/* Hero Section with Dashboard Preview */}
        <Hero
          onOpenDemoForm={scrollToDemoForm}
          onOpenFounderModal={scrollToFounder}
          onExplorePlatform={scrollToPlatform}
        />

        {/* 4-Block Value Proposition Strip */}
        <ValueStrip />

        {/* Traditional vs NexgenOps Problem-Solution Comparison */}
        <ProblemSolution />

        {/* 12 Platform Features Grid */}
        <div id="platform">
          <FeatureGrid />
        </div>

        {/* Specialized Operational Showcases */}
        <ComplaintSection />
        <SnagSection />
        <WorkOrderSection />
        <MaintenanceSection />
        <AssetSection />
        <InventorySection />
        <InspectionSection />
        <VendorSection />

        {/* In-Page AI Operations Copilot Section */}
        <AICopilotSection onOpenAIDrawer={() => setIsAIDrawerOpen(true)} />

        {/* Role-Based Stakeholder Solutions */}
        <RoleSolutions />

        {/* 7-Step Operations Progression Workflow */}
        <OperationsWorkflow />

        {/* Analytics & Executive Dashboards */}
        <AnalyticsSection />

        {/* 4 Pillars - Why NexgenOps */}
        <WhyNexgenOps />

        {/* Dedicated In-Page Talk to Founder Section */}
        <TalkToFounderSection />

        {/* High-Conversion Book a Demo Section */}
        <BookDemoSection onOpenFounderModal={scrollToFounder} />
      </main>

      {/* Comprehensive Footer with Direct Founder Contact */}
      <Footer
        onOpenFounderModal={scrollToFounder}
        onOpenDemoForm={scrollToDemoForm}
      />

      {/* Direct Founder Profile Modal */}
      <FounderModal
        isOpen={isFounderModalOpen}
        onClose={() => setIsFounderModalOpen(false)}
      />

      {/* Floating AI Assistant Trigger & Slide-out Drawer */}
      <AIBotDrawer
        isOpen={isAIDrawerOpen}
        onOpen={() => setIsAIDrawerOpen(true)}
        onClose={() => setIsAIDrawerOpen(false)}
      />
    </div>
  );
}
