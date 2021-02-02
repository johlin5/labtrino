const http = require('http');
const axios = require('axios')


//handle server requests and send response
const server = http.createServer((req, res) => {
    //console.log(req.headers)
    if (req.url.includes('/artist/')) {
        processData(req.url)
        .then(result => res.end(result))
        
    }else{
        res.write("bad request")
    }
});

//Handle the data
const processData = async (url_search) => {
    try {
        const package = await getRequest(url_search);
        return JSON.stringify(package)

    } catch (error) {

    }
}

//use axios to make the get request to musicbrainz
const getRequest = async (url_search) => {
    try {
        const resp = await axios.get('https://musicbrainz.org/ws/2' + url_search);
        return resp.data;
    } catch (err) {
        return err;
    }
};

// Start the server on port 3000
server.listen(3000);
console.log('Node server running on port 3000');