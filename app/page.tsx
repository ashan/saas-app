import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { recentSessions } from '@/constants';
import React from 'react';

const HomePage = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Comapnions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          subject="science"
          topic="Neural Network of the Brain"
          duration={45}
          color="#ffda6a"
        />
        <CompanionCard
          id="456"
          name="Countsy the Number Wizard"
          subject="maths"
          topic="Derivatives and Integrals"
          duration={30}
          color="#b050af"
        />
        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          subject="language"
          topic="English Literature"
          duration={30}
          color="#bde7ff"
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames='w-2/3 max-lg:w-full'
        />
        <CTA />
      </section>
    </main>
  );
};

export default HomePage;
