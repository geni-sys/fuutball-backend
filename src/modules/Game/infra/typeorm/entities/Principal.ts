import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("principal")
class Principal {
  @PrimaryColumn()
  id: string;

  @Column()
  game: string;

  // data como Principal
  @Column()
  onWhatDate: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Principal };
