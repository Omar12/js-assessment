exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  // completed
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  // completed
  sum: function(arr) {
    const reducer = (acc, cur) => acc + cur;
    let sum = arr.reduce(reducer);
    return sum;
  },

  remove: function(arr, item) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if(arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    // DRY...
    return this.remove(arr, item);
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    // TODO: optimize this
    
    let counter = 0;
    for (let i = arr.length - 1; i > 0; i--) {
      if(arr[i] === item) {
        counter++;
      }
    }
    return counter;
  },

  duplicates: function(arr) {
    // O(n2)
    // the algorithm processes 2 arrays.
    // think of making it faster.
    
    let sortedArr = arr.slice().sort();
    let result = [];
    
    sortedArr.forEach((element, index) => {
      if(sortedArr.indexOf(element, index + 1) > -1) {
        if(result.indexOf(element) === -1) {
          result.push(element);
        }
      }
    });
    return result;
  },

  square: function(arr) {
    let result = arr.map(val => val * val);
    return result;
  },

  findAllOccurrences: function(arr, target) {
    let indexes = [];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        indexes.push(i);
      }
    }
    return indexes;
  }
};
