import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import * as AuthService from "@/services/auth-service";

// export const login = createAsyncThunk("posts/auth-sso", async (payload) => {
//   try {
//     const response = await AuthService.auth(payload);

//     console.log("resp ", response);
//     return response.data;
//   } catch (e) {
//     console.error(e);
//   }
// });

const initialState = {
  infoLogin: {},
};

export const infoSlice = createSlice({
  name: "infos",
  initialState,
  reducers: {
    login: (state, action) => {
      state.infoLogin = action.payload;
    },
    logout: (state, action) => {
      state.infoLogin = action.payload;
    },
  },
  //   extraReducers(builder) {
  //     builder.addCase(login.fulfilled, (state, action) => {
  //       state.infoLogin = action.payload.data;
  //     });
  //   },
});

export const { login, logout } = infoSlice.actions;

export const getInfoLogin = (state) => state.infos.infoLogin;

export default infoSlice.reducer;
