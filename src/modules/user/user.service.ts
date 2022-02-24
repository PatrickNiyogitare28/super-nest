import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/creat-user.dto';
import { UserEntity } from './users.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}
    /*
     @role saves a new user
     @param CreateUserDto
     @return User
    */
    public async save(createUserDto: CreateUserDto)  {
        return await this.userRepository.save(createUserDto);
    }
}
