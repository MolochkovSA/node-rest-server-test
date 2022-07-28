import repository from './repository.js'

async function create(req, res) {
  const user = await repository.create(req.body)
  return res.status(201).send(user)
}

async function getAll(req, res) {
  const users = await repository.getAll()
  return res.status(200).send(users)
}

async function getById(req, res) {
  const user = await repository.getById(req.params['id'])
  return res.status(200).send(user)
}

async function updateById(req, res) {
  const user = await repository.updateById(req.params['id'], req.body)
  return res.status(200).send(user)
}

async function deleteById(req, res) {
  await repository.deleteById(req.params['id'])
  return res.status(204).send()
}

export default { getAll, getById, create, updateById, deleteById }
