import mongoose from "mongoose";

const todosSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    check: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Todos = mongoose.models["Todos"] || mongoose.model("Todos", todosSchema);

export default Todos;
