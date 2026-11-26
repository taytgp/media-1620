//                        #  #
//                    %% ## ##
//                   %%% ##🎀##
//                  %%% ## %% #
//                 %%% ## #@####
//                %%% ### ######
//       %%% ############# ####
//     %%🌸%% ##################
//    %%%%%% #####  ############
//   %%%%%%% ####################
//   %%%%%% ####################
//    %%🌸%%  #####      #######
//     %% %    ## #        ## #
//             ## #        ## #
//            ### ##      ### ##
// 
// Welcome!

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
// Create a variable that stores the total number of stalls
let totalStalls = 10;

// Function that logs how many stalls are available
// It gets everything it needs as parameters, so it works in any file
function stallsAvailable(totalNumberOfStalls, numberOfHorses) {
    let availableStalls = totalNumberOfStalls - numberOfHorses;
    console.log("There is room for " + availableStalls + " more horses.");
}

// Invoke the function with the total stalls and how many horses are in the stable
stallsAvailable(totalStalls, horses.length);

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
//------------------------- Bonus -------------------------//

// toggleLocation moves a horse inside if it's outside, and outside if it's inside
for (let horse of horses){
    horse.toggleLocation = function(){
        this.isHorseInside = !this.isHorseInside
    }
}


//------------------------- Day to day operations (Stables 3) -------------------------//


function findHorseThatLikes(treat){
    for (let horse of horses){
        if (horse.favSnack === treat){
            console.log(horse.name + " enjoys " + treat + "! .")
            break
        } else {
            console.log(horse.name + " looks at " + treat + " and runs away.")
        }
    }
}

console.log("--- Who wants a treat? ---")
findHorseThatLikes("Carrots")



function rideDay(horse){
    if (horse.hasSaddle){
        console.log(horse.name + " is ready to ride with you.")
    } else {
        console.log(horse.name + " isn't in the mood for a ride.")
    }
}

console.log("--- Ride Day ---")
for (let horse of horses){
    rideDay(horse)
}


function moveHorses(isGettingDark, horsesToMove){
    for (let horse of horsesToMove){
        if (isGettingDark){
            if (horse.isHorseInside === false){
                horse.toggleLocation()
                console.log("It's dark out there! " + horse.name + " go back inside now!")
            }
        } else {
            if (horse.isHorseInside === true){
                horse.toggleLocation()
                console.log(horse.name + " went outside to play in the sun.")
            }
        }
    }
}

console.log("--- Morning! ---")
moveHorses(false, [ash])
moveHorses(false, [pass, grass])



function feedHorses(horsesToFeed){
    for (let horse of horsesToFeed){
        if (!horse.isHorseInside){
            horse.toggleLocation()
            console.log(horse.name + " hears the feed bucket and runs inside!")
        }
    }

    for (let horse of horsesToFeed){
        if (horse.isHungry){
            console.log(horse.name + " pushing down some " + horse.favSnack + " down his throat.")
        } else {
            console.log(horse.name + " wasn't very hungry, but still eats some " + horse.favSnack + ".")
        }
        horse.isHungry = false
    }
}

console.log("--- Food! ---")
feedHorses(horses)


console.log("--- Afternoon ---")
moveHorses(false, [grass, cookie])


console.log("--- Bedtime! ---")
moveHorses(true, [ash, grass, pass, cookie])