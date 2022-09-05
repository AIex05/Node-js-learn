const request = require("request");
const dotenv = require("dotenv").config();
const place = process.argv[2];

const options = {
    url: `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${process.env.API_KEY}`,
    method:"GET",
    json: true,
};

request(options, (error,res,body) =>{
    console.log(body.main.temp);
});

console.log(process.argv[2]);