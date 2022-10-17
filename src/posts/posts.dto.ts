import { ApiPropertyOptional } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreatePostsDto {
    @ApiPropertyOptional({ description: 'title', example: '标题1' })
    @IsNotEmpty({ message: '请填写标题' })
    title: string

    @ApiPropertyOptional({ description: 'content', example: '内容1' })
    @IsNotEmpty({ message: 'name should not be empty' })
    content: string
}

