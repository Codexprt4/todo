//OBJECTS & ARRAY REFERENCE TYPE
const name = ['ed', 'edd', 'eddy'];

const newName = name;
newName.push("dipti");
console.log(newName)
console.log(name);
// both are same becoz even after copying , objects & arrays are keeps reference. so it will always modify original data too.



const rating = [92,10,52,8,3,478,25,4];
console.log(` ORIGNAL-------`+rating);
// rating.sort(function(a, b){
//     return a - b;
// });
// console.log(rating);

const ascRating = [...rating];
ascRating.sort((a, b) =>  a -b);
console.log(`ASC---` + ascRating);

const games = [
    {title: "Mass Effect", rating: 2.5},
    {title: "Avengers", rating: 4.5},
    {title: "Thor", rating: 5},
    {title: "Iron Man", rating: 4},
    {title: "Man on Mars", rating: 3},
];

//filter games
games.sort((a, b) => a.rating - b.rating);
console.log(games);

//copy of array
const descRating = [...rating];
descRating.sort((a, b) => b-a);
console.log(`DESC->`+ descRating);

console.log(rating);

//USE of [...]
const dName = "DevelopedbyDipti";
const letters = [...dName];
console.log(letters);


//ABOUT THIS KEYWORD//

const user = {
    name : "developbydipti",
    videos : ["html", "css", "js", "react"],
    greet(){        
        console.log(`Hello there ${this.name}`);        
        const getVideos = () => {
            console.log(`You currently have ${this.videos.length} videos`);
        };
    getVideos();
        this.videos.forEach(video => {
           // console.log(this);
        });

    }
};
user.greet();
//  BIND CALL APPLY

const person = {
    firstName: "Dipti",
    lastName: "Pariya",
    getName(){
        console.log(this.firstName + " " + this.lastName);
    }
};

// person.getName();

function registerUser(country, lang){
    //additional functionality
    this.getName();
    console.log(`This is my country ${country} and my language is ${lang}`);
}
//bind
const register = registerUser.bind(person); 
// register('india','hindi');

//call
registerUser.call(person, "canada","en");

registerUser.apply(person,['hungry','en']);
//End Bind Call Apply

const lastName = new String("user");
console.log(lastName);