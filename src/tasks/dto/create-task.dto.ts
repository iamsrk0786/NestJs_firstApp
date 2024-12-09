import { IsNotEmpty, IsIn } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsIn(['low', 'medium', 'high'])
  priority: 'low' | 'medium' | 'high';
}
