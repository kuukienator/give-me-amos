const axios = require('axios');

module.exports = (req, res) => {
    const { q = 'amos expanse', r = 'true', o = 0 } = req.query;
    const searchGiphy = (query, o) =>`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_TOKEN}&q=${query}&limit=1&offset=${o}&rating=PG-13&lang=en`;
    const randomGiphy = (tag) => `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_TOKEN}&tag=${tag}&rating=PG-13`;

    axios.get(r === 'true' ? randomGiphy(q) : searchGiphy(q, o))
    .then(response => {
        console.log(response.data);
        res.status(200).send(response.data);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send(new Error('Internal Server Error'));
    });
}