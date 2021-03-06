import axios from './init'

// get all clients
export function allClients() {
  return axios.get('/api/clients')
  .then(res => res.data)
}

// new client
export function createClient({ firstname, lastname, email, phone }) {
  return axios.post('/api/client/new', {
    firstname,
    lastname,
    email,
    phone
  })
  .then(res => res.data)
}

const statusTypeToField = {
  id: 'idVerified',
  quoteSent: 'quoteSentVerified',
  quoteAccepted: 'quoteAcceptedVerified',
  depositCleared: 'depositClearedVerified'
}

export function updateVerified({ clientId, statusType }) {
  const fieldName = statusTypeToField[statusType]
  return axios.patch(`/api/client/${clientId}`,  {
    [fieldName]: true
  })
}
