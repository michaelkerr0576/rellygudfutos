const path = require("path");

module.exports = {
  //npm run buid - deployment
  outputDir: path.resolve(__dirname, "../server/public"),
  //devServer: {
    //proxy: "https://rellygudfutos.herokuapp.com/"
    //historyApiFallback: true,
    // contentBase: "./",
    // hot: true
  //}
};
