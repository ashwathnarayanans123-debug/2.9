import { createFileRoute } from "@tanstack/react-router";

import { TaskManager } from "@/components/task-manager";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Task Manager" },
      { name: "description", content: "A clean, simple personal task manager to stay organized." },
      { property: "og:title", content: "Task Manager" },
      {
        property: "og:description",
        content: "A clean, simple personal task manager to stay organized.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return <TaskManager />;
}
