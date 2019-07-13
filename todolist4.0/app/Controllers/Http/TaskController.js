"use strict";

const Task = use("App/Models/Task");

class TaskController {
  async index({ view }) {
    const tasks = await Task.all();

    
    return view.render("task", {
      title: "Latest tasks",
      tasks: tasks.toJSON()
    });
  }
}

module.exports = TaskController;
