export type Provider = {
  id: number;
  name: string;
  address: {
    city: string;
    line: string;
    zipCode: string;
  };
  contact: {
    email: string;
    phone: number;
  };
  services: string[];
};
