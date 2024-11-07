import { Category } from '../enums/category.enums';

export class CreateTaskDto {
  idUser: number;
  title: string;
  description: string;
  category: Category;
  creationDate: Date;
  deadline: Date;
}
