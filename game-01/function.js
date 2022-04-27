var findMedianSortedArrays = function (nums1, nums2) {
  var con = nums1.concat(nums2);
  con = con.sort((a, b) => a - b);
  let len = con.length;

  if (len % 2 == 1) {
    return con[len / 2 - 0.5];
  }
  return (con[len / 2] + (con[len / 2] + 1)) / 2;
};
