const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.s11qz.mongodb.net/chatAppMern?retryWrites=true&w=majority`, ()=> {
//   console.log('connected to mongodb')
// })


// mongoose.connect(
// 	process.env.MONGO_URL_NEW,
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
//     useCreateIndex: true
// 	},
// 	() => {
// 		console.log('connected to database myDb ;)');
// 	}
// );

const MONGO_URL_NEW = "mongodb+srv://realchat:HV4XhQSDjNvVDcn3@cluster0.werms.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(
	"" + MONGO_URL_NEW,
	{ },
	() => { console.log("Connected to DB"); }
  )
