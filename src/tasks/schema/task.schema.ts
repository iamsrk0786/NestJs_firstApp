import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//Defines a type: Combines the Task class and Mongoose's Document interface.
//Ensures the model inherits Mongoose features like .save() and database-related methods.

export type TaskDocument = Task & Document; //Document: Extends the Mongoose model, adding database functionality.

@Schema()
//Defines the Task class as a Mongoose schema: The @Schema() decorator tells NestJS that this class will represent a MongoDB collection.
export class Task {
  @Prop({ required: true }) //Prop: Used to define properties in a Mongoose schema.
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, default: 'low' })
  priority: 'low' | 'medium' | 'high';

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ required: true })
  userId: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task); //SchemaFactory: Converts a class into a Mongoose schema.Enables database operations like querying, saving, and updating documents.
