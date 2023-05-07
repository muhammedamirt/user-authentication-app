// importing express modules here for create server
import Express from "express";
import bodyParser from "body-parser";

// importing dotenv modules here for .env compatibility
import { config } from "dotenv";
//env configuration
config();

// setting important variables
const app = Express();
const PORT = process.env.PORT;

// importing cors for give access to other resources
import cors from "cors";
// Allow requests from localhost:3000
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// importing routes
import userAuth from "./routes/userAuth.js";

// import database connection function
import { connectDatabase } from "./config/connection.js";

// importing passport
import passport from "passport";
import passportJWT from "passport-jwt";

//setting body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Secret key for JWT
const secretKey = process.env.JWT_SECRET;

// Configuration for Passport JWT strategy
const jwtOptions = {
  jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey,
};

passport.use(
  new passportJWT.Strategy(jwtOptions, (payload, done) => {
    User.findOne({ email: payload.email }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  })
);

// using the userAuth route here
app.use(userAuth);

// connecting to the database
connectDatabase();

// server port setting here
app.listen(PORT, () => {
  console.log("server started");
});
