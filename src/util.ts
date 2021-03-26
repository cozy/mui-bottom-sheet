/**
 * Find the closest value in an array to a given value
 * @param goal target value
 * @param numbers array of numbers to search through
 */
export const closest = (goal: number, numbers: number[]) =>
  numbers.reduce((prev, pos) =>
    Math.abs(pos - goal) < Math.abs(prev - goal) ? pos : prev
  );

/**
 * Find the next value in an array to a given value
 * @param goal target value
 * @param direction indicates whether to find for a higher or lower value
 * @param numbers array of numbers to search through
 */
export const next = (goal: number, direction: number, numbers: number[]) => {
  if (direction > 0) {
    const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
    return (
      ascSortedNumbers.find(e => e >= goal) ||
      ascSortedNumbers[ascSortedNumbers.length - 1]
    );
  } else {
    const descSortedNumbers = [...numbers].sort((a, b) => b - a);
    return (
      descSortedNumbers.find(e => e <= goal) ||
      descSortedNumbers[descSortedNumbers.length - 1]
    );
  }
};
