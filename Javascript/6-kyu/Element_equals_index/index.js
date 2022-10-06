// Goal is to provide a very efficient function
// We use binary search as it has complexity O(log n) which is much better than O(n)

// Note : this solution can fail the Kata due to server speed variation throughout the day. Keep retesting if you are just around the limit.
function indexEqualsValue(a) {
    let currentLow = -1;

    let helperFunction = (start, stop, currentLow, a) => {
        if (start > stop) {
            return currentLow;
        }
        let mid = Math.floor(start - ((start - stop) / 2));
        if (a[mid] == mid) {
            currentLow = mid;
            return helperFunction(start, mid - 1, currentLow, a);
        } else if (a[mid] > mid) {
            return helperFunction(start, mid - 1, currentLow, a);
        } else {
            return helperFunction(mid + 1, stop, currentLow, a);
        }
    }

    return helperFunction(0, a.length - 1, currentLow, a);
}