import { useEffect, useState } from 'react';

export function useDayCard() {
  // TODO: добавить тип
  const [tasksList, setTasksList] = useState();
  const [task, setTask] = useState();

  useEffect(() => {
    // TODO: вызов всех задач
    // setTasksList(getTasksList().then((tasks) => tasks.data))
    console.log(setTasksList(undefined));
  }, []);

  const onSaveTask = (currentTask) => {
    setTask(currentTask);
  };

  return { tasksList, task, onSaveTask };
}
