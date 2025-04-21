

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
