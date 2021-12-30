import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMembersTable1640892621251 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "members",
                columns: [
                    {
                        name: "member_id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: "birth_date",
                        type: "date"
                    },
                    {
                        name: "death_date",
                        type: "date"
                    },
                    {
                        name: "created_by",
                        type: "varchar"
                    },
                    {
                        name: "updated_by",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_created_by",
                        columnNames: ["created_by"],
                        referencedTableName: "users",
                        referencedColumnNames: ["user_id"]
                    },
                    {
                        name: "fk_updated_by",
                        columnNames: ["updated_by"],
                        referencedTableName: "users",
                        referencedColumnNames: ["user_id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("members");
    }

}
