function findFrequence(text) {
  const frequences = {};
  for (let i = 0; i < text.length; i++) {
    frequences[text[i]] = 0;
  }
  for (let i = 0; i < text.length; i++) {
    frequences[text[i]] = frequences[text[i]] + 1;
  }

  return frequences;
}

export default findFrequence;