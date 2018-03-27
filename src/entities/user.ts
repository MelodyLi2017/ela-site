import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class User {

  @PrimaryColumn()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

}
