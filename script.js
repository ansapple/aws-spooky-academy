// AWS Certificate Cat Game - Main Game Logic
console.log('🚀 SCRIPT.JS IS LOADING!');

class CatGameManager {
    constructor() {
        console.log('🔧 CatGameManager constructor starting...');

        try {
            this.gameState = {
                points: 0,
                currentCategory: null,
                currentQuestionIndex: 0,
                questions: [],
                selectedAnswer: null,
                cats: {},
                achievements: {},
                stats: {
                    totalCorrect: 0,
                    totalQuestions: 0,
                    totalFeeds: 0,
                    totalTreats: 0,
                    totalPets: 0,
                    categoriesCompleted: []
                },
                selectedCat: null
            };
            console.log('✅ Game state initialized');

            this.loadGameState();
            console.log('✅ Game state loaded');

            this.initializeGame();
            console.log('✅ Game initialized');

        } catch (error) {
            console.error('❌ Error in CatGameManager constructor:', error);
            throw error;
        }
    }

    // Initialize the game
    initializeGame() {
        console.log('🔧 Initializing game...');

        // Check if required data is available
        if (typeof catBreeds === 'undefined') {
            console.error('❌ catBreeds not found! Make sure cats.js is loaded.');
            throw new Error('catBreeds not available');
        }

        if (typeof questionBank === 'undefined') {
            console.error('❌ questionBank not found! Make sure questions.js is loaded.');
            throw new Error('questionBank not available');
        }

        console.log('✅ Required data objects found');

        // Ensure starter cat exists
        if (!this.gameState.cats.tabby) {
            console.log('🐱 Creating starter cat...');
            this.gameState.cats.tabby = {
                id: 'tabby',
                name: catBreeds.tabby.name,
                breed: 'tabby',
                happiness: 80,
                lastFed: Date.now(),
                lastUpdate: Date.now(),
                accessories: [],
                unlocked: true
            };
            console.log('✅ Starter cat created:', this.gameState.cats.tabby);
        }

        this.updateUI();
        console.log('✅ UI updated');

        this.startIdleAnimations();
        console.log('✅ Idle animations started');

        this.showWelcome();
        console.log('✅ Welcome screen shown');
    }

    // Save game state to localStorage
    saveGameState() {
        localStorage.setItem('catGameState', JSON.stringify(this.gameState));
    }

    // Load game state from localStorage
    loadGameState() {
        const saved = localStorage.getItem('catGameState');
        if (saved) {
            const loadedState = JSON.parse(saved);
            this.gameState = { ...this.gameState, ...loadedState };
        }
    }

    // Update UI elements
    updateUI() {
        document.getElementById('points').textContent = this.gameState.points;
        document.getElementById('correct-count').textContent = this.gameState.stats.totalCorrect;
        document.getElementById('cat-count').textContent = Object.keys(this.gameState.cats).length;
    }

    // Start category
    startCategory(category) {
        console.log('🎯 Starting category:', category);

        try {
            // Check if category exists in question bank
            if (!questionBank[category]) {
                console.error('❌ Category not found in questionBank:', category);
                alert(`Category "${category}" not found! Available categories: ${Object.keys(questionBank).join(', ')}`);
                return;
            }

            this.gameState.currentCategory = category;
            this.gameState.currentQuestionIndex = 0;
            this.gameState.questions = this.shuffleArray([...questionBank[category]]);

            console.log('✅ Questions loaded:', this.gameState.questions.length);

            // Check if quiz screen elements exist
            const categoryElement = document.getElementById('current-category');
            if (!categoryElement) {
                console.error('❌ current-category element not found');
                alert('Quiz screen not properly loaded. Please refresh the page.');
                return;
            }

            categoryElement.textContent = this.getCategoryDisplayName(category);
            this.showScreen('quiz-screen');
            this.displayQuestion();

            console.log('✅ Quiz started successfully');

        } catch (error) {
            console.error('❌ Error starting category:', error);
            alert(`Error starting quiz: ${error.message}`);
        }
    }

    // Get display name for category
    getCategoryDisplayName(category) {
        const names = {
            fundamentals: 'AWS Fundamentals',
            compute: 'EC2 & Compute',
            storage: 'Storage Services',
            networking: 'Networking & VPC',
            security: 'Security & IAM',
            serverless: 'Serverless'
        };
        return names[category] || category;
    }

    // Shuffle array
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Display current question
    displayQuestion() {
        const question = this.gameState.questions[this.gameState.currentQuestionIndex];
        const questionCounter = document.getElementById('question-counter');
        const progressFill = document.getElementById('progress-fill');
        const questionText = document.getElementById('question-text');
        const answersGrid = document.getElementById('answers-grid');

        // Update progress
        const progress = ((this.gameState.currentQuestionIndex) / this.gameState.questions.length) * 100;
        progressFill.style.width = `${progress}%`;
        questionCounter.textContent = `Question ${this.gameState.currentQuestionIndex + 1} of ${this.gameState.questions.length}`;

        // Display question
        questionText.textContent = question.question;

        // Clear previous answers
        answersGrid.innerHTML = '';
        this.gameState.selectedAnswer = null;

        // Create answer options
        question.answers.forEach((answer, index) => {
            const answerBtn = document.createElement('button');
            answerBtn.className = 'answer-option';
            answerBtn.textContent = answer;
            answerBtn.onclick = () => this.selectAnswer(index);
            answersGrid.appendChild(answerBtn);
        });

        // Reset submit button
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submit Answer';

        // Hide feedback
        document.getElementById('feedback-area').style.display = 'none';

        // Update cat mood
        this.updateCatMood('thinking');
    }

    // Select an answer
    selectAnswer(index) {
        // Remove previous selections
        document.querySelectorAll('.answer-option').forEach(btn => {
            btn.classList.remove('selected');
        });

        // Mark selected answer
        document.querySelectorAll('.answer-option')[index].classList.add('selected');
        this.gameState.selectedAnswer = index;

        // Enable submit button
        document.getElementById('submit-btn').disabled = false;
    }

    // Submit answer
    submitAnswer() {
        if (this.gameState.selectedAnswer === null) return;

        const question = this.gameState.questions[this.gameState.currentQuestionIndex];
        const isCorrect = this.gameState.selectedAnswer === question.correct;
        const answerButtons = document.querySelectorAll('.answer-option');

        // Update statistics
        this.gameState.stats.totalQuestions++;
        if (isCorrect) {
            this.gameState.stats.totalCorrect++;
            this.gameState.points += 10;
        }

        // Show correct/incorrect styling
        answerButtons[question.correct].classList.add('correct');
        if (!isCorrect) {
            answerButtons[this.gameState.selectedAnswer].classList.add('incorrect');
        }

        // Update UI
        this.updateUI();

        // Show feedback
        this.showFeedback(isCorrect, question);

        // Check for unlocks
        this.checkUnlocks();

        // Save progress
        this.saveGameState();
    }

    // Show feedback
    showFeedback(isCorrect, question) {
        const feedbackArea = document.getElementById('feedback-area');
        const catReaction = document.getElementById('cat-reaction');
        const feedbackMessage = document.getElementById('feedback-message');
        const explanation = document.getElementById('explanation');

        // Get cat reaction
        const reaction = isCorrect ? catBehaviors.getPettingReaction() : catBehaviors.getIdleAnimation();
        catReaction.textContent = reaction;

        // Set feedback message
        feedbackMessage.textContent = catBehaviors.getEncouragement(isCorrect);

        // Set explanation
        explanation.textContent = question.explanation;

        // Show feedback area
        feedbackArea.style.display = 'block';

        // Update cat mood
        this.updateCatMood(isCorrect ? 'happy' : 'encouraging');

        // Play sound effect
        this.playSound(isCorrect ? 'purr' : 'meow');
    }

    // Next question
    nextQuestion() {
        this.gameState.currentQuestionIndex++;

        if (this.gameState.currentQuestionIndex >= this.gameState.questions.length) {
            this.showResults();
        } else {
            this.displayQuestion();
        }
    }

    // Show results
    showResults() {
        const correctAnswers = this.gameState.questions.filter((_, index) => {
            // This is a simplified check - in a real implementation, you'd track answers
            return Math.random() > 0.3; // Simulate some correct answers
        }).length;

        const pointsEarned = correctAnswers * 10;

        document.getElementById('final-correct').textContent = correctAnswers;
        document.getElementById('points-earned').textContent = pointsEarned;

        // Check for new unlocks
        const newCats = catUnlocker.checkUnlocks(this.gameState);
        const newAchievements = achievementChecker.checkAchievements(this.gameState);

        let unlockText = '';
        if (newCats.length > 0) {
            unlockText += `New cats: ${newCats.map(cat => cat.name).join(', ')}! `;
        }
        if (newAchievements.length > 0) {
            unlockText += `New achievements: ${newAchievements.map(ach => ach.title).join(', ')}!`;
        }
        if (!unlockText) {
            unlockText = 'Keep studying to unlock more cats!';
        }

        document.getElementById('new-unlocks').textContent = unlockText;

        this.showScreen('results-screen');
        this.saveGameState();
    }

    // Check for unlocks
    checkUnlocks() {
        const newCats = catUnlocker.checkUnlocks(this.gameState);
        const newAchievements = achievementChecker.checkAchievements(this.gameState);

        // Show notifications for new unlocks
        if (newCats.length > 0) {
            this.showNotification(`New cat unlocked: ${newCats[0].name}! 🐱`);
        }

        if (newAchievements.length > 0) {
            this.showNotification(`Achievement unlocked: ${newAchievements[0].title}! 🏆`);
        }
    }

    // Show notification
    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #fd79a8, #e84393);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideIn 0.5s ease;
        `;

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.5s ease';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }

    // Update cat mood
    updateCatMood(mood) {
        const catMoodElement = document.getElementById('cat-mood');
        const quizCat = document.getElementById('quiz-cat');

        switch (mood) {
            case 'happy':
                catMoodElement.textContent = '😻';
                quizCat.textContent = '😸';
                break;
            case 'encouraging':
                catMoodElement.textContent = '😺';
                quizCat.textContent = '🐱';
                break;
            case 'thinking':
                catMoodElement.textContent = '🤔';
                quizCat.textContent = '🐱';
                break;
            default:
                catMoodElement.textContent = '😊';
                quizCat.textContent = '🐱';
        }
    }

    // Play sound effect
    playSound(type) {
        try {
            const audio = document.getElementById(type === 'purr' ? 'purr-sound' : 'meow-sound');
            if (audio) {
                audio.currentTime = 0;
                audio.play().catch(() => { }); // Ignore autoplay restrictions
            }
        } catch (e) {
            // Ignore audio errors
        }
    }

    // Show cat gallery
    showCatGallery() {
        this.renderCatGallery();
        this.showScreen('cat-gallery-screen');
    }

    // Render cat gallery
    renderCatGallery() {
        const catsGrid = document.getElementById('cats-display');
        if (!catsGrid) return;

        catsGrid.innerHTML = '';

        Object.entries(catBreeds).forEach(([breedId, breed]) => {
            const catCard = document.createElement('div');
            catCard.className = 'cat-card';

            const isUnlocked = this.gameState.cats[breedId];
            const isSelected = this.gameState.selectedCat === breedId;

            if (!isUnlocked) {
                catCard.classList.add('locked');
            }
            if (isSelected) {
                catCard.classList.add('selected');
            }

            const happiness = isUnlocked ? this.gameState.cats[breedId].happiness : 0;

            catCard.innerHTML = `
                <div class="cat-avatar ${!isUnlocked ? 'locked' : ''}">
                    ${isUnlocked ?
                    `<img src="${breed.image}" alt="${breed.name}" class="cat-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                         <div class="cat-image-loading" style="display: none;">${breed.emoji}</div>`
                    :
                    `<div class="cat-image-loading">🔒</div>`
                }
                </div>
                <div class="cat-name">${breed.name}</div>
                <div class="cat-breed">${breed.breed}</div>
                <div class="cat-happiness">${isUnlocked ? `Happiness: ${Math.round(happiness)}%` : `Unlock at ${breed.unlockRequirement} correct answers`}</div>
            `;

            if (isUnlocked) {
                catCard.onclick = () => this.selectCat(breedId);
            }

            catsGrid.appendChild(catCard);
        });
    }

    // Select cat
    selectCat(catId) {
        this.gameState.selectedCat = catId;
        this.renderCatGallery();
    }

    // Feed selected cat
    feedSelectedCat() {
        if (!this.gameState.selectedCat) {
            this.showNotification('Please select a cat first! 🐱');
            return;
        }

        const result = catActions.feedCat(this.gameState.selectedCat, this.gameState);
        this.showNotification(result.message);

        if (result.success) {
            this.updateUI();
            this.renderCatGallery();
            this.animateCat(result.animation);
        }

        this.saveGameState();
    }

    // Give treat to selected cat
    giveTreat() {
        if (!this.gameState.selectedCat) {
            this.showNotification('Please select a cat first! 🐱');
            return;
        }

        const result = catActions.giveTreat(this.gameState.selectedCat, this.gameState);
        this.showNotification(result.message);

        if (result.success) {
            this.updateUI();
            this.renderCatGallery();
            this.animateCat(result.animation);
        }

        this.saveGameState();
    }

    // Pet selected cat
    petCat() {
        if (!this.gameState.selectedCat) {
            this.showNotification('Please select a cat first! 🐱');
            return;
        }

        const result = catActions.petCat(this.gameState.selectedCat, this.gameState);
        this.showNotification(result.message);

        if (result.success) {
            this.updateUI();
            this.renderCatGallery();
            this.animateCat(result.animation);
            this.playSound('purr');
        }

        this.saveGameState();
    }

    // Animate cat
    animateCat(animationClass) {
        const selectedCard = document.querySelector('.cat-card.selected .cat-avatar');
        if (selectedCard) {
            selectedCard.classList.add(animationClass);
            setTimeout(() => {
                selectedCard.classList.remove(animationClass);
            }, 1000);
        }
    }

    // Show achievements
    showAchievements() {
        this.renderAchievements();
        this.showScreen('achievements-screen');
    }

    // Render achievements
    renderAchievements() {
        const achievementsGrid = document.getElementById('achievements-grid');
        achievementsGrid.innerHTML = '';

        Object.values(achievements).forEach(achievement => {
            const achievementCard = document.createElement('div');
            achievementCard.className = 'achievement-card';

            const isUnlocked = this.gameState.achievements[achievement.id];
            if (isUnlocked) {
                achievementCard.classList.add('unlocked');
            }

            achievementCard.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-title">${achievement.title}</div>
                <div class="achievement-description">${achievement.description}</div>
            `;

            achievementsGrid.appendChild(achievementCard);
        });
    }

    // Show screen
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    // Show welcome screen
    showWelcome() {
        this.showScreen('welcome-screen');
    }

    // Start idle animations
    startIdleAnimations() {
        setInterval(() => {
            const mainCat = document.getElementById('main-cat');
            if (mainCat) {
                mainCat.textContent = catBehaviors.getIdleAnimation();
            }
        }, 3000);
    }
}

// Global functions for HTML onclick handlers
let gameManager;

// Make functions available globally
window.startCategory = function (category) {
    console.log('startCategory called with:', category);
    if (gameManager && gameManager.startCategory) {
        gameManager.startCategory(category);
    } else {
        console.error('gameManager not ready, trying fallback...');
        // Fallback: try to initialize if not ready
        if (typeof initializeGameManager === 'function') {
            initializeGameManager();
            setTimeout(() => {
                if (gameManager && gameManager.startCategory) {
                    gameManager.startCategory(category);
                }
            }, 500);
        }
    }
};

window.submitAnswer = function () {
    console.log('submitAnswer called');
    if (gameManager && gameManager.submitAnswer) {
        gameManager.submitAnswer();
    } else {
        console.error('gameManager not ready');
    }
};

window.nextQuestion = function () {
    console.log('nextQuestion called');
    if (gameManager && gameManager.nextQuestion) {
        gameManager.nextQuestion();
    } else {
        console.error('gameManager not ready');
    }
};

window.showWelcome = function () {
    console.log('showWelcome called');
    if (gameManager && gameManager.showWelcome) {
        gameManager.showWelcome();
    } else {
        console.error('gameManager not ready');
    }
};

window.showCatGallery = function () {
    console.log('🐱 showCatGallery called - button clicked!');
    if (gameManager && gameManager.showCatGallery) {
        console.log('✅ Using main gameManager');
        gameManager.showCatGallery();
    } else {
        console.log('⚠️ gameManager not ready, using fallback');
        // Fallback: show cat gallery directly
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => screen.classList.remove('active'));
        const catGalleryScreen = document.getElementById('cat-gallery-screen');
        if (catGalleryScreen) {
            catGalleryScreen.classList.add('active');
            console.log('✅ Cat gallery screen shown');
        } else {
            console.error('❌ Cat gallery screen not found');
        }
    }
};

window.showAchievements = function () {
    console.log('showAchievements called');
    if (gameManager && gameManager.showAchievements) {
        gameManager.showAchievements();
    } else {
        console.error('gameManager not ready');
    }
};

window.feedSelectedCat = function () {
    console.log('feedSelectedCat called');
    if (gameManager && gameManager.feedSelectedCat) {
        gameManager.feedSelectedCat();
    } else {
        console.error('gameManager not ready');
    }
};

window.giveTreat = function () {
    console.log('giveTreat called');
    if (gameManager && gameManager.giveTreat) {
        gameManager.giveTreat();
    } else {
        console.error('gameManager not ready');
    }
};

window.petCat = function () {
    console.log('petCat called');
    if (gameManager && gameManager.petCat) {
        gameManager.petCat();
    } else {
        console.error('gameManager not ready');
    }
};

window.restartGame = function () {
    console.log('restartGame called');
    if (gameManager && gameManager.showWelcome) {
        gameManager.showWelcome();
    } else {
        console.error('gameManager not ready');
    }
};

// Simple test function
window.testFunction = function () {
    alert('JavaScript is working! 🎉');
    console.log('Test function called successfully');
};

// Test if functions are working immediately
console.log('🔧 Script.js loaded, testing function availability...');
console.log('- showCatGallery:', typeof window.showCatGallery);
console.log('- showWelcome:', typeof window.showWelcome);
console.log('- testFunction:', typeof window.testFunction);

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', function () {
    console.log('🐱 DOM loaded, initializing Cat Game Manager...');

    // Test functions again
    console.log('🔧 Function availability after DOM load:');
    console.log('- showCatGallery:', typeof window.showCatGallery);
    console.log('- showWelcome:', typeof window.showWelcome);

    // Wait a bit for all scripts to load
    setTimeout(() => {
        initializeGameManager();
    }, 100);
});

// Also try to initialize when window loads (fallback)
window.addEventListener('load', function () {
    console.log('🌐 Window loaded');
    if (!gameManager) {
        console.log('🔄 Fallback initialization...');
        setTimeout(() => {
            initializeGameManager();
        }, 200);
    }
});

function initializeGameManager() {
    // Check if required data objects exist
    console.log('🔧 Checking data availability...');
    console.log('- questionBank:', typeof questionBank !== 'undefined' ? '✅' : '❌');
    console.log('- catBreeds:', typeof catBreeds !== 'undefined' ? '✅' : '❌');
    console.log('- catBehaviors:', typeof catBehaviors !== 'undefined' ? '✅' : '❌');
    console.log('- catActions:', typeof catActions !== 'undefined' ? '✅' : '❌');

    // Check if required elements exist
    const requiredElements = ['points', 'correct-count', 'cat-count', 'welcome-screen'];
    const missingElements = requiredElements.filter(id => !document.getElementById(id));

    if (missingElements.length > 0) {
        console.error('❌ Missing required elements:', missingElements);
        createFallbackFunctions();
        return;
    }

    // Check if data objects are available
    if (typeof questionBank === 'undefined' || typeof catBreeds === 'undefined') {
        console.error('❌ Required data objects not available');
        createFallbackFunctions();
        return;
    }

    try {
        // Initialize game manager
        gameManager = new CatGameManager();
        console.log('✅ Game Manager initialized successfully');

        // Test that functions are available
        console.log('🔧 Testing function availability:');
        console.log('- startCategory:', typeof window.startCategory);
        console.log('- showCatGallery:', typeof window.showCatGallery);
        console.log('- showAchievements:', typeof window.showAchievements);

        // Test a simple function call
        if (gameManager && gameManager.updateUI) {
            gameManager.updateUI();
            console.log('✅ UI update test successful');
        }

    } catch (error) {
        console.error('❌ Error initializing game manager:', error);
        console.error('Stack trace:', error.stack);

        // Fallback: create simple functions if game manager fails
        console.log('🔄 Creating fallback functions...');
        createFallbackFunctions();
    }

    // Add CSS for notifications
    addNotificationStyles();

    console.log('🎉 Cat Game initialization complete');
}

function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        .notification {
            font-weight: bold;
            font-size: 1rem;
        }
    `;
    document.head.appendChild(style);
}

// Fallback functions in case main game manager fails
function createFallbackFunctions() {
    console.log('🔧 Creating fallback navigation functions...');

    // Simple game state for fallback
    let fallbackState = {
        points: 100,
        correct: 0,
        cats: 1
    };

    // Simple screen management
    function hideAllScreens() {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
    }

    function showScreen(screenId) {
        hideAllScreens();
        const screen = document.getElementById(screenId);
        if (screen) {
            screen.classList.add('active');
            console.log('📺 Showing screen:', screenId);
        } else {
            console.error('❌ Screen not found:', screenId);
        }
    }

    function updateFallbackUI() {
        const pointsEl = document.getElementById('points');
        const correctEl = document.getElementById('correct-count');
        const catsEl = document.getElementById('cat-count');

        if (pointsEl) pointsEl.textContent = fallbackState.points;
        if (correctEl) correctEl.textContent = fallbackState.correct;
        if (catsEl) catsEl.textContent = fallbackState.cats;
    }

    // Override global functions with working fallbacks
    window.startCategory = function (category) {
        console.log('🎯 Starting category (fallback):', category);

        try {
            // Check if we have question data
            if (typeof questionBank !== 'undefined' && questionBank[category]) {
                console.log('✅ Questions available for', category);
                showScreen('quiz-screen');

                // Show a sample question
                const categoryEl = document.getElementById('current-category');
                if (categoryEl) {
                    const categoryNames = {
                        fundamentals: 'AWS Fundamentals',
                        compute: 'EC2 & Compute',
                        storage: 'Storage Services',
                        networking: 'Networking & VPC',
                        security: 'Security & IAM',
                        serverless: 'Serverless'
                    };
                    categoryEl.textContent = categoryNames[category] || category;
                }

                const questionEl = document.getElementById('question-text');
                const answersGrid = document.getElementById('answers-grid');

                if (questionEl && questionBank[category][0]) {
                    const question = questionBank[category][0];
                    questionEl.textContent = question.question;

                    // Clear and populate answers
                    if (answersGrid) {
                        answersGrid.innerHTML = '';
                        question.answers.forEach((answer, index) => {
                            const answerBtn = document.createElement('button');
                            answerBtn.className = 'answer-option';
                            answerBtn.textContent = answer;
                            answerBtn.onclick = () => {
                                // Simple answer selection
                                document.querySelectorAll('.answer-option').forEach(btn => {
                                    btn.classList.remove('selected');
                                });
                                answerBtn.classList.add('selected');

                                // Enable submit button
                                const submitBtn = document.getElementById('submit-btn');
                                if (submitBtn) {
                                    submitBtn.disabled = false;
                                }
                            };
                            answersGrid.appendChild(answerBtn);
                        });
                    }
                }

            } else {
                console.error('Question bank not available for category:', category);
                alert(`Starting ${category} quiz! 🐱\n\nQuestions are loading...\nPlease refresh the page if this persists.`);
            }
        } catch (error) {
            console.error('Error in fallback startCategory:', error);
            alert('Error starting quiz. Please refresh the page.');
        }
    };

    window.showCatGallery = function () {
        console.log('🏠 Showing cat gallery (fallback)');
        showScreen('cat-gallery-screen');

        // Populate with basic cat if data is available
        const catsDisplay = document.getElementById('cats-display');
        if (catsDisplay && typeof catBreeds !== 'undefined') {
            catsDisplay.innerHTML = `
                <div class="cat-card selected">
                    <div class="cat-avatar">
                        <img src="${catBreeds.tabby.image}" alt="Whiskers" class="cat-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div class="cat-image-loading" style="display: none;">🐱</div>
                    </div>
                    <div class="cat-name">${catBreeds.tabby.name}</div>
                    <div class="cat-breed">${catBreeds.tabby.breed}</div>
                    <div class="cat-happiness">Happiness: 80%</div>
                </div>
            `;
        } else {
            console.log('⚠️ catBreeds not available, showing basic cat');
            if (catsDisplay) {
                catsDisplay.innerHTML = `
                    <div class="cat-card selected">
                        <div class="cat-avatar">
                            <div class="cat-image-loading">🐱</div>
                        </div>
                        <div class="cat-name">Whiskers</div>
                        <div class="cat-breed">Orange Tabby</div>
                        <div class="cat-happiness">Happiness: 80%</div>
                    </div>
                `;
            }
        }
    };

    window.showAchievements = function () {
        console.log('🏆 Showing achievements (fallback)');
        showScreen('achievements-screen');
    };

    window.showWelcome = function () {
        console.log('🏡 Showing welcome screen (fallback)');
        showScreen('welcome-screen');
    };

    window.feedSelectedCat = function () {
        console.log('🍽️ Feed cat (fallback)');
        if (fallbackState.points >= 50) {
            fallbackState.points -= 50;
            updateFallbackUI();
            alert('🍽️ Whiskers enjoyed the meal! Meow! 😸');
        } else {
            alert('😿 Not enough points! You need 50 points to feed your cat.');
        }
    };

    window.giveTreat = function () {
        console.log('🍪 Give treat (fallback)');
        if (fallbackState.points >= 30) {
            fallbackState.points -= 30;
            updateFallbackUI();
            alert('🍪 Whiskers loves the treat! *purr* 😻');
        } else {
            alert('😿 Not enough points! You need 30 points for treats.');
        }
    };

    window.petCat = function () {
        console.log('🤚 Pet cat (fallback)');
        if (fallbackState.points >= 20) {
            fallbackState.points -= 20;
            updateFallbackUI();
            alert('🤚 Whiskers purrs happily! 🥰');
        } else {
            alert('😿 Not enough points! You need 20 points to pet your cat.');
        }
    };

    window.submitAnswer = function () {
        console.log('📝 Submit answer (fallback)');

        const selectedAnswer = document.querySelector('.answer-option.selected');
        if (selectedAnswer) {
            // Simple feedback
            alert('Answer submitted! 🐱\n\nThis is a basic fallback mode.\nPlease refresh the page for full functionality.');

            // Disable submit button
            const submitBtn = document.getElementById('submit-btn');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Answer Submitted';
            }
        } else {
            alert('Please select an answer first! 🐱');
        }
    };

    window.nextQuestion = function () {
        console.log('➡️ Next question (fallback)');
        alert('Moving to next question! This is fallback mode - please refresh the page for full functionality.');
    };

    // Initialize fallback UI
    updateFallbackUI();

    console.log('✅ Fallback functions created and working');
}


