import { Type } from 'class-transformer';
import { IsEnum, ValidateNested } from 'class-validator';
import { ERoles } from 'src/common/enumerators/roles.enumerator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'firstName', length: 40, nullable: false })
  firstName: string;

  @Column({ name: 'lasName', length: 60, nullable: false })
  lastName: string;

  @Column({ name: 'email', length: 70, nullable: false })
  email: string;

  @Column({ name: 'password', length: 366, nullable: false })
  password: string;

  @Column({ name: 'birth', nullable: false })
  birth: Date;

  @Column({ name: 'address', nullable: false })
  @ValidateNested()
  @Type(() => Address)
  address: Address;

  @Column({ name: 'role', default: 'USER' })
  @IsEnum(ERoles, {
    message: "The specified Role doesn't correspond to possible values!",
  })
  role: ERoles;

  @Column({ name: 'isActive', nullable: false, default: false })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}

class Address {
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
}
