/*const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const colors = require("colors");

//const mongooseURI = require("./config/keys").mongoURI;

const userRoutes = require("./routes/user");
const shopRoutes = require("./routes/shop");
const nodemon = require("nodemon");

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "images")));

// Route setup
app.use("/user", userRoutes);
app.use("/shop", shopRoutes);

// Database connection

mongoose.connect("mongodb+srv://bhekanimasinga:m53akIHxLOiMxL4j@ecommercy.dj2hw9z.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })

  .then(() => {
    const port = process.env.PORT || 5000;
    const server = app.listen(port, () => {
      console.log("Server running on port".cyan, colors.yellow(port));
    });
    console.log("\nConnected to".cyan, "ng-market".magenta, "database".cyan);
  })
  .catch((err) => {
    console.error("Error connecting to database".red, err);
    // Gracefully exit the process on database connection error
    process.exit(1);
  });
*/

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const colors = require("colors");

const mongooseURI = require("./config/keys").mongoURI;

const userRoutes = require("./routes/user");
const shopRoutes = require("./routes/shop");

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "images")));

// Route setup
app.use("/user", userRoutes);
app.use("/shop", shopRoutes);

// Database connection
mongoose.connect(mongooseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })

  .then(() => {
    const port = process.env.PORT || 5000;
    const server = app.listen(port, () => {
      console.log("Server running on port".cyan, colors.yellow(port));
    });
    console.log("\nConnected to".cyan, "ng-market".magenta, "database".cyan);
  })
  .catch((err) => {
    console.error("Error connecting to database".red, err);
    // Gracefully exit the process on database connection error
    process.exit(1);
  });