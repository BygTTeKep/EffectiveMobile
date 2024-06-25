import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: '20' })
  login: number;
  @Column({ type: 'varchar', length: '255' })
  password: string;
  @Column({ type: 'varchar', length: '25' })
  email: string;
  @Column({ type: 'timestamp' })
  date_created: string;
}
