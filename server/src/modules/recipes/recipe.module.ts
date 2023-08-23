import { Module } from '@nestjs/common';
import {RecipeController} from "./recipe.controller";
import {RecipeService} from "./recipe.service";
import {S3Service} from "@providers/aws/s3/s3.service";

@Module({
  controllers: [RecipeController],
  providers: [RecipeService, S3Service]
})
export class RecipeModule {}
