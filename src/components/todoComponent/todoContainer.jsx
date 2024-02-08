import React, { useEffect, useState } from "react";
import TodoComponent from "./todoComponent";

const TodoContainer = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);
  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  function deleteComponent(title) {
    let taskComponentArr = JSON.parse(localStorage.getItem("task"));
    delete taskComponentArr[title];

    localStorage.setItem("task", JSON.stringify(taskComponentArr));
    let newdata = taskList.filter((element) => title !== element.title);
    setTaskList(newdata);
  }

  return (
    <div className="p-8 grid grid-cols-4 gap-8 mid-desktop:grid-cols-3 tablet:grid-cols-2 large-mobile:grid-cols-1 overflow-auto">
      {taskList.map((element) => (
        <TodoComponent
          title={element.title}
          task={element.task}
          key={element.key}
          deleteComponent={deleteComponent}
        />
      ))}
    </div>
  );
};

export default TodoContainer;