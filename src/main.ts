import * as core from '@actions/core'

const run = async () => {
  try {
    core.setOutput('hello', 'world')
  } catch (err: unknown) {
    if (err instanceof Error) {
      core.setFailed(err.message)
    } else {
      core.setFailed(String(err))
    }
  }
}

run()
