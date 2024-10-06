const cleanName = (name) => name
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '') 

module.exports = cleanName;