export interface FAQ {
  question: string;
  answer: string;
  keywords: string[];
}

export interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}