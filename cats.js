// AWS Spooky Academy - Halloween Creature Data and Behaviors
const catBreeds = {
    tabby: {
        name: "Whiskers",
        breed: "Pumpkin Ghost",
        emoji: "🎃",
        image: "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=200&h=200&fit=crop",
        unlockRequirement: 0, // Always available
        personality: "Spooky and encouraging",
        description: "Your first haunted study buddy who loves AWS fundamentals!",
        happinessDecay: 0.5, // Points lost per hour
        feedCost: 50,
        treatCost: 30,
        petCost: 20
    },
    siamese: {
        name: "Azure",
        breed: "Phantom Spirit",
        emoji: "👻",
        image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=200&h=200&fit=crop",
        unlockRequirement: 50, // 50 correct answers
        personality: "Mysterious and intelligent",
        description: "A ghostly creature who excels at compute services!",
        happinessDecay: 0.7,
        feedCost: 60,
        treatCost: 35,
        petCost: 25
    },
    persian: {
        name: "Fluffy",
        breed: "Witch's Familiar",
        emoji: "🧙",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=200&h=200&fit=crop",
        unlockRequirement: 100, // 100 correct answers
        personality: "Magical and storage-focused",
        description: "A mystical expert in all things storage and databases!",
        happinessDecay: 0.8,
        feedCost: 70,
        treatCost: 40,
        petCost: 30
    },
    mainecoon: {
        name: "Network",
        breed: "Vampire Bat",
        emoji: "🦇",
        image: "https://images.unsplash.com/photo-1635241161466-541f065683ba?w=200&h=200&fit=crop",
        unlockRequirement: 200, // 200 correct answers
        personality: "Nocturnal and networking-savvy",
        description: "A night creature with vast knowledge of VPCs and networking!",
        happinessDecay: 1.0,
        feedCost: 80,
        treatCost: 45,
        petCost: 35
    },
    british: {
        name: "Secure",
        breed: "Skeleton Guardian",
        emoji: "💀",
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=200&h=200&fit=crop",
        unlockRequirement: 300, // 300 correct answers
        personality: "Protective and security-conscious",
        description: "A bony guardian who takes security and IAM very seriously!",
        happinessDecay: 1.2,
        feedCost: 90,
        treatCost: 50,
        petCost: 40
    },
    golden: {
        name: "Lambda",
        breed: "Demon Lord",
        emoji: "😈",
        image: "https://images.unsplash.com/photo-1587407627257-27672ab5b6e4?w=200&h=200&fit=crop",
        unlockRequirement: 500, // 500 correct answers
        personality: "Legendary and serverless",
        description: "A legendary demon that appears only when you master serverless!",
        happinessDecay: 1.5,
        feedCost: 100,
        treatCost: 60,
        petCost: 50
    }
};

const catAccessories = {
    collars: [
        { id: "red_collar", name: "Red Collar", emoji: "🔴", cost: 100 },
        { id: "blue_collar", name: "Blue Collar", emoji: "🔵", cost: 100 },
        { id: "gold_collar", name: "Gold Collar", emoji: "🟡", cost: 200 },
        { id: "diamond_collar", name: "Diamond Collar", emoji: "💎", cost: 500 }
    ],
    hats: [
        { id: "party_hat", name: "Party Hat", emoji: "🎉", cost: 150 },
        { id: "wizard_hat", name: "Wizard Hat", emoji: "🧙", cost: 300 },
        { id: "crown", name: "Royal Crown", emoji: "👑", cost: 1000 }
    ],
    toys: [
        { id: "yarn_ball", name: "Yarn Ball", emoji: "🧶", cost: 50 },
        { id: "mouse_toy", name: "Toy Mouse", emoji: "🐭", cost: 75 },
        { id: "laser_pointer", name: "Laser Pointer", emoji: "🔴", cost: 100 },
        { id: "cat_tree", name: "Cat Tree", emoji: "🌳", cost: 200 }
    ]
};

const achievements = {
    cat_whisperer: {
        id: "cat_whisperer",
        title: "Cat Whisperer",
        description: "Answer 10 questions correctly",
        icon: "🗣️",
        requirement: 10,
        type: "correct_answers",
        unlocked: false
    },
    treat_master: {
        id: "treat_master", 
        title: "Treat Master",
        description: "Give 50 treats to cats",
        icon: "🍪",
        requirement: 50,
        type: "treats_given",
        unlocked: false
    },
    cat_collector: {
        id: "cat_collector",
        title: "Cat Collector", 
        description: "Unlock 5 different cat breeds",
        icon: "🐱",
        requirement: 5,
        type: "cats_unlocked",
        unlocked: false
    },
    purr_fect_student: {
        id: "purr_fect_student",
        title: "Purr-fect Student",
        description: "Complete a full category with 80% accuracy",
        icon: "📚",
        requirement: 1,
        type: "category_mastery",
        unlocked: false
    },
    cat_cafe_owner: {
        id: "cat_cafe_owner",
        title: "Cat Cafe Owner",
        description: "Collect all available cats",
        icon: "🏠",
        requirement: 6,
        type: "all_cats",
        unlocked: false
    },
    feeding_frenzy: {
        id: "feeding_frenzy",
        title: "Feeding Frenzy",
        description: "Feed cats 100 times",
        icon: "🍽️",
        requirement: 100,
        type: "feeds_given",
        unlocked: false
    },
    petting_pro: {
        id: "petting_pro",
        title: "Petting Pro",
        description: "Pet cats 200 times",
        icon: "🤚",
        requirement: 200,
        type: "pets_given",
        unlocked: false
    },
    aws_expert: {
        id: "aws_expert",
        title: "AWS Expert",
        description: "Answer 1000 questions correctly",
        icon: "☁️",
        requirement: 1000,
        type: "correct_answers",
        unlocked: false
    }
};

// Cat behavior functions
const catBehaviors = {
    // Get random idle animation for a cat
    getIdleAnimation: function(catId) {
        const animations = ['😴', '🐱', '😸', '😺', '🙀', '😹'];
        return animations[Math.floor(Math.random() * animations.length)];
    },

    // Get reaction based on happiness level
    getHappinessReaction: function(happiness) {
        if (happiness >= 80) return '😻'; // Very happy
        if (happiness >= 60) return '😸'; // Happy
        if (happiness >= 40) return '🐱'; // Content
        if (happiness >= 20) return '😿'; // Sad
        return '🙀'; // Very sad
    },

    // Get feeding reaction
    getFeedingReaction: function() {
        const reactions = ['😋', '😸', '😻', '🤤'];
        return reactions[Math.floor(Math.random() * reactions.length)];
    },

    // Get petting reaction
    getPettingReaction: function() {
        const reactions = ['😻', '😸', '😺', '🥰'];
        return reactions[Math.floor(Math.random() * reactions.length)];
    },

    // Get treat reaction
    getTreatReaction: function() {
        const reactions = ['🤩', '😍', '😻', '🎉'];
        return reactions[Math.floor(Math.random() * reactions.length)];
    },

    // Get quiz encouragement
    getEncouragement: function(isCorrect) {
        if (isCorrect) {
            const messages = [
                "Purr-fect! Your cat is so proud! 🐱",
                "Meow-nificent! That's the right answer! 😸",
                "Great job! Your cat is doing happy zoomies! 🏃‍♂️",
                "Excellent! Your cat gives you head bonks! 💕",
                "Wonderful! Your cat is purring with pride! 😻"
            ];
            return messages[Math.floor(Math.random() * messages.length)];
        } else {
            const messages = [
                "That's okay! Even cats make mistakes. Try again! 😸",
                "No worries! Your cat still believes in you! 🐱",
                "Oops! But your cat loves you anyway! 💕",
                "Almost! Your cat knows you'll get it next time! 😺",
                "Don't worry! Every cat learns at their own pace! 🤗"
            ];
            return messages[Math.floor(Math.random() * messages.length)];
        }
    },

    // Calculate happiness decay over time
    calculateHappinessDecay: function(cat, lastUpdate) {
        const now = Date.now();
        const hoursElapsed = (now - lastUpdate) / (1000 * 60 * 60);
        const decay = cat.happinessDecay * hoursElapsed;
        return Math.max(0, cat.happiness - decay);
    },

    // Get cat status message
    getStatusMessage: function(happiness) {
        if (happiness >= 80) return "Very Happy! 😻";
        if (happiness >= 60) return "Happy 😸";
        if (happiness >= 40) return "Content 🐱";
        if (happiness >= 20) return "Needs attention 😿";
        return "Very sad 🙀";
    }
};

// Cat care actions
const catActions = {
    feedCat: function(catId, gameState) {
        const cat = gameState.cats[catId];
        const breed = catBreeds[cat.breed];
        
        if (gameState.points >= breed.feedCost) {
            gameState.points -= breed.feedCost;
            cat.happiness = Math.min(100, cat.happiness + 20);
            cat.lastFed = Date.now();
            
            // Update statistics
            gameState.stats.totalFeeds = (gameState.stats.totalFeeds || 0) + 1;
            
            return {
                success: true,
                message: `${cat.name} enjoyed the meal! 🍽️`,
                reaction: catBehaviors.getFeedingReaction(),
                animation: 'animate-feed'
            };
        }
        
        return {
            success: false,
            message: `Not enough points! Need ${breed.feedCost} points.`,
            reaction: '😿'
        };
    },

    giveTreat: function(catId, gameState) {
        const cat = gameState.cats[catId];
        const breed = catBreeds[cat.breed];
        
        if (gameState.points >= breed.treatCost) {
            gameState.points -= breed.treatCost;
            cat.happiness = Math.min(100, cat.happiness + 15);
            
            // Update statistics
            gameState.stats.totalTreats = (gameState.stats.totalTreats || 0) + 1;
            
            return {
                success: true,
                message: `${cat.name} loves the special treat! 🍪`,
                reaction: catBehaviors.getTreatReaction(),
                animation: 'animate-treat'
            };
        }
        
        return {
            success: false,
            message: `Not enough points! Need ${breed.treatCost} points.`,
            reaction: '😿'
        };
    },

    petCat: function(catId, gameState) {
        const cat = gameState.cats[catId];
        const breed = catBreeds[cat.breed];
        
        if (gameState.points >= breed.petCost) {
            gameState.points -= breed.petCost;
            cat.happiness = Math.min(100, cat.happiness + 10);
            
            // Update statistics
            gameState.stats.totalPets = (gameState.stats.totalPets || 0) + 1;
            
            return {
                success: true,
                message: `${cat.name} purrs contentedly! 🤚`,
                reaction: catBehaviors.getPettingReaction(),
                animation: 'animate-pet'
            };
        }
        
        return {
            success: false,
            message: `Not enough points! Need ${breed.petCost} points.`,
            reaction: '😿'
        };
    }
};

// Achievement checking
const achievementChecker = {
    checkAchievements: function(gameState) {
        const newUnlocks = [];
        
        Object.values(achievements).forEach(achievement => {
            if (!gameState.achievements[achievement.id]) {
                let unlocked = false;
                
                switch (achievement.type) {
                    case 'correct_answers':
                        unlocked = gameState.stats.totalCorrect >= achievement.requirement;
                        break;
                    case 'treats_given':
                        unlocked = (gameState.stats.totalTreats || 0) >= achievement.requirement;
                        break;
                    case 'feeds_given':
                        unlocked = (gameState.stats.totalFeeds || 0) >= achievement.requirement;
                        break;
                    case 'pets_given':
                        unlocked = (gameState.stats.totalPets || 0) >= achievement.requirement;
                        break;
                    case 'cats_unlocked':
                        unlocked = Object.keys(gameState.cats).length >= achievement.requirement;
                        break;
                    case 'all_cats':
                        unlocked = Object.keys(gameState.cats).length >= Object.keys(catBreeds).length;
                        break;
                }
                
                if (unlocked) {
                    gameState.achievements[achievement.id] = true;
                    newUnlocks.push(achievement);
                }
            }
        });
        
        return newUnlocks;
    }
};

// Cat unlocking system
const catUnlocker = {
    checkUnlocks: function(gameState) {
        const newCats = [];
        
        Object.entries(catBreeds).forEach(([breedId, breed]) => {
            if (!gameState.cats[breedId] && gameState.stats.totalCorrect >= breed.unlockRequirement) {
                // Unlock new cat
                gameState.cats[breedId] = {
                    id: breedId,
                    name: breed.name,
                    breed: breedId,
                    happiness: 80,
                    lastFed: Date.now(),
                    lastUpdate: Date.now(),
                    accessories: [],
                    unlocked: true
                };
                
                newCats.push(breed);
            }
        });
        
        return newCats;
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        catBreeds,
        catAccessories,
        achievements,
        catBehaviors,
        catActions,
        achievementChecker,
        catUnlocker
    };
}