type Todo = {
  title: string;
  description: string;
  completed: boolean;
};
// Readonly - Make all properties in T readonly
const todo: Readonly<Todo> = {
  title: 'Watch Dark again',
  description: 'Remenber for details',
  completed: false,
};

// Patial - Make all propries in T optional
const todo2: Partial<Todo> = {
  title: 'Watch Ragnarok',
  completed: false;
};

// Pick - Get type-specific properties
type TodoStatus = Pick<Todo, 'completed'>

const todo3: TodoStatus = {
  completed: false
};

// Omit - Removing type-specific properties
type TodoPreview = Omit<Todo, 'completed'>

const todo4: TodoPreview = {
  title: 'Watch The Seven Dadly sins again',
  description: 'Anything text'
};