import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive, Length } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { NumericTransformer } from "../../util/numerictransformer";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: "tb_produto"}) //create table "tb_produtos"

export class Produto {
    
    @ApiProperty()
    @PrimaryGeneratedColumn() // AUTO INCREMENT
    id: number

    @ApiProperty() 
    @Transform(({ value } : TransformFnParams) => value?.trim()) 
    @IsNotEmpty() 
    @Length(5, 255, {message: 'O nome deve ter no mínimo 5 e no máximo 255 caracteres'}) 
    @Column({length: 255, nullable: false}) 
    nome: string;

     @ApiProperty() 
    @IsNumber() 
    @IsNotEmpty() 
    @IsPositive() 
    @Column({type: "decimal", precision: 10, scale: 2, transformer: new NumericTransformer()}) // DECIMAL(10,2) NOT NULL
    preco: number;

     @ApiProperty() 
    @IsNumber() 
    @IsNotEmpty()
    @Column()
    estoque: number;

    @ApiProperty() 
    @Column()
    foto: string;

    //Relacionamento many to one - um produto pertence a uma categoria, e uma categoria pode ter muitos produtos
    @ApiProperty({ type: () => Categoria }) 
    @ManyToOne(() => Categoria, (categoria) => categoria.produtos)
    categoria: Categoria; //representa a chave estrangeira - um produto pertence a uma categoria
}