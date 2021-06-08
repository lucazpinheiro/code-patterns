function getPromise (condition) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (condition) {
        return resolve('done')
      }
      return reject(new Error('damn'))
    }, 1000)
  })
}

async function handleTry (condition) {
  try {
    const data = await getPromise(condition)
    return [data, null]
  } catch (err) {
    return [null, err]
  }
}

async function func() {
  const [responseOne, errOne] = await handleTry(false)
  console.log(responseOne)

  if (errOne) {
    console.log(errOne)
    return
  }

  const [responseTwo, errTwo] = await handleTry(true)
  console.log(responseTwo)

  const [responseThree, errThree] = await handleTry(true)
  console.log(responseThree)
}

func()