import { ETransactionType } from 'src/common/enumerators/transactionType.enumerator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'budget' })
export class BudgetEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', nullable: false })
  userId: string;

  @Column({ name: 'balance' })
  balance: number;

  @Column({ name: 'balanceHistory' })
  balanceHistory: BalanceHistory[];

  @Column({ name: 'transactions' })
  transactions: Trasactions[];
}

class Trasactions {
  transaction: number;
  type: ETransactionType;
  timestamp: Date;
}

class BalanceHistory {
  balance: number;
  timestamp: Date;
}
