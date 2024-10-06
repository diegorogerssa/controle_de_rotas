const cleanName = require('./utils/normalizeString');

function transformStringToObjects(schedule) {

    const lines = schedule.split('\n').filter(line => line.trim() !== '');
    const result = [];
    const diaDaSemana = lines[0].split(' - ')[1];

    const day = lines[0].trim().split('-')[0].split('/')[0];
    const month = lines[0].trim().split('-')[0].split('/')[1];


    for (let i = 5; i < lines.length; i += 3) {
        let helper = lines[i];
        let driver = lines[i + 1] && !lines[i + 1].match(/\d{1,2}H\d{2}/) && (lines[i + 1].trim().toLowerCase() === 'folga' || lines[i + 1].trim().toLowerCase().replace(/\s+/g, '') === 'day-off') ? lines[i + 1].trim().toUpperCase() : null;
        const departureTime = driver ? lines[i + 2] : lines[i + 1];

        helper = cleanName(helper);
        if (driver) {
            driver = cleanName(driver);
        }

        result.push({
            helper: helper,
            driver: driver,
            departureTime: departureTime,
            day_of_the_week: diaDaSemana,
            day: day,
            month: month
        });

        if (!driver) i--; // Adjust index if no driver
    }

    return result;
}


module.exports = transformStringToObjects;