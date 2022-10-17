import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ApiOperation, ApiPropertyOptional } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { Post as PostSchema } from './post.model'
class CreatePostsDto {
    @ApiPropertyOptional({ description: 'title', example: '标题1' })
    @IsNotEmpty({ message: '请填写标题' })
    title: string

    @ApiPropertyOptional({ description: 'content', example: '内容1' })
    @IsNotEmpty({ message: 'name should not be empty' })
    content: string
}

@ApiTags('blog')
@Controller('posts')
export class PostsController {
    constructor(
        @InjectModel('PostSchema') private readonly postModel
    ) { }

    @Get()
    @ApiOperation({ summary: 'list' })
    async index() {
        return await this.postModel.find()
    }

    @Post()
    @ApiOperation({ summary: 'create' })
    async create(@Body() createPostDto: CreatePostsDto) {
        await this.postModel.create(createPostDto)
        return {
            success: true
        }
    }

    @Get(':id')
    @ApiOperation({ summary: 'detail' })
    async detail(@Param('id') id: string) {
        return await this.postModel.findById(id)
    }

    @Put(':id')
    @ApiOperation({ summary: 'edit' })
    async updata(@Param('id') id: string, @Body() updatePostDto: CreatePostsDto) {
        await this.postModel.findByIdAndUpdate(id, updatePostDto)
        return {
            success: true
        }
    }
    @Delete(':id')
    @ApiOperation({ summary: 'delete' })
    async remove(@Param('id') id: string) {
        await this.postModel.findByIdAndDelete(id)
        return {
            success: true
        }
    }

    
}
