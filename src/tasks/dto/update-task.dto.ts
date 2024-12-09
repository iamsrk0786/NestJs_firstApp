import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}

// import { IsOptional, IsNotEmpty, IsIn } from 'class-validator';

// export class UpdateTaskDto {
//   @IsOptional()
//   @IsNotEmpty()
//   title?: string;

//   @IsOptional()
//   @IsNotEmpty()
//   description?: string;

//   @IsOptional()
//   @IsIn(['low', 'medium', 'high'])
//   priority?: 'low' | 'medium' | 'high';
// }
