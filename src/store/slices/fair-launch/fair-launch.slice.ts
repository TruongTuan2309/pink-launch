import { createSlice } from '@reduxjs/toolkit'

interface FairLaunchState {
  lisFairLaunch: any
}

const initialState: FairLaunchState = {
  lisFairLaunch: {}
}

export const fairLaunchPage = createSlice({
  name: 'fairLaunch',
  initialState,
  reducers: {
    updateStateFairLaunch: (state, action) => {
      state.lisFairLaunch = { ...state.lisFairLaunch, ...action.payload }
    }
  }
})

export const { updateStateFairLaunch } = fairLaunchPage.actions
export default fairLaunchPage.reducer
