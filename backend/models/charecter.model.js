const mongoose = require('mongoose');

const CharecterSchema = mongoose.Schema({
     name  : {
        type: String,
        required: true,
    },
     cost : {
        type:Number,
        required: true,
    },
     Power :{
        type: Number,
        required: true,
        description: "Overall strength level, impacts combat and quest success."
    },
     Stamina : {
        type :  Number ,
        required : true,
        description :  "Determines how long a character can engage in activities before needing rest", 
    },
     Agility : {
        type :  Number ,
        required : true,
        description :  "Affects dodge rate and speed in battles or quests", 
    },
     Intelligence : {
        type :  Number ,
        required : true,
        description :  "Enhances problem-solving abilities, useful for strategic quests", 
    },
     Defense : {
        type :  Number ,
        required : true,
        description :  "Reduces damage taken during encounters or battles",
    },
     Attack : {
        type :  Number ,
        required : true,
        description :  "Basic attack strength, determines how much damage they can inflict", 
    },
     Health : {
        type :  Number ,
        required : true,
        description :  "The total hit points (HP) of the character; when it reaches zero, the character is at risk of death", 
    },
     Charisma : {
        type :  Number ,
        required : true,
        description :  "Increases chances of successful breeding or interactions with other characters", 
    },
     Luck : {
        type :  Number ,
        required : true,
        description :  "Influences random events, such as finding rare items or achieving critical hits", 
    },
     Endurance : {
        type :  Number ,
        required : true,
        description :  "Affects how long a character can stay active on long quests or battles", 
    },
     Regeneration : {
        type :  Number ,
        required : true,
        description :  "Determines the rate at which health and stamina restore over time", 
    },
     Intuition : {
        type :  Number ,
        required : true,
        description :  "Enhances decision-making in unpredictable quest situations", 
    },
     Stealth : {
        type :  Number ,
        required : true,
        description :  "Ability to avoid detection in quests that require sneaking or hiding", 
    },
     Wisdom : {
        type :  Number ,
        required : true,
        description :  "Used for unlocking advanced quests or handling complex tasks", 
    }

})

module.exports = mongoose.model('User', userSchema);