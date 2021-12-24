function getAllEvenFromOneToFifty() {
  return Array.from({ length: 50 }, (_, idx) => idx + 1).reduce(
    (acc, currNum, idx) => {
      if (currNum % 2 === 0) acc.push(currNum);
      return acc;
    },
    []
  );
}
