import React from "react";

function Tasks({name, id, deleteTask}) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{id}</h2>
      <button onClick={() => deleteTask(id)}> X </button>
    </div>
  );
}

export default Tasks;
