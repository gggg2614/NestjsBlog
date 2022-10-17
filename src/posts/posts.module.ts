import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post } from './post.model';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';


@Module({
    imports: [
        MongooseModule.forFeature([{name:'Posts',schema:Post}])
    ],
    controllers: [PostsController],
    providers: [PostsService]
})
export class PostsModule { }

export { Post };
