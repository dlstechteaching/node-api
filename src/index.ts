import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {

    const MONGO_URI = 'mongodb://127.0.0.1:27017/';

    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Connected to mongoDB!');

    } catch (err) {
        console.error(err);
    }
    app.listen(3000, () => {
        console.log('Listening on port 3000!');
    });
};

start();