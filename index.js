const Discogs = require('disconnect').Client;

var db = new Discogs('DiscoWatch/0.0.1', { userToken: 'rTZkQxlApSYDfWXhvjAwJyecxoInXjBdgCNpRtGA'}).database();
// db.getRelease(176126)
// 	.then(data => {
// 		console.log(data);
// 	})
// 	.catch(err => console.log(err));

db.search({
	artist: 'SWV',
	type: 'master'
  })
  .then(res => {
  	// console.log(masters);
  	const masters = res.results;
  	return db.getMaster(masters[0].master_id);
  })
  .then(release => {
  	console.log(release);
  });
