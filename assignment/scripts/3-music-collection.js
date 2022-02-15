console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
  //console.log('inside addToCollection');//just for testing
  //for (var variable in object) {
    title = title;
    artist = artist;
    yearPublished = yearPublished;
//}//end for in// NOPE do not need a loop here
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }//end "album"
  collection.push(album);
  return album;
}//end addToCollection

addToCollection('banana', 'monkey', 2022);
console.log(collection);
