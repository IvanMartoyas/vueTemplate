import http from 'axios';

const axiosInstanse = http.create({
    baseURL: "http://localhost:4000/api/"
});

export default axiosInstanse;

// axios({
//     method: 'get',
//     url: 'http://bit.ly/2mTM3nY',
//     responseType: 'stream'
//   })
//     .then(function (response) {
//       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//     });