import {
    Entity, 
    Column,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    location: string;

    @Column()
    category: string;
}