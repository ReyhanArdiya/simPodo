import mongoose from "mongoose";

export interface ITodo {
	completed: boolean;
	_id: string;
	title: string;
}

const ModelSchema = new mongoose.Schema<ITodo>({
	completed : {
		type    : Boolean,
		default : false
	},
}, { strict : "throw" });

class ModelSchemaMethods {}
ModelSchema.loadClass(ModelSchemaMethods);

const Model = mongoose.model("Model", ModelSchema);

export default Model;