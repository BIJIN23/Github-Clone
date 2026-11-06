type TaskStatus = "todo" | "in-progress" | "done";
type TaskPriorities = "low" | "medium" | "high";

interface Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriorities;
  assignedTo?: number;
  createdAt: string;
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Learn React",
    description: "Learn react fundamentals",
    status: "todo",
    priority: "high",
    assignedTo: 3,
    createdAt: "2026-11-20",
  },
  {
    id: 2,
    title: "Learn Node js",
    description: "Learn Node fundamentals",
    status: "in-progress",
    priority: "high",
    assignedTo: 3,
    createdAt: "2026-11-20",
  },
  {
    id: 3,
    title: "Learn Typescript js",
    status: "in-progress",
    priority: "low",
    assignedTo: 4,
    createdAt: "2026-11-20",
  },
];

function getTaskByStatus(tasks: Task[], status: TaskStatus) {
  const filterdTask = tasks.filter((task: Task) => task.status === status);
  return filterdTask;
}
function getHighPriorityTasks(tasks: Task[]): Task[] {
  return tasks.filter((task: Task) => task.priority === "high");
}
function getTasksByAssignee(tasks: Task[], userId: number): Task[] {
  return tasks.filter((task: Task) => task.assignedTo === userId);
}

console.log(getTaskByStatus(tasks, "todo"));
console.log(getHighPriorityTasks(tasks));
console.log(getTasksByAssignee(tasks, 3));
