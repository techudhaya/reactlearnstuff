import { useState, useEffect } from 'react';
import './Todolist.css';

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    // Retrieve todos from localStorage, or return an empty array if none are found
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const clearList = () => {
    setTodos([])
    localStorage.setItem('todos', '[]') 
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const currentTime = new Date();
      const todo = { value: inputValue, timestamp: currentTime.toLocaleDateString() };
      setTodos([...todos, todo]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
      <>
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                    <img src="https://cdn-icons-png.freepik.com/256/138/138849.png?semt=ais_hybrid" alt="Icon" className="h-8 w-8" />
                </div>
                <div className="flex-grow text-center">
                    <h1 className="text-xl font-bold">Daily Things to do Manager</h1>
                </div>
                <button 
                  type="button" 
                  onClick={clearList}  
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Clear
              </button>
            </div>
        </header>     
        <div className="container mx-auto p-4 rounded border mt-32">
          <h2 className="heading">Todo List</h2>

          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Add</label>
          <div className="relative">
            <input 
              id="default-search" 
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleAddTodo();
                }
              }}
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your todo item..."
            />
            <button 
              type="button" 
              onClick={handleAddTodo}  
              className="text-white absolute right-2.5 bottom-2.5 bg-purple-400 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-600 dark:focus:ring-purple-700"
            >
              Add
            </button>
          </div>

          <ul role="list" className="divide-y divide-gray-100">
            {todos.map((todo, index) => (
              <li key={index} className="flex justify-between gap-x-6 py-5 border-solid">
                <div className="flex min-w-0 gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">You</p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">{todo.value}</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">added at <time dateTime="2023-01-23T13:23Z">{todo.timestamp}</time></p>
                </div>
                <button onClick={() => handleDeleteTodo(index)} className="deleteButton">
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
  );
};

export default TodoList;
