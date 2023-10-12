type Review = {
  user: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: Date;
};

type Product = {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  reviews: Review[];
};

export default Product;
