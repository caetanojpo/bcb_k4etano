import { ERoles } from 'src/common/enumerators/roles.enumerator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { UserAddress } from './user-address.entity';

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

  // @Column({ name: 'address', nullable: false })
  // address: UserAddress;

  @Column({ name: 'profile_image', type: 'bytea', nullable: true })
  profileImage: Buffer;

  @Column({ name: 'role', default: 'USER' })
  role: ERoles;

  @Column({ name: 'isActive', nullable: false, default: false })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
