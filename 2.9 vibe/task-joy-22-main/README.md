# Simple Tasks

Build a clean, simple personal Task Manager web application.

Requirements:

Add a task

Provide a text input where the user can enter a task title.

Provide an Add Task button.

Pressing Enter should also add the task.

Do not allow empty tasks.

Newly added tasks should appear immediately in the task list.

Mark a task as complete

Each task should have a checkbox or clear completion control.

Clicking it should toggle the task between Active and Completed.

Completed tasks should have a visible visual distinction, such as strikethrough text.

Filter tasks

Provide three filters:

All

Active

Completed

All shows every task.

Active shows only incomplete tasks.

Completed shows only completed tasks.

The currently selected filter should be visually clear.

UI

Create a clean, usable, modern interface.

Keep the design simple and focused on the task manager.

Make it responsive so it works on desktop and mobile screens.

Include a clear page heading such as "Task Manager".

Show a helpful empty state when there are no tasks.

Use consistent spacing, typography, buttons, inputs, and task cards.

Do not add unnecessary features such as login, authentication, databases, due dates, priorities, categories, notifications, or backend services.

Technical requirements

Build the application as a React application.

Keep the implementation self-contained and easy to run.

Use component-based structure where appropriate.

Store tasks in application state so adding, completing, and filtering tasks work correctly during the session.

The application must run without errors.

Important:
Build exactly the feature set described above. Do not add extra functionality. Generate the complete working application in one pass.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://task-joy-22.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2f7b9079-8d48-4e4f-a2f2-927be5e3841d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
