// sort the list by either rating or app, any other value results in an error,
//  if no value provided do not perform a sort.

const express = require("express");
const morgan = require("morgan");
const playstore = require("./playstore");

const app = express();

app.use(morgan("dev"));

app.get("/apps", (req, res) => {
  const genre = req.query.genres;
  const sort = req.query.sort;
  const validSortValues = ["rating", "app"];
  if (sort && !validSortValues.includes(sort)) {
    return res
      .status(400)
      .json({ message: 'Sort field must be one of "rating" or "app"' });
  }
  let playStoreCopy = [...playstore];

  if (sort) {
    playStoreCopy.sort((a, b) => (a[sort] < b[sort] ? -1 : 1));
  }

  if (genre) {
    playStoreCopy = playStoreCopy.filter(game =>
      game.Genres.toLowerCase().includes(genre.toLowerCase())
    );
  }
  res.json(playStoreCopy);
});

app.listen(8000, () => console.log("listening on 8000"));
