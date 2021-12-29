import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("users")
class User {
    @PrimaryColumn()
    readonly user_id: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    salt: number;

    @Column()
    updated_at: Date;

    @Column()
    created_at: Date;

    constructor() {
        if (!this.user_id) {
            this.user_id = uuid();
        }
    }
}

export { User }