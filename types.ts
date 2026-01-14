
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  fullBio: string;
  image: string;
  stats: {
    exp: string;
    audits: string;
    trainings: string;
  };
}

export interface PricePackage {
  name: string;
  range: string;
  features: string[];
  recommendedFor: string;
}
