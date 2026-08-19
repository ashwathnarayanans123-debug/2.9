import { useState } from "react";
import { CheckCircle2, Circle, ClipboardList } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type Filter = "all" | "active" | "completed";

const FILTERS: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
];

export function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const addTask = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: trimmed,
      completed: false,
    };

    setTasks((prev) => [newTask, ...prev]);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask();
    }
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const activeCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="min-h-screen w-full bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Task Manager
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">Stay organized, one task at a time.</p>
        </div>

        <Card className="border shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="sr-only">Add a new task</CardTitle>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Input
                type="text"
                placeholder="What needs to be done?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="h-11 flex-1"
                aria-label="Task title"
              />
              <Button
                onClick={addTask}
                disabled={!inputValue.trim()}
                className="h-11 px-6 font-semibold"
              >
                Add Task
              </Button>
            </div>
          </CardHeader>

          <CardContent className="space-y-4 pt-0">
            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Task filters">
              {FILTERS.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setFilter(value)}
                  role="tab"
                  aria-selected={filter === value}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    filter === value
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                  )}
                >
                  {label}
                </button>
              ))}

              {tasks.length > 0 && (
                <span className="ml-auto text-xs text-muted-foreground">
                  {filter === "all" && `${tasks.length} task${tasks.length === 1 ? "" : "s"}`}
                  {filter === "active" && `${activeCount} active`}
                  {filter === "completed" && `${completedCount} completed`}
                </span>
              )}
            </div>

            {tasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12 text-center">
                <ClipboardList className="mb-3 h-10 w-10 text-muted-foreground/60" />
                <p className="text-base font-medium text-foreground">No tasks yet</p>
                <p className="mt-1 max-w-xs text-sm text-muted-foreground">
                  Add your first task above and start getting things done.
                </p>
              </div>
            ) : filteredTasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12 text-center">
                {filter === "completed" ? (
                  <>
                    <Circle className="mb-3 h-10 w-10 text-muted-foreground/60" />
                    <p className="text-base font-medium text-foreground">No completed tasks</p>
                    <p className="mt-1 max-w-xs text-sm text-muted-foreground">
                      Finish a task and check it off to see it here.
                    </p>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="mb-3 h-10 w-10 text-muted-foreground/60" />
                    <p className="text-base font-medium text-foreground">All caught up!</p>
                    <p className="mt-1 max-w-xs text-sm text-muted-foreground">
                      You have no active tasks right now.
                    </p>
                  </>
                )}
              </div>
            ) : (
              <ul className="space-y-2" role="list" aria-label="Tasks">
                {filteredTasks.map((task) => (
                  <li
                    key={task.id}
                    className={cn(
                      "group flex items-center gap-3 rounded-lg border bg-card p-3 shadow-sm transition-all hover:shadow",
                      task.completed && "bg-muted/50",
                    )}
                  >
                    <Checkbox
                      id={`task-${task.id}`}
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                      aria-label={`Mark ${task.title} as ${task.completed ? "active" : "completed"}`}
                      className="mt-0.5"
                    />
                    <label
                      htmlFor={`task-${task.id}`}
                      className={cn(
                        "flex-1 cursor-pointer text-sm font-medium transition-colors",
                        task.completed
                          ? "text-muted-foreground line-through"
                          : "text-card-foreground",
                      )}
                    >
                      {task.title}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
