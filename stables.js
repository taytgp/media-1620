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

let stableName = "Off Campus Stables";

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