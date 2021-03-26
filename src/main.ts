import * as core from '@actions/core'

const run = async () => {
  try {
    const outputs = core.getInput('outputs') ?? '[]'
    const key = core.getInput('key', { required: true })
    const value = core.getInput('value', { required: true })

    core.info(`outputs: ${outputs}`)
    core.info(`key: ${key}`)
    core.info(`value: ${value}`)

    core.setOutput(key, value)
  } catch (err: unknown) {
    if (err instanceof Error) {
      core.setFailed(err.message)
    } else {
      core.setFailed(String(err))
    }
  }
}

run()
