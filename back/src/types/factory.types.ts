import { ObjectId } from "mongodb";

export interface Factory {
  name: string;
  lvl: number;
  _id: ObjectId;
  production: number;
  price: number;
  userID: string;
}

export interface CreateFactory {
  name: string;
  lvl: number;
  _id: ObjectId;
  production: number;
  price: number;
  userID: string;
}
