import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id:number

    @Column({default:''})
    rut:string

    @Column({default:''})    
    nombre:string

    @Column({default:''})
    apellido_patero:string

    @Column({default:''})
    apellido_materno:string

    @Column({default:''})
    correo:string

    @Column({default:''})
    hash_pass:string

    // @Column({default:''})
    // calle:string

    // @Column({default:0})
    // numero:number
    
    // @Column({default:''})
    // poblacion:string

    // @Column({default:''})
    // ciudad:string

   @DeleteDateColumn({ nullable: true })
   deletedAt?: Date;
    
}
