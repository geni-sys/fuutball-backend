import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("games")
class Games {
  @PrimaryColumn()
  id?: string;

  @Column()
  times: string;

  @Column()
  winner: string;

  @Column()
  metadata: string;

  @Column()
  twitters: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Games };
