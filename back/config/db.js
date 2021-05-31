const mongoose = require ("mongoose")

mongoose
  .connect(
    "BASE_DE_DATOS",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB CONNECT!!"))
  .catch((e) => console.log("DB NO CONNECT ERROR"));
