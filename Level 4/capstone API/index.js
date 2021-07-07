

const hash = "9a477047516c75f0e7a25215f6aaecf8"

    axios.get(`http://gateway.marvel.com/v1/public/characters?limit=50&ts=1&apikey=f505b94338446de66695ad49dcf4b8ae&hash=${hash}`)
        .then(res => console.log(res.data.data.results))
