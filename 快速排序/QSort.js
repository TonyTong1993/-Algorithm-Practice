/*排序规则
   （1）在数据集之中，选择一个元素作为"基准"（pivot）。
　　（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
　　（3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
参考链接：http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
    */
var array = [85, 24, 63, 45, 17, 31, 96, 50, 32];
var quickSort = function(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2); //floor:“向下取整"
    var pivot = arr.splice(pivotIndex, 1)[0]; //splice:从数组中添加/删除项目，然后返回被删除的项目
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right)); //方法用于连接两个或多个数组
}
console.log(quickSort(array))