function loop() {
    db.sequelize.sync().then((onFulfilled) => {
        alphavantage.loop();
        iex.data('msft').then((asdf) => {
          console.log(asdf);
        });
    });
}

module.exports = {
    loop: loop
}