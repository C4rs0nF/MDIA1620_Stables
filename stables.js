// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
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

let horses = {
    rascal: {
        name: "Rascal",
        nickname: "Trouble",
        favoriteSnack: "Whiskey",
        age: 7,
        rent: 156,
        isInside: false,
        isHungry: true,
        style: "white with brown spots",
        musicalInstrument: "xylophone",
    },
    frazzle: {
        name: "Frazzle",
        nickname: "Dazzle",
        favoriteSnack: "nickels",
        age: 26,
        rent: 257,
        isInside: true,
        isHungry: false,
        style: "yellow like a lemon",
        musicalInstrument: "drums",
    },
    bingo: {
        name: "Bingo",
        nickname: "Ancient One",
        favoriteSnack: "lost souls",
        age: 86739211678,
        rent: 50,
        isInside: true,
        isHungry: false,
        style: "ghost white",
        musicalInstrument: "vocals",
    },
};

horses.pennies = {
    name: "Pennies",
    nickname: "Losey",
    favoriteSnack: "twigs",
    age: 12,
    rent: 352,
    isInside: false,
    isHungry: false,
    style: "brown",
    musicalInstrument: "guitar",
};

let totalStalls = 6;

function printStallsAvailable(horses) {
    let horsesInStalls = 4;
    let availableStalls = totalStalls - horsesInStalls;
    console.log(
        "there are currently " +
            availableStalls +
            " stalls available for " +
            horses.name +
            " to move into"
    );
}

printStallsAvailable(horses.bingo);
printStallsAvailable(horses.rascal);

const MONTHLY_RENT = 300;

function latePaymentAlert(horses) {
    let latePaymentFee = MONTHLY_RENT * 1.2;
    console.log(
        horses.name +
            "'s rent has not been paid on time, " +
            latePaymentFee +
            " dollars is what you now owe."
    );
}

latePaymentAlert(horses.frazzle);
latePaymentAlert(horses.pennies);

function getHorseNickname(horses) {
    console.log(horses.nickname + " is " + horses.name + "'s nickname");
}

return getHorseNickname(horses.bingo);

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
