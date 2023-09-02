type User = {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  createdAt: string; // You can also use Date if you're going to convert this to a Date object
  updatedAt: string; // You can also use Date if you're going to convert this to a Date object
};

export type UserResponse = {
  user: User;
};

export default User;
