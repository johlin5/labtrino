const http = require('http');
const axios = require('axios')


// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    url_search = req.url;
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    }); 
    if (url_search.includes("artist")) {
        getInfo(url_search)
            .then(result => res.write(result))
            .catch(res.end("Not a valid query"))
    } else {
       res.end("Not a valid query")
    }


});

app.listen((req, res) => {

})

///artist/cc197bad-dc9c-440d-a5b5-d52ba2e14234
const fetchInfo = async (url_search) => {
    if (url_search != undefined) {
        try {
            return await axios.get('https://musicbrainz.org/ws/2' + url_search)
        } catch (error) {
            //console.error(error)
        }
    }

}

const getInfo = async (url_search) => {
    const package = await fetchInfo(url_search)
    return JSON.stringify(package.data);


}

// Start the server on port 3000
app.listen(3000);

console.log('Node server running on port 3000');