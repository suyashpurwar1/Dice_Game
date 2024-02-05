# 🎲 Dice Game React Project

## Overview

This React-based dice game allows users to roll the dice, guess a number, and earn points. Key features include total score tracking, real-time display of the current dice number, and a history of point outcomes. Users can reset the score and access game rules.

## Components

1. **GamePlay:** Manages overall game logic and state, including total score, dice numbers, and roll dice button.
2. **TotalScore:** Displays the player's total score.
3. **Numbers:** Allows users to select a number for guessing, handles errors, and shows point history.
4. **RollDice:** Displays the current dice number and enables users to roll the dice.
5. **Rules:** Provides an overview of the game rules.

## State Management

- Utilizes React's `useState` for managing total score, selected number, current dice, errors, and point history.

## Functions

- `generateDiceNumber(min, max)`: Generates a random dice number within a specified range.
- `roleDice()`: Manages the logic of rolling the dice, updating the score, and recording point history.
- `resetScore()`: Resets the total score to zero.
- `rulestoggle()`: Toggles the display of game rules.

## Styling

- Styled with `styled-components` for a clean and organized visual layout.

## Usage

1. Clone the project.
2. Install dependencies.
3. Run the application.

Feel free to contribute, provide feedback, or customize the game for your needs!
