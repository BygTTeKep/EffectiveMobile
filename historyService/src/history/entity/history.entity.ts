import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'integer' })
  user_id: number;
  @Column({ type: 'text' })
  action: string;
  @Column({ type: 'timestamp' })
  date_action: string;
}
