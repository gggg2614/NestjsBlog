import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './post.model';

@Injectable()
export class PostsService {
    constructor(@InjectModel('Posts') private readonly postModel: Model<Post>) { }
    async index(){}
    async create(body){}
    async detail(id){}
    async update(id){}
    async remove(id){}

}
