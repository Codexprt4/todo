// function Enemy(life, name, level){
//     this.life = life;
//     this.name = name;
//     this.level = level;
// }

// Enemy.prototype.getInfo = function(){
//     console.log(this.life, this.name, this.level);
// };
// Enemy.prototype.attack = function(){
//     console.log(`${this.name} has attacked!`);
// };
// Enemy.prototype.block = function(){
//     console.log(`${this.name} has blocked!`);
// };

// function Dragon(life, name, level, color, spell){
//     Enemy.call(this, life, name, level);
//     this.color = color;
//     this.spell = spell;

// }
// const newDragon = new Dragon(100, 'Drogon', 25, 'green', 'fire');
// console.log(newDragon);


//FORGET ALL ABOVE ;p
//CLASS CONCEPT


class Enemy{
    constructor(life, name, level){
        this.life = life;
        this.name = name;
        this.level = level;
    }
    getInfo(){
        console.log(this.life, this.name, this.level);
    }
}

const turtle = new Enemy(25, "Squid", 45);
const bug = new Enemy(5, "Hoa", 50);

// turtle.getInfo();
bug.getInfo();
class Bug extends Enemy{
    constructor(life, name, level, legs, dmg){
        super(life, name, level);
        this.legs = legs;
        this.dmg = dmg;
    }

}
const john = new Bug(5, "lili", 20, 7,58);
console.log(john);