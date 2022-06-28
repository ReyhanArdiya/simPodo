import mongoose from "mongoose";
import type { Todo } from "./interfaces/todo.interface";

const ModelSchema = new mongoose.Schema<Todo>({
	completed : {
		type    : Boolean,
		default : false
	},
}, { strict : "throw" });

class ModelSchemaMethods {}
ModelSchema.loadClass(ModelSchemaMethods);

const Model = mongoose.model("Model", ModelSchema);

export default Model;