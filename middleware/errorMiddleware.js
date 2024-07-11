const errorMiddleware = (err, req, res, next) => {
    console.log('this is an error middleware');
}

module.exports = errorMiddleware;