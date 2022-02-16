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

console.log(addToCollection('Horses', 'Patti Smith', 1975));
console.log(addToCollection('Blood on the Tracks', 'Bob Dylan', 1975));
console.log(addToCollection('Hunky Dory', 'David Bowie', 1971));
console.log(addToCollection('Pleased to Meet Me', 'The Replacements', 1987));
console.log(addToCollection('Hamilton', 'Lin-Manuel Miranda', 2015));
console.log(addToCollection('Fear of Music', 'Talking Heads', 1979));
console.log(collection);

function showCollection(array){
    console.log(`There are ${array.length} albums in the collection.`);
    for (var i = 0; i < array.length; i++) {
      //console.log(`${array[i]0} by ${array[i]1}, published in ${array[i]2}`);//Nope
      //console.log(`by` .title, `published in`.yearPublished`);//Nope
      //console.log(`${title} by ${artist}, published in ${yearPublished}`);//Nope
      //console.log(`${[i].title} by ___, published in ___`)// ${[i].title} prints as Undefined
      //console.log( title 'by', artist, 'published in', yearPublished)// Nope
      //console.log(`${(title)} by ${(artist)}, published in ${(yearPublished)}`)//Nope
      //console.log(`___ by ___, published in ___`)//this does print
      console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`);//Nope

  }//end for loop
}//end showCollection

showCollection(collection);

function findByArtist(musician){
  let artistFilter = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].artist === musician){
    artistFilter.push(collection[i]);
  }//end if
  }//end for loop
  console.log(artistFilter);
  return artistFilter;
}//end findByArtist

findByArtist('Bob Dylan');
findByArtist('Lawrence Welk');
