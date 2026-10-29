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
// This is a template for your assignments and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each assignment!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. E.g.: those seen on lines 58 - 68, for example. They are usually providing directions. 
// (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Assignment 1) -------------------------//

// Store information about three horses in your stables.
// Each horse should have the following information associated with it:
//
// - the name of a horse at your stable
// - the age of the horse
// - what the horse likes to snack on
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//
// Create a variable and use it to store the name of your stable.
// Create a variable and use it to store a message for visitors to the stable as a string. It should include the name of your stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing. Include the name of one of your horses in the message.

//------------------------- First day (Assignment 2) -------------------------//

// Move the horses in your stables into objects, if they aren't already. Each horse should have its own object.
// (After you are done, your horse variables from Assignment 1 should be deleted)
//
// The horses should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)

// Store the horses you've just created in a "horses" array.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

// Create a variable that stores your total number of stalls.
// Create a function that logs out how many stalls are available, given how many horses you have in your stable.

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

let stableName = "Sunny Meadows Stables";

// Each horse is now its own object (the horse variables from Assignment 1 are deleted)
let dean = {
    name: "Dean",
    nickname: "Burrito",
    favoriteTreat: "carrots",
    age: 8,
    monthlyRent: 1200,
    isInside: true,
    color: "gold",
    hasSaddle: true
};

let allie = {
    name: "Allie",
    nickname: "Allie Cat",
    favoriteTreat: "apple",
    age: 6,
    monthlyRent: 950,
    isInside: false,
    color: "black",
    hasSaddle: false
};

let hannah = {
    name: "Hannah",
    nickname: "Wellsy",
    favoriteTreat: "Apple Pie",
    age: 10,
    monthlyRent: 1500,
    isInside: true,
    color: "white",
    hasSaddle: true
};

// Store the horses in a "horses" array
let horses = [dean, allie, hannah];

// A new horse wants to be stabled!
let clementine = {
    name: "Clementine",
    nickname: "Clem",
    favoriteTreat: "Grass",
    age: 10,
    monthlyRent: 1000,
    isInside: false,
    color: "Blue",
    hasSaddle: true
};

// Add the new horse to the horses array
horses.push(clementine);

// New property: is the horse hungry? (dot notation)
dean.isHungry = true;
allie.isHungry = false;
hannah.isHungry = true;
clementine.isHungry = false;

// Total number of stalls in the stable
let totalStalls = 10;

// Function that logs how many stalls are available
function logAvailableStalls(numberOfHorses) {
    let availableStalls = totalStalls - numberOfHorses;
    console.log("There are " + availableStalls + " stalls available at " + stableName + ".");
}

logAvailableStalls(horses.length);

// Function that logs how much a horse owes if rent is paid late (rent + 20%)
function logLateRent(horse) {
    let amountOwed = horse.monthlyRent * 1.2;
    console.log(horse.name + " will owe $" + amountOwed + " if rent is paid late.");
}

logLateRent(dean);

// Function that returns (not logs) the nickname of a chosen horse
function getNickname(horse) {
    return horse.nickname;
}

// Log the return value outside of the function
let chosenNickname = getNickname(allie);
console.log(chosenNickname);