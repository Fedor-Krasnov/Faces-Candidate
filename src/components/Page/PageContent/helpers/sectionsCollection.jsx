import React from 'react';
import { sectionTypeToComponentMap } from '../../../sections/sections';

export const sectionsCollection = (sections) =>
  sections.map(({ content, type }) => {
    const PageSection = sectionTypeToComponentMap[type];

    if (!PageSection) {
      console.warn(`Unknown section type ${type}`);

      return null;
    }

    return (
      <section key={type}>
        <PageSection content={content} />
      </section>
    );
  });
