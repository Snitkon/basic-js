const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const clone = arr.map((v) => v);

  if (arr.indexOf("--discard-next") === (arr.length - 1) || arr.indexOf("--double-next") === (arr.length - 1)) {
    clone.splice(clone.length - 1, 1);
    return clone;
  }

  if (arr.indexOf("--discard-prev") === 0 || arr.indexOf("--double-prev") === 0) {
    clone.splice(0,1);
    return clone;
  }


  if (discardNext >= 0 && discardNext !== (clone.length - 1)) {
  const discardNext = clone.indexOf("--discard-next");
    clone.splice(discardNext, 2);
  }

  const doubleNext = clone.indexOf("--double-next");
  if (doubleNext >= 0 && doubleNext !== (clone.length - 1)) {
    clone.splice(doubleNext, 1, arr[doubleNext + 1]);
  }

  const discardPrev = clone.indexOf("--discard-prev");
  if (discardPrev > 0) {
    clone.splice(discardPrev - 1, 2);
  }

  const doublePrev = clone.indexOf("--double-prev");
  if (doublePrev > 0) {
    clone.splice(doublePrev, 1, arr[doublePrev - 1]);
  }

  return clone;
}

module.exports = {
  transform,
};
