import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("members")
class Member {
    @PrimaryColumn()
    readonly member_id: string;

    @Column()
    name: string;

    @Column()
    birth_date: Date;

    @Column()
    death_date: Date;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    created_by: string;

    @Column()
    updated_by: string;

    constructor() {
        if (!this.member_id) {
            this.member_id = uuid();
        }
    }
}

export { Member }