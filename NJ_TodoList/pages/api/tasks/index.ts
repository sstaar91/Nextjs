import dbConnect from "@/db/dbConnect";
import Todos from "@/db/models/todos";

export default async function handler(req: any, res: any) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      const tasks = await Todos.find();
      res.send(tasks);
      break;

    case "POST":
      const newTasks = await Todos.create(req.body);
      res.status(201).send(newTasks);
      break;

    default:
      res.status(404).send();
  }
}
