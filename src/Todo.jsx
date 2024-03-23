import React from "react";
import { ACTION } from "./LearnReducer";
function Todo({ todo, dispatch }) {
  return (
    <div
      key={todo.id}
      className="flex items-start justify-between text-white bg-black pl-4 mb-2 relative w-full min-w-[15rem]">
      {todo.isComplete ? (
        <p className="flex-1 text-left line-through py-2">{todo.name}</p>
      ) : (
        <p className="flex-1 text-left text-white py-2">{todo.name}</p>
      )}

      <button
        className=" px-4 py-2 text-white bg-black hover:bg-slate-900 "
        onClick={() =>
          dispatch({ type: ACTION.TOGGLE_TODO, payload: { id: todo.id } })
        }>
        +
      </button>
      <button
        className="px-4 py-2 text-white bg-black hover:bg-slate-900"
        onClick={() =>
          dispatch({ type: ACTION.DELETE_TODO, payload: { id: todo.id } })
        }>
        x
      </button>
    </div>
  );
}

export default Todo;
