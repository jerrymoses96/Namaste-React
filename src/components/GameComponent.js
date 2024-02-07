import React, { useState, useEffect } from 'react';

const HangmanGame = () => {
  const [word, setWord] = useState('');
  const [guessedWord, setGuessedWord] = useState('');
  const [attempts, setAttempts] = useState(6);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [usedLetters, setUsedLetters] = useState(new Set());

  const wordList = ['hangman', 'apple', 'banana', 'programming', 'javascript', 'react', 'computer', 'internet', 'developer'];

  const chooseRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
  };

  const initializeGame = () => {
    const randomWord = chooseRandomWord();
    setWord(randomWord.toLowerCase());
    setGuessedWord('_'.repeat(randomWord.length));
    setAttempts(6);
    setIsGameOver(false);
    setIsGameWon(false);
    setUsedLetters(new Set());
  };

  const handleLetterClick = (letter) => {
    if (!isGameOver && !usedLetters.has(letter)) {
      const newUsedLetters = new Set(usedLetters);
      newUsedLetters.add(letter);
      setUsedLetters(newUsedLetters);

      if (word.includes(letter)) {
        let newGuessedWord = '';
        for (let i = 0; i < word.length; i++) {
          if (word[i] === letter || guessedWord[i] !== '_') {
            newGuessedWord += word[i];
          } else {
            newGuessedWord += '_';
          }
        }
        setGuessedWord(newGuessedWord);

        if (!newGuessedWord.includes('_')) {
          setIsGameWon(true);
          setIsGameOver(true);
        }
      } else {
        setAttempts(attempts - 1);
        if (attempts - 1 === 0) {
          setIsGameOver(true);
        }
      }
    }
  };

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <div>
      <h1>Hangman Game</h1>
      <p>Attempts left: {attempts}</p>
      <p>Word: {guessedWord}</p>
      <div className="letters">
        {Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index)).map((letter) => (
          <button key={letter} disabled={usedLetters.has(letter)} onClick={() => handleLetterClick(letter)}>{letter.toUpperCase()}</button>
        ))}
      </div>
      {isGameOver && <p>Game Over! The word was: {word}</p>}
      {isGameWon && <p>Congratulations! You've won!</p>}
      <button onClick={initializeGame}>Restart Game</button>
    </div>
  );
};

export default HangmanGame;
