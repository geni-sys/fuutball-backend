import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("tags")
class Tag {
  @PrimaryColumn()
  id: string;

  @Column()
  players: string;

  @Column()
  metadata: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Tag };
