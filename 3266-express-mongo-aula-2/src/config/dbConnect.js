import mongoose, {mongo} from "mongoose";

async function connectBD(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    //variavel de ambiente, para proteger vem do dotenv
    return mongoose.connection;
}

export default connectBD;