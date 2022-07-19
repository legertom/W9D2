
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};


// Create an a tag
// Set the a tag's innerHTML to be the dog's name
// Set the a tag's href to be the dog's information link
// Create a li tag
// Give the li tag the class of 'dog-link'
// Append the a tag to the li tag
// Push the completed li into an array of the dog links completed so far.

function dogLinkCreator() {
  let dogLinks = [];
  let names = Object.keys(dogs);
  let links = Object.values(dogs);
  for(let i =0; i < names.length; i++){
    let aTag = document.createElement('a');  
    aTag.innerHTML = names[i];
    aTag.href = links[i];
    let li = document.createElement('li')
    li.appendChild(aTag)
    li.className = 'dog-link';
    dogLinks.push(li)
  }
  return dogLinks
}
 


let dropDown = document.getElementsByClassName("drop-down-dog-list")[0];
dropDown.className = "drop-down-dog-list hidden";

function attachDogLinks(){
  let dogLinks = dogLinkCreator();  
  for(let dog of dogLinks){
    dropDown.append(dog);
  }
}
attachDogLinks();

function dropDownEffect(){
  let nav = document.getElementsByClassName("drop-down-dog-nav")[0]
  nav.addEventListener('mouseout', function(){
    //make the stuff disappear essentially
    dropDown.className = "drop-down-dog-list hidden";
  })

  nav.addEventListener('mouseover', function() {
    dropDown.className = "drop-down-dog-list";
  })
}

dropDownEffect();

