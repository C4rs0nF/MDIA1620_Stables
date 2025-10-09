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

let horseName = "Rascal";
let horseAge = "7";
let isHorseInside = "true";
let boardingFee = 156;
let lateFee = boardingFee * 0.2;
let stableName = "Happytime Stables";
let stableGreeting = "Welcome to " + stableName;
let latePaymentMessage =
    horseName +
    "'s boarding fee is late, you now owe " +
    "$" +
    (boardingFee + lateFee);

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

let horses = {
    Rascal: {
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
    Frazzle: {
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
    Bingo: {
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

horses.Pennies = {
    Pennies: {
        name: "Pennies",
        nickname: "Losey",
        favoriteSnack: "twigs",
        age: 12,
        rent: 352,
        isInside: false,
        isHungry: false,
        style: "brown",
        musicalInstrument: "guitar",
    },
};

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
