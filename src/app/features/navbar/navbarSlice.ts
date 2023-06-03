import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface initialState {
  currentTab: string
}

const name: string = 'navbar'

const initialState: initialState = {
  currentTab: 'now-tab',
}

export const navbarSlice = createSlice({
  name,
  initialState,
  reducers: {
    changeTab: (state, action: PayloadAction<string>) => {
      state.currentTab = action.payload
    },
  },
})

export const { changeTab } = navbarSlice.actions
export default navbarSlice.reducer
