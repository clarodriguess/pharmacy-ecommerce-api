import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";
import { Column,Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name:'tb_categoria'})
export class Categoria {

   @ApiProperty() 
    @PrimaryGeneratedColumn()
    id: number;

     @ApiProperty() 
    @Transform(({ value } : TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Length(2, 100)
    @Column({ length: 100 })
    nome: string;

     @ApiProperty() 
    @Length(2, 255)
    @Column({ length: 255, nullable: true })
    descricao: string;

        
  //relacionamento com a entidade Produto (uma categoria pode ter muitos produtos)
  @ApiProperty({ type: () => Produto })
  @OneToMany(() => Produto, (produto) => produto.categoria)
  produtos: Produto[];

}