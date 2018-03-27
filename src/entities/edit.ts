import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Index,
  JoinColumn, ManyToOne} from "typeorm";

import {File} from './file';

@Entity()
@Index((edit: Edit) => [edit.file, edit.dateCreated])
export class Edit {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  transcription: string;

  @Column()
  status: string;

  @CreateDateColumn()
  dateCreated: Date;

  /* One file has many edits, each edit belongs to 1 file */
  @ManyToOne(() => File, file => file.edits, {cascadeAll: true})
  @JoinColumn()
  file: File;

}
