import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UsersModule } from './users/users.module';
import { UsersController } from "./users/users.controller";


@Module({
    controllers:[AppController, UsersController,],
    imports: [UsersModule]
})
export class AppModule{

};