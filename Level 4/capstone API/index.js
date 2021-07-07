// fetch("https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lon=-111.891&lat=40.7608&radius=50", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "118cfa6a6amsh3ce5e19d7140502p11375bjsn0443684bc70c",
// 		"x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com"
// 	}
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.error(err))

const hash = "9a477047516c75f0e7a25215f6aaecf8"

    axios.get(`http://gateway.marvel.com/v1/public/characters?limit=50&ts=1&apikey=f505b94338446de66695ad49dcf4b8ae&hash=${hash}`)
        .then(res => console.log(res.data.data.results))
