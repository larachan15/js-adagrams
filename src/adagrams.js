const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letters = [
      "A", "A", "A", "A", "A", "A", "A", "A", "A",
      "B", "B",
      "C", "C",
      "D", "D", "D", "D",
      "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
      "F", "F",
      "G", "G", "G",
      "H", "H",
      "I", "I", "I", "I", "I", "I", "I", "I", "I",
      "J",
      "K",
      "L", "L", "L", "L",
      "M", "M",
      "N", "N", "N", "N", "N", "N",
      "O", "O", "O", "O", "O", "O", "O", "O",
      "P", "P",
      "Q",
      "R", "R", "R", "R", "R", "R",
      "S", "S", "S", "S",
      "T", "T", "T", "T", "T", "T",
      "U", "U", "U", "U",
      "V", "V",
      "W", "W",
      "X",
      "Y", "Y",
      "Z"
    ];

    letters.sort(() => Math.random() - 0.5);
    return letters.slice(0, 10);
  },

  usesAvailableLetters(input, lettersInHand) {
    const lettersInHandMap = {};
    // ['A', 'A', 'B', 'N'] => { 'A': 2, 'B': 1, 'N': 1 }
    lettersInHand.forEach((letter) => {
      // let upcaseLetter = letter.toUpperCase();
      // console.log(letter);
      if (lettersInHandMap[letter]) {
        lettersInHandMap[letter] += 1;
      }
      else {
        lettersInHandMap[letter] = 1;
      }
    });

    for (let i = 0; i < input.length; i++) {
      if (lettersInHandMap[input[i]]) {
        lettersInHandMap[input[i]] -= 1;
      }
      else {
        return false;
      }
    }

    return true;
  },

  scoreWord(word) {
    const scoreChart = {
      "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1,
      "D": 2, "G": 2,
      "B": 3, "C": 3, "M": 3, "P": 3,
      "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4,
      "K": 5,
      "J": 8, "X": 8,
      "Q": 10, "Z": 10
    };
    let score = 0;
    // let upcaseLetter = letter.toUpperCase();

    for (let i = 0; i < word.length; i++) {
      let upcaseLetter = word.toUpperCase();
      score += scoreChart[upcaseLetter[i]];
    }

    if (word.length > 6) {
      score += 8;

    }
    // console.log(typeof(score));
    return score;
  },

  highestScoreFrom(words) {
    let winningScore = {
      word: "",
      score: 0
    };

    words.forEach((word) => {
      const score = this.scoreWord(word);
      // console.log(score);

      if (score > winningScore.score) {
        winningScore.score = score;
        // console.log(score);
        winningScore.word = word;
        // console.log(word);
      }
      else if (score == winningScore.score) {
        if (word.length == 10 && winningScore.word.length != 10) {
          winningScore.word = word;
        }
        else if (word.length < winningScore.word.length && winningScore.word.length != 10) {
          winningScore.word = word;
        }
      }
    });

    return winningScore;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
