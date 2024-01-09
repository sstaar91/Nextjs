import dbConnect from "@/db/dbConnect";
import Todos from "@/db/models/todos";

export default async function handler(req: any, res: any) {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const tasks = await Todos.findById(id);
      res.send(tasks);
      break;

    case "PATCH":
      const updateTasks = await Todos.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.send(updateTasks);
      break;

    case "POST":
      res.status(201).send({ ...req.body, id });
      break;

    case "DELETE":
      await Todos.findByIdAndDelete(id);
      res.status(204).send();
      break;

    default:
      res.status(404).send();
  }
}
