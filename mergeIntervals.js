/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    // Step 1: Sort intervals based on the start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const lastMerged = merged[merged.length - 1];
        const current = intervals[i];

        // If current interval overlaps with the last one, merge them
        if (current[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    return merged;
};

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
// Output: [[1,6],[8,10],[15,18]]

// console.log(merge([[1,4],[4,5]]));
// Output: [[1,5]]

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];

    for(let i = 0; i <intervals.length; i++) {
        const lastMerged = merged[merged.length - 1];
        const current = intervals[i];

        // If current interval overlaps with the last one, merge them
        if (current[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            merged.push(current);
        }
    }
    return merged;
};
