import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("members")
class Member {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    birthday: Date;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Member }