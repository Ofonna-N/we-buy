import { UserResponse } from "./User";

type OrderItem = {
  _id?: string;
  name: string;
  quantity: number;
  image: string;
  price: string;
  product: string;
};

type ShippingInfo = {
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

type PaymentResult = {
  id: string;
  status: string;
  update_time: string;
  email_address: string;
};

type Order = {
  //   user: string; // assuming the mongoose ObjectId will be converted to a string
  orderItems: OrderItem[];
  shippingInfo?: ShippingInfo;
  paymentMethod: string;
  //   paymentResult?: PaymentResult;
  itemPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  //   isPaid: boolean;
  //   paidAt?: Date;
  //   isDelivered: boolean;
  //   deliveredAt?: Date;
  //   createdAt?: Date; // assuming this comes from `timestamps: true`
  //   updatedAt?: Date; // assuming this comes from `timestamps: true`
};

type OrderResponse = {
  _id: string;
  user: UserResponse["user"]; // assuming the mongoose ObjectId will be converted to a string
  orderItems: OrderItem[];
  shippingInfo: ShippingInfo;
  paymentMethod: string;
  paymentResult?: PaymentResult;
  itemPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt?: Date;
  isDelivered: boolean;
  deliveredAt?: Date;
  createdAt?: Date; // assuming this comes from `timestamps: true`
  updatedAt?: Date; // assuming this comes from `timestamps: true`
};

export type { PaymentResult, ShippingInfo, OrderItem, OrderResponse };

export default Order;
