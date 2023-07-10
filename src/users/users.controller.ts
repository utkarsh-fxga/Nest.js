import { Controller, Get, Param, Post, Req, Delete  } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    // constructor(private userService: UsersService){}
    @Get()
    getuser(){
        return UsersService;
    }

    @Post()
    store(@Req() req: Request){
        // console.log(req.body)
        return req.body;
    }

    @Get('/:userId')
    getUser(@Param() params : {userID: number}){
        return params;
    }

    @Delete('/:userId')
    deleteUser(@Param() params : {userID: number}){
        return params;
    }
}
