import types from './types';

// 所有操作方法

// 登录
const signIn = (params: any) => (dispatch: any) => dispatch({type: types.SIGN_IN, data: params});

// 登出
const signOut = (params: any) => (dispatch: any) => dispatch({type: types.SIGN_OUT, data: params});

// 切换主题
const setTheme = (theme: string) => (dispatch: any) => dispatch({type: types.SET_THEME, data: theme});

// 设置是否显示loading图标
const setLoading = (loading: boolean) => (dispatch: any) => dispatch({type: types.SET_LOADING, data: loading});

// 设置面包屑导航
const setCrumbs = (crumbs: string[]) => (dispatch: any) => dispatch({type: types.SET_CRUMBS, data: crumbs});

export {
  signIn,
  signOut,
  setTheme,
  setLoading,
  setCrumbs,
}




