// Global Settings
const IMAGE_DISPLAY_DURATION = 7; // Duration in seconds for displaying each image
const IMAGE_DISPLAY_DURATION_MS = IMAGE_DISPLAY_DURATION * 1000; // Duration in milliseconds

class Game {
    constructor() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.questions = [...gameData];
        this.mediaTimer = null;
        this.currentWizardStep = 1;
        this.openedGifts = new Set();
        this.countdownInterval = null;
        this.initializeElements();
        this.addEventListeners();
        this.hasAnswered = false;
    }

    initializeElements() {
        // Wizard elements
        this.wizardSteps = document.querySelectorAll('.wizard-step');
        this.progressSteps = document.querySelectorAll('.progress-step');
        this.nextStepButtons = document.querySelectorAll('.next-step');
        this.prevStepButtons = document.querySelectorAll('.prev-step');
        this.skipWizardButton = document.getElementById('skip-wizard-button');

        // Screens
        this.instructionsScreen = document.getElementById('instructions-screen');
        this.questionScreen = document.getElementById('question-screen');
        this.finalScreen = document.getElementById('final-screen');
        this.bonusScreen = document.getElementById('bonus-screen');

        // Question elements
        this.mediaContainer = document.getElementById('media-container');
        this.questionImage = document.getElementById('question-image');
        this.questionVideo = document.getElementById('question-video');
        this.questionContainer = document.getElementById('question-container');
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.bonusIndicator = document.getElementById('bonus-indicator');
        this.viewMediaButton = document.getElementById('view-media-button');
        this.nextButton = document.getElementById('next-button');

        // Final screen elements
        this.finalScore = document.getElementById('final-score');
        
        // Buttons
        this.startButton = document.getElementById('start-button');
        this.restartButton = document.getElementById('restart-button');
        this.bonusContinueButton = document.getElementById('bonus-continue-button');

        // Gift elements
        this.giftBoxes = document.querySelectorAll('.gift-box');
        this.giftRevealScreen = document.getElementById('gift-reveal-screen');
        this.giftRevealEmoji = document.querySelector('.gift-reveal-emoji');
        this.giftRevealTitle = document.querySelector('.gift-reveal-title');
        this.giftRevealDescription = document.querySelector('.gift-reveal-description');
        this.backToGiftsButton = document.querySelector('.back-to-gifts');

        // Timer elements
        this.timerContainer = document.getElementById('timer-container');
        this.timerSeconds = document.getElementById('timer-seconds');

        // Sound elements
        this.correctSound = document.getElementById('correct-sound');
        this.incorrectSound = document.getElementById('incorrect-sound');
    }

    addEventListeners() {
        // Wizard navigation
        this.nextStepButtons.forEach(button => {
            button.addEventListener('click', () => this.nextWizardStep());
        });

        this.prevStepButtons.forEach(button => {
            button.addEventListener('click', () => this.prevWizardStep());
        });

        // Game buttons
        this.startButton.addEventListener('click', () => this.startGame());
        this.restartButton.addEventListener('click', () => this.restartGame());
        this.nextButton.addEventListener('click', () => this.showNextQuestion());
        this.viewMediaButton.addEventListener('click', () => this.showMedia());
        this.bonusContinueButton.addEventListener('click', () => {
            this.switchScreen(this.bonusScreen, this.questionScreen);
            this.showQuestion(this.currentQuestionIndex);
        });

        // Gift event listeners
        this.giftBoxes.forEach(box => {
            box.addEventListener('click', () => this.handleGiftClick(box));
        });

        this.backToGiftsButton.addEventListener('click', () => {
            this.switchScreen(this.giftRevealScreen, this.finalScreen);
        });

        // Skip wizard
        this.skipWizardButton.addEventListener('click', () => this.startGame());
    }

    nextWizardStep() {
        if (this.currentWizardStep < this.wizardSteps.length) {
            this.wizardSteps[this.currentWizardStep - 1].classList.remove('active');
            this.progressSteps[this.currentWizardStep - 1].classList.remove('active');
            
            this.currentWizardStep++;
            
            this.wizardSteps[this.currentWizardStep - 1].classList.add('active');
            this.progressSteps[this.currentWizardStep - 1].classList.add('active');
        }
    }

    prevWizardStep() {
        if (this.currentWizardStep > 1) {
            this.wizardSteps[this.currentWizardStep - 1].classList.remove('active');
            this.progressSteps[this.currentWizardStep - 1].classList.remove('active');
            
            this.currentWizardStep--;
            
            this.wizardSteps[this.currentWizardStep - 1].classList.add('active');
            this.progressSteps[this.currentWizardStep - 1].classList.add('active');
        }
    }

    startGame() {
        this.switchScreen(this.instructionsScreen, this.questionScreen);
        this.showQuestion(this.currentQuestionIndex);
    }

    restartGame() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.questions = [...gameData];
        this.currentWizardStep = 1;
        this.openedGifts.clear();
        
        // Reset wizard state
        this.wizardSteps.forEach(step => step.classList.remove('active'));
        this.progressSteps.forEach(step => step.classList.remove('active'));
        this.wizardSteps[0].classList.add('active');
        this.progressSteps[0].classList.add('active');

        // Reset gifts
        this.giftBoxes.forEach(box => {
            box.classList.remove('opened');
            box.querySelector('.gift-status').textContent = 'טרם נפתח';
        });
        
        this.switchScreen(this.finalScreen, this.instructionsScreen);
    }

    switchScreen(fromScreen, toScreen) {
        fromScreen.classList.remove('active');
        toScreen.classList.add('active');
    }

    showQuestion(index) {
        const question = this.questions[index];
        if (!question) return;

        // Reset UI state
        this.questionContainer.classList.remove('visible');
        this.questionContainer.classList.add('hidden');
        this.viewMediaButton.classList.add('hidden');
        this.nextButton.classList.add('hidden');
        this.bonusIndicator.classList.add('hidden');
        this.timerContainer.classList.remove('visible');

        // Show bonus indicator if applicable
        if (question.isBonus) {
            this.bonusIndicator.classList.remove('hidden');
        }

        // Setup media
        this.setupMedia(question.media);

        // Start timer
        this.startTimer();

        // Show media for IMAGE_DISPLAY_DURATION seconds then show question
        clearTimeout(this.mediaTimer);
        this.mediaTimer = setTimeout(() => {
            this.hideMedia();
            this.showQuestionContent(question);
        }, IMAGE_DISPLAY_DURATION_MS);
    }

    setupMedia(media) {
        this.mediaContainer.classList.remove('hidden');
        this.questionImage.classList.add('hidden');
        this.questionVideo.classList.add('hidden');

        if (media.type === 'image') {
            this.questionImage.src = media.src;
            this.questionImage.classList.remove('hidden');
        } else if (media.type === 'video') {
            this.questionVideo.src = media.src;
            this.questionVideo.classList.remove('hidden');
            this.questionVideo.play();
        }
    }

    startTimer() {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }
        
        let seconds = IMAGE_DISPLAY_DURATION;
        this.timerSeconds.textContent = `${seconds} שניות`;
        this.timerContainer.classList.add('visible');
        
        this.countdownInterval = setInterval(() => {
            seconds--;
            if (seconds > 0) {
                this.timerSeconds.textContent = `${seconds} שניות`;
            } else {
                this.timerSeconds.textContent = '0 שניות';
                clearInterval(this.countdownInterval);
                this.timerContainer.classList.remove('visible');
            }
        }, 1000);
    }

    hideMedia() {
        this.mediaContainer.classList.add('hidden');
        this.timerContainer.classList.remove('visible');
        clearInterval(this.countdownInterval);
        if (this.questionVideo.src) {
            this.questionVideo.pause();
            this.questionVideo.currentTime = 0;
        }
    }

    showMedia() {
        const question = this.questions[this.currentQuestionIndex];
        this.mediaContainer.classList.remove('hidden');
        this.setupMedia(question.media);
    }

    showQuestionContent(question) {
        this.questionText.textContent = question.title;
        this.optionsContainer.innerHTML = '';
        this.hasAnswered = false;
        
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = option.text;
            button.addEventListener('click', () => {
                if (!this.hasAnswered) {
                    this.handleAnswer(option.id);
                }
            });
            this.optionsContainer.appendChild(button);
        });

        this.questionContainer.classList.remove('hidden');
        this.questionContainer.classList.add('visible');
    }

    handleAnswer(selectedAnswerId) {
        if (this.hasAnswered) return;
        
        this.hasAnswered = true;
        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = selectedAnswerId === question.correctAnswerId;
        const points = question.isBonus ? 20 : 10;

        // Play sound effect
        if (isCorrect) {
            this.playSound(this.correctSound);
            this.score += points;
        } else {
            this.playSound(this.incorrectSound);
        }

        // Visual feedback
        const buttons = this.optionsContainer.getElementsByClassName('option-button');
        Array.from(buttons).forEach(button => {
            button.disabled = true;
            const buttonOption = question.options.find(opt => opt.text === button.textContent);
            if (buttonOption.id === selectedAnswerId) {
                button.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
            if (!isCorrect && buttonOption.id === question.correctAnswerId) {
                button.classList.add('correct');
            }
        });

        // Show media button and next button
        this.viewMediaButton.classList.remove('hidden');
        this.nextButton.classList.remove('hidden');
    }

    playSound(audioElement) {
        if (audioElement) {
            audioElement.currentTime = 0; // Reset sound to start
            audioElement.play().catch(error => {
                console.log('Sound playback failed:', error);
            });
        }
    }

    showNextQuestion() {
        this.currentQuestionIndex++;
        
        // Check if next question exists and is a bonus question
        if (this.currentQuestionIndex < this.questions.length) {
            const nextQuestion = this.questions[this.currentQuestionIndex];
            if (nextQuestion.isBonus) {
                this.switchScreen(this.questionScreen, this.bonusScreen);
            } else {
                this.showQuestion(this.currentQuestionIndex);
            }
        } else {
            this.showFinalScreen();
        }
    }

    showFinalScreen() {
        this.finalScore.textContent = this.score;
        this.switchScreen(this.questionScreen, this.finalScreen);
    }

    handleGiftClick(giftBox) {
        const giftId = parseInt(giftBox.dataset.giftId);
        if (this.openedGifts.has(giftId)) return;

        const gift = giftsData.find(g => g.id === giftId);
        if (!gift) return;

        // Mark gift as opened
        this.openedGifts.add(giftId);
        giftBox.classList.add('opened');
        giftBox.querySelector('.gift-status').textContent = 'נפתח';

        // Update reveal screen
        this.giftRevealEmoji.textContent = gift.emoji;
        this.giftRevealTitle.textContent = gift.title;
        this.giftRevealDescription.textContent = gift.description;

        // Show reveal screen
        this.switchScreen(this.finalScreen, this.giftRevealScreen);
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Game();
}); 