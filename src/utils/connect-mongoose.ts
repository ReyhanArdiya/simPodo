import mongoose from "mongoose";

const connectMongoose = async (
	connectionStr: string = process.env.MONGODB ||
		"mongodb://127.0.0.1:27017/simPodoDB"
) => {
	// Prevent multiple connections
	if (!mongoose.connections[0].readyState) {
		try {
			await mongoose.connect(connectionStr);
			console.log(`Connected to ${connectionStr}!🍃`);
		} catch (err) {
			console.log(`Error! Can't connect to ${connectionStr}!🍂`, err);
		}
		console.log("meow!!");
	}
};

export default connectMongoose;
