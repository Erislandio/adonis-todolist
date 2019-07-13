"use strict";

class TaskController {
  index({ view }) {
    const tasks = [
      {
        title: "Task 1",
        body: "This is body 1"
      },
      {
        title: "Task 2",
        body: "This is body 1"
      },
      {
        title: "Task 3",
        body: "This is body 1"
      },
      {
        title: "Task 4",
        body: "This is body 1"
      },
      {
        title: "Task 1",
        body: "This is body 1"
      }
    ];

    return view.render("task", {
      title: "Your tasks",
      tasks: tasks
    });
  }
}

module.exports = TaskController;
