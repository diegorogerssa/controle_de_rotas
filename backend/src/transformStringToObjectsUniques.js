const cleanName = require('./utils/normalizeString');

function transformStringToObjectsUniques(schedule) {
  const lines = schedule.split('\n').filter(line => line.trim() !== '');
  const uniqueHelpers = [];
  const uniqueDrivers = [];
  const seenHelpers = new Set();
  const seenDrivers = new Set();


  for (let i = 5; i < lines.length; i += 3) {
    let helper = lines[i];
    let driver = lines[i + 1] && !lines[i + 1].match(/\d{1,2}H\d{2}/) ? lines[i + 1] : null;

    helper = cleanName(helper);
    if (driver) {
      driver = cleanName(driver);
    }

    if (!seenHelpers.has(helper)) {
      uniqueHelpers.push({ helper: helper });
      seenHelpers.add(helper);
    }

    
    if (driver && !seenDrivers.has(driver)) {
      uniqueDrivers.push({ driver });
      seenDrivers.add(driver);
    }

    if (!driver) i--; // Adjust index if no driver
  }

  return { uniqueHelpers, uniqueDrivers };
}

module.exports = transformStringToObjectsUniques;