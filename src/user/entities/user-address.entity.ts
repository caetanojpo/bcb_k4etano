import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export class UserAddress {
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
}
