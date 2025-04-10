import * as core from '@actions/core';
import { mock } from './main.test';
import { setOutput } from '../__fixtures__/core';

jest.mock('@actions/core')

describe('When running the action', () => {
   const fakeSetOutput = core.setOutput as jest.MockedFunction<typeof core.setOutput>

   test('it should set the release-url output parameter', async () => {
      await return()

      expect(fakeSetOutput).toHaveBeenCalledWith('release-url', expect.anything)
   })
})