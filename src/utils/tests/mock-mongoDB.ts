import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

// let mongo : MongoMemoryServer;


const mockMongoDB = {
	mongo : null as MongoMemoryServer | null,

	async setUp() {
		this.mongo = await MongoMemoryServer.create();
		const url = this.mongo.getUri();

		await mongoose.connect(url);
	},

	async dropDatabase() {
		if (this.mongo) {
			await mongoose.connection.dropDatabase();
			await mongoose.connection.close();
			await this.mongo.stop();
		}
	},

	async dropCollections() {
		if (this.mongo) {
			const { collections } = mongoose.connection;

			for (const key in collections) {
				const collection = collections[key];
				await collection.deleteMany({});
			}
		}
	}
};

export default mockMongoDB;
