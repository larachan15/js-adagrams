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
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
