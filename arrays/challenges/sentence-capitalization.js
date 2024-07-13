// sentence capitalization

const sentenceCapitalization = (sentence) => {
  return sentence
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word.at(0).toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(sentenceCapitalization("apple apple"));
