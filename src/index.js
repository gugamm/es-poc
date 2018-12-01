import elasticsearch from 'elasticsearch'

const client = new elasticsearch.Client({
  host: 'localhost:9200'
})

const runAsync = (fn) => fn().then().catch()

const guga = {
  name: 'Gustavo',
  age: 23,
  gender: 'M',
  skill: 99
}
const hugo = {
  name: 'Hugo',
  age: 24,
  gender: 'U',
  skill: 80
}
const amanda = {
  name: 'Amanda',
  age: 24,
  gender: 'F',
  skill: 70
}

runAsync(async () => {
  /*
  // Create an index on elasticsearch
  await client.indices.create({
    index: 'user'
  })
  */

  /* Store an element on a index
  await client.index({
    body: guga,
    index: 'user',
    type: 'user'
  })
  */

  // Perform multiple operations
  /*
  const response = await client.bulk({
    type: 'user',
    index: 'user',
    body: [
      { index: { _index: 'user', _type: 'user' } },
      hugo,
      { index: { _index: 'user', _type: 'user' } },
      amanda
    ]
  })
  console.log(response)
  */

  const response = await client.search({
    index: 'user',
    body: {
      query: {
        match: {
          name: 'Hugo'
        }
      }
    }
  })
  console.log(response)
})
