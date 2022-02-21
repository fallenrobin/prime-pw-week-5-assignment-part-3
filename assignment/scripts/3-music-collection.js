console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
  //console.log('inside addToCollection');//just for testing
  // NOPE do not need a loop here
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
console.log(addToCollection('The Rise and Fall of Ziggy Stardust and the Spiders from Mars', 'David Bowie', 1972));
console.log(addToCollection('Hunky Dory', 'David Bowie', 1971));
console.log(addToCollection('Pleased to Meet Me', 'The Replacements', 1987));
console.log(addToCollection('Fear of Music', 'Talking Heads', 1979));
console.log(collection);

function showCollection(array){
    console.log(`There are ${array.length} albums in the collection.`);
    for (var i = 0; i < array.length; i++) {//previous attempts pasted at the bottom of the page
      console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`);//Nope
  }//end for loop
}//end showCollection

showCollection(collection);

function findByArtist(musician){
  let artistFilter = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].artist.toLowerCase() === musician.toLowerCase()){
    artistFilter.push(collection[i]);
  }//end if
  }//end for loop
  console.log(artistFilter);
  return artistFilter;
}//end findByArtist

findByArtist('David Bowie');
findByArtist('david bowie');//Yay, it's now case insensitive!
findByArtist('the replacements');
findByArtist('Lawrence Welk');

console.log('Below would be the stretch questions, but they are in varying states of disarray and are overall not working.');

//
// function search(performer, releaseDate){
//  let searchReturn = [];
//  let searchObject = {
//    performer: performer,
//    releaseDate: releaseDate,
//  }
//  for (let i = 0; i < collection.length; i++){
//    if (collection[i].artist === performer && collection[i].yearPublished === releaseDate ) { //"If there is no search object or an empty search object provided as input" <= what is the distinction here?
//      searchReturn.push(collection[i]);
//      //console.log(searchReturn);
//      return searchReturn;
//     }//end if
//   else if
//     (performer == Undefined || releaseDate == Undefined){
//     return collection;
//     }//end else if
//     else {
//       return searchReturn;
//     }
//     return searchReturn;
//  }
// }end search


//
//Below is one that once worked, using collection[i].property. But then I broke it.

// function search(performer, yearPublished){
//  let searchReturn = [];
//
//  for (var i = 0; i < collection.length; i++){
//    if //(searchObject == Undefined){
//    //return collection;
//   //}//end if
//   //else if
//   (collection[i].artist.toLowerCase() === performer.toLowerCase() && collection[i].yearPublished === releaseDate) {
//     searchReturn.push(collection[i]);
//     return searchReturn;
//   }//end else if
//   else {
//     return searchReturn;
//   }//end else
//   }//end for loop
//    console.log(searchReturn);
// }//end search function



// console.log(`Should return whole collection`, search('woof',2000));
// console.log(`Should return this album`, search('The Replacements', 1987));
// console.log(`Should return empty array`, search());


//Various attempts from working on showCollection function:
//console.log(`${array[i]0} by ${array[i]1}, published in ${array[i]2}`);//Nope
//console.log(`by` .title, `published in`.yearPublished`);//Nope
//console.log(`${title} by ${artist}, published in ${yearPublished}`);//Nope
//console.log(`${[i].title} by ___, published in ___`)// ${[i].title} prints as Undefined-- I was close! was missing array before the [i]
//console.log( title 'by', artist, 'published in', yearPublished)// Nope
//console.log(`${(title)} by ${(artist)}, published in ${(yearPublished)}`)//Nope
//console.log(`___ by ___, published in ___`)//my boilerplate for attempts
