

var findMedianSortedArrays = function (nums1, nums2) {
    let num1Len = nums1.length
    let num2Len = nums2.length
    let sum = 0

    let mergedArr = [...nums1, ...nums2];

    for (let index = 0; index < mergedArr.length; index++) {
        sum += mergedArr[index]
    }

    console.log(sum / mergedArr.length);
};

let nums1 = [1, 2], nums2 = [3, 4]

findMedianSortedArrays(nums1, nums2)


var findMedianSortedArraysSimple = function(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const len = merged.length;

    if (len % 2 === 1) {
        // Odd length, return the middle element
        return merged[Math.floor(len / 2)];
    } else {
        // Even length, average the two middle elements
        const mid1 = merged[len / 2 - 1];
        const mid2 = merged[len / 2];
        return (mid1 + mid2) / 2;
    }
};
