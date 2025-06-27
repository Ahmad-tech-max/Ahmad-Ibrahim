import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
}

export interface FAQ {
    question: string;
    answer: string;
}