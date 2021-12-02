import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMembersTable1638405699524 implements MigrationInterface {

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
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
