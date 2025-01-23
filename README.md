# Birthday Game

A fun trivia game with images and videos, designed for birthday celebrations. The game shows media content followed by multiple-choice questions.

## Features

- Mobile-optimized interface
- Image and video-based questions
- Multiple-choice answers
- Bonus questions with extra points
- Modern, playful design
- Right-to-left (RTL) Hebrew interface

## Setup

1. Clone this repository
2. Add your media files:
   - Place images in `assets/images/`
   - Place videos in `assets/videos/`
3. Update the questions in `gameData.js`
4. Open `index.html` in a mobile browser

## Game Flow

1. Instructions Screen
   - Shows game rules
   - Click "Start" to begin

2. Question Screen
   - Media shown for 4 seconds
   - Question appears with multiple choices
   - Select an answer
   - View media again if needed
   - Click "Next" for the next question

3. Final Screen
   - Shows total score
   - Option to restart game

## Scoring

- Regular questions: 10 points
- Bonus questions: 20 points

## Technical Details

- Built with vanilla JavaScript
- No external dependencies
- Local media storage
- Responsive design

## Customization

To add your own questions, edit the `gameData.js` file following this format:

```javascript
{
    id: 1,
    title: "Your question here",
    media: {
        type: "image", // or "video"
        src: "assets/images/your-image.jpg"
    },
    options: [
        { id: 1, text: "Option 1" },
        { id: 2, text: "Option 2" },
        { id: 3, text: "Option 3" }
    ],
    correctAnswerId: 1,
    isBonus: false
}
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

MIT License 