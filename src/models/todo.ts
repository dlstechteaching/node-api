import mongoose from 'mongoose';

// An interface that describes the properties
// that are required to create a new Todo
interface TodoAttrs {
  title: string,
  userId: string,
  completed: boolean
}

// An interface that describes the properties
// that a Todo Document has
interface TodoDoc extends mongoose.Document {
  title: string,
  userId: string,
  completed: boolean
}

// An interface that describes the properties
// that a Todo Model has
interface TodoModel extends mongoose.Model<TodoDoc> {
  build(attrs: TodoAttrs): TodoDoc;
}

// To use more mongoose Type follow : 
// https://mongoosejs.com/docs/schematypes.html
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
});

todoSchema.statics.build = (attrs: TodoAttrs) => {
  return new Todo(attrs);
};

const Todo = mongoose.model<TodoDoc, TodoModel>('Todo', todoSchema);

export { Todo };