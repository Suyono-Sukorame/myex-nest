import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    createUs(@Body() body: CreateUserDto) {
        return this.usersService.create(body.name, body.email, body.password);
    }

    @Get('/id')

    findUser(@Param('id') id: string) {
        return this.usersService.findOneBy(parseInt(id));
    }
}