

var findMedianSortedArrays = function (nums1, nums2) {
    let sum = 0

    let mergedArr = [...nums1, ...nums2];
    let totalLengthArr = mergedArr.length;

    for (let index = 0; index < mergedArr.length; index++) {
        sum += mergedArr[index]
    }
};

let nums1 = [1, 3], nums2 = [2]

findMedianSortedArrays(nums1, nums2)




