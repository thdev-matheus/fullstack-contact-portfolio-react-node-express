import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../user";
import { v4 as uuid } from "uuid";

@Entity()
export class Contact {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar", nullable: false })
  name!: string;

  @Column({ type: "varchar", nullable: false })
  email1!: string;

  @Column({ type: "varchar", nullable: true })
  email2!: string;

  @Column({ type: "varchar", nullable: false })
  phone1!: string;

  @Column({ type: "varchar", nullable: true })
  phone2!: string;

  @ManyToOne((type) => User, { nullable: false })
  @JoinColumn()
  user!: User;

  constructor() {
    this.id = uuid();
  }
}
