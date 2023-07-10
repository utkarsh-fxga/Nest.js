import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
     get() {
        return { name: "nikalbe", email: "utkarsh@mail.com" };
    }
}
