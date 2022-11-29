import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Contact } from "../contacts";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column({ type: "varchar", nullable: false })
  fullName!: string;

  @Column({ type: "varchar", nullable: false, unique: true })
  email1!: string;

  @Column({ type: "varchar", nullable: false })
  password!: string | null;

  @Column({ type: "varchar", nullable: true })
  email2!: string | null;

  @Column({ type: "varchar", nullable: false })
  phone1!: string;

  @Column({ type: "varchar", nullable: true })
  phone2!: string | null;

  @OneToMany((type) => Contact, (contact) => contact.user, { eager: true })
  contacts!: Contact[];

  constructor() {
    this.id = uuid();
  }
}
