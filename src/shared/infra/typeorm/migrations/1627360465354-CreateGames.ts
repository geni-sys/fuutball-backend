import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateGames1627360465354 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "games",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "times",
            type: "varchar",
          },
          {
            name: "winner",
            type: "varchar",
          },
          {
            name: "metadata",
            type: "varchar",
          },
          {
            name: "twitters",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("games");
  }
}
