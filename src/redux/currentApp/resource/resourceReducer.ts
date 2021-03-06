import { CaseReducer, PayloadAction } from "@reduxjs/toolkit"
import {
  ResourceListState,
  Resource,
} from "@/redux/currentApp/resource/resourceState"

export const addResourceListReducer: CaseReducer<
  ResourceListState,
  PayloadAction<Resource[]>
> = (_, action) => {
  return action.payload
}

export const addResourceItemReducer: CaseReducer<
  ResourceListState,
  PayloadAction<Resource>
> = (state, action) => {
  return [...state, action.payload]
}

export const updateResourceItemReducer: CaseReducer<
  ResourceListState,
  PayloadAction<Resource>
> = (state, action) => {
  const targetIndex = state.findIndex(
    (i) => i.resourceId === action.payload.resourceId,
  )

  state.splice(targetIndex, 1, {
    ...state[targetIndex],
    ...action.payload,
  })

  return state
}
