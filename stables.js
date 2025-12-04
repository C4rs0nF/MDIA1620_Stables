// Welcome!
//
//  ,  ,.~"""""~~..                                           ___
//   )\,)\`-,       `~._                                     .'   ``._
//   \  \ | )           `~._                   .-"""""-._   /         \
//  _/ ('  ( _(\            `~~,__________..-"'          `-<           \
//  )   )   `   )/)   )        \                            \           |
// ') /)`      \` \,-')/\      (                             \          |
// (_(\ /7      |.   /'  )'  _(`                              |         |
//     \\      (  `.     ')_/`                                |         /
//      \       \   \                                         |        (
//       \ )  /\/   /                                         |         `~._
//        `-._)     |                                        /.            `~,
//                  |                          |           .'  `~.          (`
//                   \                       _,\          /       \        (``
//                    `/      /       __..-i"   \         |        \      (``
//                   .'     _/`-..--""      `.   `.        \        ) _.~<``
//                 .'    _.j     /            `-.  `.       \      '=< `
//               .'   _.'   \    |               `.  `.      \
//              |   .'       ;   ;               .'  .'`.     \
//              \_  `.       |   \             .'  .'   /    .'
//                `.  `-, __ \   /           .'  .'     |   (
//                  `.  `'` \|  |           /  .-`     /   .'
//                    `-._.--t  ;          |_.-)      /  .'
//                           ; /           \  /      / .'
//                          / /             `'     .' /
//                         /,_\                  .',_(
//                        /___(                 /___(
//
// This is a template for your labs and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each lab!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Lab #1, Week 3) -------------------------//

// Declare variables with values for the following:
// - the name of the horse at the stable
// - the age of the horse
// - whether the horse is inside or outside
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//
// Create a variable and use it to store a message for visitors to the stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing.
// Include the name of your horse in the message.

// let horseName = "Rascal";
// let horseAge = "7";
// let isHorseInside = "true";
// let boardingFee = 156;
// let lateFee = boardingFee * 0.2;
// let stableName = "Happytime Stables";
// let stableGreeting = "Welcome to " + stableName;
// let latePaymentMessage =
//     horseName +
//     "'s boarding fee is late, you now owe " +
//     "$" +
//     (boardingFee + lateFee);

//------------------------- First day (Lab #2, Week 4) -------------------------//

// Using an object, add at least 3 horses to your stables.
//
// The horses should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)

// Store the horses you've just created in a "horses" variable.
// Keep your old horse info from week one for now.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

// let horses = {
//     Rascal: {
//         name: "Rascal",
//         nickname: "Trouble",
//         favoriteSnack: "Whiskey",
//         age: 7,
//         rent: 156,
//         isInside: false,
//         isHungry: true,
//         style: "white with brown spots",
//         musicalInstrument: "xylophone",
//     },
//     Frazzle: {
//         name: "Frazzle",
//         nickname: "Dazzle",
//         favoriteSnack: "nickels",
//         age: 26,
//         rent: 257,
//         isInside: true,
//         isHungry: false,
//         style: "yellow like a lemon",
//         musicalInstrument: "drums",
//     },
//     Bingo: {
//         name: "Bingo",
//         nickname: "Ancient One",
//         favoriteSnack: "lost souls",
//         age: 86739211678,
//         rent: 50,
//         isInside: true,
//         isHungry: false,
//         style: "ghost white",
//         musicalInstrument: "vocals",
//     },
// };

// horses.Pennies = {
//     Pennies: {
//         name: "Pennies",
//         nickname: "Losey",
//         favoriteSnack: "twigs",
//         age: 12,
//         rent: 352,
//         isInside: false,
//         isHungry: false,
//         style: "brown",
//         musicalInstrument: "guitar",
//     },
// };

// console.log(horses.Rascal.name + " is " + horses.Rascal.age + " years old!");

// function printHorseAge(name, age) {
//     console.log(name + " is " + age + " years old!");
// }

// printHorseAge(horses.Rascal.name, horses.Rascal.age);

// let changer = "hello world";
// changer = "bye world";

// const MONTHLY_RENT = 300;

// function payMe(rent = MONTHLY_RENT) {
//     let message = "you owe me " + rent + " dollars!";

//     return message;
// }

// function payMeLateFees(lateFees) {
//     let amount = "you owe me " + lateFees + " dollars!";
//     let lateFees = 300;
//     return amount;
// }

// console.log(payMeLateFees());

//                                      \       ,
//                                      |\.--._/|
//                                     /\ )  )\\/
//                                    /(   \  / \
//                                   /(   J `(   \
//                                  / ) | _\     /
//                                 /|)  \  eJ    L
//                                |  \ L \   L   L
//                               /  \  J  `. J   L
//                               |  )   L   \/   \
//                              /  \    J   (\   /
//            _....___         |  \      \   \```
//     ,.._.-'        '''--...-||\     -. \   \
//  .'.=.'                    `         `.\ [ Y
//  /   /                Rascal             \]  J
// Y / Y                                    Y   L
// | | |          \                         |   L
// | | |           Y                        A  J
// |   I           |                       /I\ /
// |    \          I             \        ( |]/|
// J     \         /._           /        -tI/ |
//  L     )       /   /'-------'J           `'-:.
//  J   .'      ,'  ,' ,     \   `'-.__          \
//   \ T      ,'  ,'   )\    /|        ';'---7   /
//    \|    ,'L  Y...-' / _.' /         \   /   /
//     J   Y  |  J    .'-'   /         ,--.(   /
//      L  |  J   L -'     .'         /  |    /\
//      |  J.  L  J     .-;.-/       |    \ .' /
//      J   L`-J   L____,.-'`        |  _.-'   |
//       L  J   L  J                  ``  J    |
//       J   L  |   L                     J    |
//        L  J  L    \                    L    \
//        |   L  ) _.'\                    ) _.'\
//        L    \('`    \                  ('`    \
//         ) _.'\`-....'                   `-....'
//        ('`    \
//         `-.___/
//
//
//
//------------------------- Growing our business (Lab #2, Week 6) -------------------------//

// Create a variable that stores your total number of stalls.
// Create a function that logs out how many stalls are available, given how many horses you have in your stable.

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.
// this is a test

// -----OCTOBER 10th----- //

// let horses = {
//     rascal: {
//         name: "Rascal",
//         nickname: "Trouble",
//         favoriteSnack: "Whiskey",
//         age: 7,
//         rent: 156,
//         isInside: false,
//         isHungry: true,
//         style: "white with brown spots",
//         musicalInstrument: "xylophone",
//     },
//     frazzle: {
//         name: "Frazzle",
//         nickname: "Dazzle",
//         favoriteSnack: "nickels",
//         age: 26,
//         rent: 257,
//         isInside: true,
//         isHungry: false,
//         style: "yellow like a lemon",
//         musicalInstrument: "drums",
//     },
//     bingo: {
//         name: "Bingo",
//         nickname: "Ancient One",
//         favoriteSnack: "lost souls",
//         age: 86739211678,
//         rent: 50,
//         isInside: true,
//         isHungry: false,
//         style: "ghost white",
//         musicalInstrument: "vocals",
//     },
// };

// horses.pennies = {
//     name: "Pennies",
//     nickname: "Losey",
//     favoriteSnack: "twigs",
//     age: 12,
//     rent: 352,
//     isInside: false,
//     isHungry: false,
//     style: "brown",
//     musicalInstrument: "guitar",
// };

// let totalStalls = 6;

// function printStallsAvailable(horses) {
//     let horsesInStalls = 4;
//     let availableStalls = totalStalls - horsesInStalls;
//     console.log(
//         "there are currently " +
//             availableStalls +
//             " stalls available for " +
//             horses.name +
//             " to move into"
//     );
// }

// printStallsAvailable(horses.bingo);
// printStallsAvailable(horses.rascal);

// const MONTHLY_RENT = 300;

// function latePaymentAlert(horses) {
//     let latePaymentFee = MONTHLY_RENT * 1.2;
//     console.log(
//         horses.name +
//             "'s rent has not been paid on time, " +
//             latePaymentFee +
//             " dollars is what you now owe."
//     );
// }

// latePaymentAlert(horses.frazzle);
// latePaymentAlert(horses.pennies);

// function getHorseNickname(horses) {
//     return horses.nickname + " is " + horses.name + "'s nickname";
// }

// console.log(getHorseNickname(horses.bingo));

// ---------FINALS.JS--------- //

// Welcome!
//----------------------------------------------
//                                  |\    /|
//                               ___| \,,/_/
//                            ---__/ \/    \
//                           __--/     (D)  \
//                           _ -/    (_      \
//                          // /       \_ / ==\
//    __-------_____--___--/           / \_ O o)
//   /                                 /   \==/
//  /                                 /
// ||          )                   \_/\
// ||         /              _      /  |
// | |      /--______      ___\    /\  :
// | /   __-  - _/   ------    |  |   \ \
//  |   -  -   /                | |     \ )
//  |  |   -  |                 | )     | |
//   | |    | |                 | |    | |
//   | |    < |                 | |   |_/
//   < |    /__\                <  \
//   /__\                       /___\
// ------------rascal----------------------------
//
// This is a template for the final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// You can copy and paste this into your stables.js file, and then use it to guide you.
// Please do not create a new file!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop -------------------------//

// Initialize a variable called "horses" that will store the horses in your stable.
let horses = [];
// Create a variable and use it to store a message that welcomes visitors to the stable.
let greeting = "welcome to the stables";
// Create a variable and use it to store the cost of a late payment fee.
let lateFee = 100;
// Create a variable and use it to store the number of available stalls in the stable.
let freeStalls = 5;

//------------------------- First day -------------------------//

// Using a constructor, add at least 3 horses to your stables.
// The horse should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)
// - a method that introduces your horse and references at least 3 object properties.
// - a second, unique method of your choice
let Horse = function (
    horseName,
    horseNickname,
    horseAge,
    horseFavSnack,
    horseSpecialTalent
) {
    this.name = horseName;
    this.nickname = horseNickname;
    this.age = horseAge;
    this.rent = 300;
    this.isInside = true;
    this.favSnack = horseFavSnack;
    this.specialTalent = horseSpecialTalent;

    this.intro = function () {
        let introMessage =
            "This is " +
            this.name +
            " my horse! they are " +
            this.age +
            " years old, their favorite snack is " +
            this.favSnack +
            " and their nickname is " +
            this.nickname +
            "!";
        console.log(introMessage);
    };

    this.specialTalent = function () {
        console.log("their special talent is" + this.specialTalent + "!");
    };
};
// Store the horses you've just created in your "horses" variable.
let horseOne = new Horse("Rascal", "Trouble", "7", "Whiskey", "Ice Hockey");
let horseTwo = new Horse(
    "Pennies",
    "Jangles",
    "4",
    "Coins",
    "Olympic Longjumping"
);
let horseThree = new Horse(
    "Frederick",
    "Zoomers",
    "40",
    "Monster Energy",
    "Running"
);
// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.
let horseFour = {
    name: "Banana",
    nickname: "Fruity",
    age: 8,
    favSnack: "sawdust",
    specialTalent: "eating dirt",

    intro: function () {
        let introMessage =
            "This is " +
            this.name +
            " my horse! they are " +
            this.age +
            " years old, their favorite snack is " +
            this.favSnack +
            " and their nickname is " +
            this.nickname +
            "!";
        console.log(introMessage);
    },

    specialTalent: function () {
        console.log("their special talent is" + this.specialTalent + "!");
    },
};

horses.push(horseOne, horseTwo, horseThree, horseFour);
console.log(horses);
// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.
horses[0].isHungry = true;
horses[1].isHungry = false;
horses[2].isHungry = true;
horses[3].isHungry = false;
//------------------------- Stable roster -------------------------//

// We want to keep track of our horses and how they are doing. Paste the data structure
// of our horse variable below so we can reference it. It is okay to comment it out.
// [
//   Horse {
//     name: 'Rascal',
//     nickname: 'Trouble',
//     age: '7',
//     rent: 200,
//     lateFee: 100,
//     isInside: true,
//     favSnack: 'Whiskey',
//     specialTalent: [Function (anonymous)],
//     intro: [Function (anonymous)]
//   },
//   Horse
//     name: 'Pennies',
//     nickname: 'Jangles',
//     age: '4',
//     rent: 200,
//     lateFee: 100,
//     isInside: true,
//     favSnack: 'Coins',
//     specialTalent: [Function (anonymous)],
//     intro: [Function (anonymous)]
//   },
//   Horse {
//     name: 'Frederick',
//     nickname: 'Zoomers',
//     age: '5',
//     rent: 200,
//     lateFee: 100,
//     isInside: true,
//     favSnack: 'Monster Energy',
//     specialTalent: [Function (anonymous)],
//     intro: [Function (anonymous)]
//   },
//   {
//     name: 'Banana',
//     nickname: 'Fruity',
//     age: 8,
//     favSnack: 'sawdust',
//     specialTalent: [Function: specialTalent],
//     intro: [Function: intro]
//   }
// ]
//---------------------- Growing business ----------------------//

// We've added some horses! Re-assign the variable that contains the number of available stalls.
// Use the math operator to determine how many stables you should have left, given the number of
// horses you've added.

let availStalls = freeStalls - horses.length;

// Express the following in code: If the variable that contains your remaining stalls
// is less than 2, log out "We need to build more stalls", otherwise log out "We have
// [number of stalls] available!"
if (availStalls < 2) {
    console.log("we need to build more stalls!");
} else {
    console.log("we have " + availStalls + " available!");
}
// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.
function latePaymentCharge(horse, lateFee) {
    let totalLateFee = horse.rent + lateFee;
    console.log(
        horse.name + " missed their payment! you now owe $" + totalLateFee
    );
}

latePaymentCharge(horses[1], lateFee);
// Add loop that checks to find out if a certain horse likes a treat. If the horse does not like
// the treat, log out their disatisfaction
//  and check the next horse. Exit the loop when you find
// the horse that likes the treat.

console.log(horses[3].favSnack);
for (let step = 0; step < horses.length; step++) {
    if (horses[step].favSnack !== "sawdust") {
        console.log("this horse HATES this");
    } else {
        console.log("this horse likes this... strange");
        break;
    }
}

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.
function getHorseNickname(horses) {
    return horses.nickname;
}

console.log(getHorseNickname(horses[2]));

//------------------------- Day to day operations -------------------------//

// Create and invoke a function that references one of your unique horse properties. It should
// contain a conditional or a loop.

function checkAge(horses) {
    if (horses.age < 30) {
        console.log("this horse is young and full of life");
    } else {
        console.log(horses.name + " is an old ass horse");
    }
}

console.log(checkAge(horses[3]));

// Morning! Create and invoke a function that moves all your horses outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.

function goOutside(horses) {
    for (let step = 0; step < horses.length; step++) {
        let currentHorse = horses[step];
        if (currentHorse.isInside) {
            currentHorse.isInside = false;
            console.log(currentHorse.name + ", get your butt outside!");
        } else {
            console.log(currentHorse.name + " is already outside");
        }
    }
}

goOutside(horses);

// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.
function comeInside(horses) {
    for (let step = 0; step < horses.length; step++) {
        let currentHorse = horses[step];
        if (currentHorse.isInside === false) {
            currentHorse.isInside = true;
            console.log("come inside, " + currentHorse.name);
        } else {
            console.log(currentHorse.name + "is already inside");
        }
    }
}

comeInside(horses);

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.
function feedHorses(horses) {
    for (let step = 0; step < horses.length; step++) {
        let currentHorse = horses[step];
        if (currentHorse.isInside === false) {
            currentHorse.isInside = true;
            console.log(
                "come inside, " + currentHorse.name + ", its time to eat!"
            );
        } else {
            console.log("enjoy your food, " + currentHorse.name);
        }
    }
}

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

function horsesInsideOutside(horses) {
    let isDarkOutside = true;
    for (let step = 0; step < horses.length; step++) {
        let currentHorse = horses[step];
        if (currentHorse.isInside) {
            currentHorse.isInside = false;
            console.log(currentHorse.name + ", get your butt outside!");
        }
        if (isDarkOutside) {
            currentHorse.isInside = false;
            console.log(
                "its getting dark out there " +
                    currentHorse.name +
                    ", come inside!"
            );
        } else {
            console.log(currentHorse.name + " is already outside");
        }
    }
}

horsesInsideOutside(horses);

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.

//-----NOTES----- //

//'let' declares the 'variable'
//a 'variable' is a 'box' that the 'value' sits inside
//'value' can be either a 'string' or a 'number'
//a 'string' is a value you declare with ""
//numbers (1,2,3 etc.) do not need quotations
//console.log is your 'method'

//counting in javascript always starts at '0'
//0,1,2,3 etc.
//to console log the first letter of a word
//JavaScript will consider that first letter
//as '0'

//an array is used to store multiple items
//variables, strings, buleans
//and even additional arrays can be stored in an array
//arrays are created with "[square brackets]"

//JavaScript will never kill you

//Objects allow you to store multiple items in a named container:
//let object = {
//key: "value"
//};"

//objects are created with "{squiggly brackets}"

//an object literal (console.log(object)) will output
//the computers stored memory of what is contained
//inside of the object

//an object declaration is when you call to a specific
//value inside of the object
//"console.log(object.key)"

//'object.key = "value"' allows you to add items to your object
//outside of the object container

//if you have one thing with multiple properties
//it is better to store it as an object

//if want to store multiple items into one container
//it is better to store them in an array

// let horseNames = ["Rascal", "Frazzle", "Bingo"];
// console.log(
//     "My horses are called " +
//         horseNames[0] +
//         ", " +
//         horseNames[1] +
//         ", and " +
//         horseNames[2]
// );

// console.log("my horses are named " + horseNames);

// console.log("my horses are named " + horseNames.join());

// functions are a callable unit of logic that has a well-defined interface and performs a task
// ex: 'function name(parameters) {return data; function body};'
//functions are used to perform tasks and can be called multiple times
//

// function squareThisNumber(number) {
//     console.log("the square of " + number + " is " + number * number);
// }

// squareThisNumber(3);
// squareThisNumber(11);

// in the above case, the function is being used to
// find the square root of the number

// function addTheseTwoThings(firstAdd, secondAdd) {
//     console.log(
//         "When you add " +
//             firstAdd +
//             " and " +
//             secondAdd +
//             " you get " +
//             (firstAdd + secondAdd)
//     );
// }

// let firstNumber = 2;
// let secondNumber = 523;
// let arrayOfNumbers = [3, 35, 46, 98];

// addTheseTwoThings(7, 3);
// addTheseTwoThings(17, 38);
// addTheseTwoThings(firstNumber, secondNumber);
// addTheseTwoThings(arrayOfNumbers[2], arrayOfNumbers[0]);

// this is a 'function call' or 'function invocation'
// the function parameters are how you call to the function
// when you're calling to the function you are telling it replace
// the 'parameters' with the 'arguments'
// the argument is the information you are putting into the parameters
// when you are calling to the function

// functions are a great way to call to a specific result,
// anything can be passed as a function argument
// 'console.log();' is a function
// '[].push' is a function

// i need to organize this so bad

// -----END OF NOTES----- //
