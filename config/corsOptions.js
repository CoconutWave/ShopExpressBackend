const allowedOrigins = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function (origin, callback) {
        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null, true);
        }else{
            console.log(origin);
            callback("CORS OPTION DOESN'T ALLOW THIS ORIGIN");
        }
    },
    credentials: true,
    optionSuccessStatus: 200
}
module.exports = corsOptions