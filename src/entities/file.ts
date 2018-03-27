import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany,
  Index, JoinColumn, ManyToOne
} from "typeorm";

import { Edit } from "./edit";

@Entity()
@Index((file: File) => [file.language, file.dateCreated])
export class File {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  language: string;

  @Column()
  speaker: string;

  @Column()
  path: string;

  @CreateDateColumn()
  @Index()
  dateCreated: Date;

  /* One file has a single currentEdit, each edit is the currentEdit of 0 or 1 files */
  @ManyToOne(() => Edit, edit => edit.file, { cascadeAll: true })
  @JoinColumn()
  currentEdit: Edit;

  /* One file has many edits, each edit belongs to 1 file */
  @OneToMany(() => Edit, edit => edit.file, { cascadeInsert: true, cascadeUpdate: true })
  edits: Edit[];

}
