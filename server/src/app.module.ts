import { Module } from '@nestjs/common';
import {CACHE_CONFIG, CONFIG_OPTION, THROTTLER_CONFIG, TYPEORM_OPTION} from "@config/setup";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CacheModule} from "@nestjs/cache-manager";
import {ThrottlerModule} from "@nestjs/throttler";
import {AuthModule} from "@modules/auth/auth.module";
import {RecipeModule} from "@modules/recipes/recipe.module";

@Module({
  imports: [
    ConfigModule.forRoot(CONFIG_OPTION()),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: TYPEORM_OPTION,
    }),
    CacheModule.register(CACHE_CONFIG),
    ThrottlerModule.forRoot(THROTTLER_CONFIG),
    AuthModule,
    RecipeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
