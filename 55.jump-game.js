/*
 * [55] Jump Game
 *
 * https://leetcode.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (30.12%)
 * Total Accepted:    189K
 * Total Submissions: 627.4K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 * 
 * Each element in the array represents your maximum jump length at that
 * position.
 * 
 * Determine if you are able to reach the last index.
 * 
 * Example 1:
 * 
 * 
 * Input: [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last
 * index.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its
 * maximum
 * jump length is 0, which makes it impossible to reach the last index.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var n = nums.length, reach = 0;
    for (var i = 0; i < n; ++i) {
        if (i > reach || reach >= n - 1) {
           break; 
        }
        reach = Math.max(reach, i + nums[i]);
    }
    return reach >= n - 1;
};
