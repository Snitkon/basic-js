const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }

  try {
    date.valueOf()
  } catch (error) {
    throw new Error("Invalid date!");
  }

  const m = new Date(date).getUTCMonth();

  if ([2, 3, 4].includes(m)) {
    return "spring";
  } else if ([5, 6, 7].includes(m)) {
    return "summer";
  } else if ([8, 9, 10].includes(m)) {
    return "autumn";
  } else if ([11, 0, 1].includes(m)) {
    return "winter";
  }
}

module.exports = {
  getSeason,
};
