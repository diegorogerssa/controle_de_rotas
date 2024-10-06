const filterNewcollaborator = (dataCollaborator, collaborator, responsibility) => {
  const newCollaborator = []

  for (let i = 0; i < collaborator.length; i++) {
    const nome = collaborator[i][responsibility]
    if (!dataCollaborator.some(item => item[responsibility] === nome)) {
      newCollaborator.push({[responsibility]: nome})
    }
  }
  return newCollaborator;
}

module.exports = filterNewcollaborator;