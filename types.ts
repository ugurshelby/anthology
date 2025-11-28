export interface Story {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  heroImage: string;
  content: StoryContent[];
  color?: string;
}

export type StoryContent = 
  | { type: 'paragraph'; text: string }
  | { type: 'quote'; text: string; author: string }
  | { type: 'image'; src: string; caption: string; layout: 'full' | 'portrait' | 'landscape' }
  | { type: 'heading'; text: string };
