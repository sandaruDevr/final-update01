export interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: 'outline' | 'gradient';
  popular?: boolean;
}