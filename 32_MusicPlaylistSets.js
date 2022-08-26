//:::::::::::::::::::::::::::MUSIC PLAYLIST:::::::::::::::::::::::://
//////////////////////////////////////////////////////////////////////

//Ozan is putting together a playlist for an upcoming roadtrip. He doesn't want to hear the same track more than once, but the playlist has gotten so long that he's having trouble remembering which tracks have already been added.

//The API for Ozan's music player only knows how to work with arrays, so he attempts to write some code that uses Array.indexOf() to check for the presence of a track before adding it to the playlist. Unfortunately, his program takes much too long to execute. He needs your help!

//Coming to Ozan's aid, you are astonished to find that his playlist contains half a million tracks. Perhaps you know of a different data structure that will allow you to manipulate the playlist more efficiently?

//set create|  new Set();
//set helper methods| .add, .size, .has, .delete, .clear, .keys, .values, .entries

//REMOVE DUPLICATE TRACKS
/**
: Updates playlist array and returns the updated version
: @param {array} playlist
:
:@return {array} updated playlist
**/

function removeDuplicates(playlist){
  //Convert array of duplicates to a set
  //sets automatically contains only unique chars

  //use of Array.from() for set to array conversion
          //Array.from(new Set(playlist));

  //Use of spread syntax for set to array
  return [...new Set(playlist)];

}

//CHECK WHETHER A TRACK HAS ALREADY BEEN ADDED
/**
:checks to see whether a track is already present in the playlist
:
:@param {array} playlist
:@param {string} songTrack
:
:@return {boolean} true or false
*/
function hasTrack(playlist, songTrack){
//convert array to set


  return setPlaylist.has(songTrack);
}

//ADD A TRACK
/**
: update the playlist adding new track
:
:@param {array} playlist
:@param {string} songTrack
:
:@return {array} playlist
*/
function addTrack(playlist, songTrack){

  setPlaylist.add(songTrack);
  //convert set back to array
  return Array.from(setPlaylist);
}

//DELETE A TRACK
/**
: update the playlist by deleting a track
:
:@param {string[]} playlist
:@param {string} songTrack
:
:@return {string[]} updated playlist
*/
 function deleteTrack(playlist, songTrack){

  setPlaylist.delete(songTrack);
  return [...setPlaylist];
 }

 //LIST UNIQUE ARTISTS
 function listArtists(playlist){
 //song is each element at a time gets separated at '-'and is present in array example [All Mine, Pportishead], the pop will take and return last element i.e, Portishead. Ath the end artists = [Portishead,Davendra Banhart,Portishead] , then to remove duplicates use the removeDuplicates function.
  let artists = playlist.map(song => song.split('-').pop());
  return removeDuplicates(artists);
 }
/*const playlist = [
  'Court and Spark - Joni Mitchell',
  'Big Yellow Taxi - Joni Mitchell',
  'Court and Spark - Joni Mitchell',
];*/

/*const playlist = [
  'The Fashion Show - Grace Jones',
  'Dr. Funkenstein - Parliament',
];*/

//const playlist = ['Selma - Bijelo Dugme'];

/*const playlist = [
  'The Treasure - Fra Lippo Lippi',
  'After the Fall - Klaus Nomi',
];*/

const playlist = [
  'All Mine - Portishead',
  'Sight to Behold - Devendra Banhart',
  'Sour Times - Portishead',
];

const setPlaylist = new Set(playlist);

console.log(removeDuplicates(playlist));
//=> ['Court and Spark - Joni Mitchell', 'Big Yellow Taxi - Joni Mitchell']

console.log(hasTrack(playlist, 'Dr. Funkenstein - Parliament'));
//=> true

console.log(hasTrack(playlist, 'Walking in the Rain - Grace Jones'));
//=> false

//console.log(addTrack(playlist, 'Atomic Dog - George Clinton'));
//=> ['Selma - Bijelo Dugme', 'Atomic Dog - George Clinton']

//console.log(addTrack(playlist, 'Selma - Bijelo Dugme'));
//=> ['Selma - Bijelo Dugme', 'Atomic Dog - George Clinton']

console.log(deleteTrack(playlist, 'The Treasure - Fra Lippo Lippi'));
//=> ['After the Fall - Klaus Nomi']

console.log(deleteTrack(playlist, 'I Feel the Magic - Belinda Carlisle'));
//=> ['After the Fall - Klaus Nomi']



console.log(listArtists(playlist));
//=> ['Portishead', 'Devendra Banhart']
