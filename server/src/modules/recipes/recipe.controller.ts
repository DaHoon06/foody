import { Controller, Post, Body, Patch, Get } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { ApiHeaders, ApiOperation, ApiTags } from '@nestjs/swagger';
import {FindRecipeDto} from "@modules/recipes/dto/find-recipe.dto";

@ApiTags('recipe')
@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get('/random-recipes')
  @ApiOperation({summary: '랜덤으로 추천 레시피 조회 API'})
  private async getRandomRecipes(): Promise<FindRecipeDto[] | string> {
    return this.recipeService.findAllRandomRecipes();
  }
}
