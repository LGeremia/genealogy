import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { User } from "./User";

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

    @ManyToOne(() => User)
    @JoinColumn({ name: "created_by" })
    @JoinColumn({ name: "updated_by" })
    user: User;

    constructor() {
        if (!this.member_id) {
            this.member_id = uuid();
        }
    }
}

export { Member }