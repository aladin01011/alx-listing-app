export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}
export interface PropertyProps {
  name: string;
  rating: number;
  address: {
    city: string;
    country: string;
  };
  image: string;
  images?: string[];
  description: string;
  category: string[];
  price: number;
  reviews: ReviewProps[];
}

export interface ReviewProps {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}
