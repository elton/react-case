import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counter/counterSlice';

// `configureStore` 提供简化的配置选项。它可以自动组合切片 slice 的 reducer，添加你提供的任何 Redux 中间件，默认情况下包含 redux-thunk，并启用 Redux DevTools 扩展。
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
