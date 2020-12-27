export interface FormData {
  email: string;
  password: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image_path: string;
}

export interface NavigationRoute {
  route: {
    params: {
      id: number;
      name: string;
      price: number;
      description: string;
      imagePath: string;
      date: Date;
    };
  };
}
