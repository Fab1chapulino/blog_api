import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { postsProviders } from './posts.provirder';
import { PostsController } from './posts.controller';

@Module({
  providers: [PostsService, ...postsProviders],
  controllers: [PostsController],
})
export class PostsModule {}
