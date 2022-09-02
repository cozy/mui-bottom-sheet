/**
 * Find the closest value in an array to a given value
 * @param goal target value
 * @param numbers array of numbers to search through
 */
export declare const closest: (goal: number, numbers: number[]) => number;
/**
 * Find the next value in an array to a given value
 * @param goal target value
 * @param direction indicates whether to find for a higher or lower value
 * @param numbers array of numbers to search through
 */
export declare const next: (goal: number, direction: number, numbers: number[]) => number;
/**
 * Check if a node is inside an other one
 * @param source - Reference node
 * @param target - Node in which we will search if the reference node is present
 * @returns boolean
 */
export declare const isInsideTag: (source: any, target: any) => boolean;
