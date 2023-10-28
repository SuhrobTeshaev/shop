  import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
  import axios from "axios";
  import { BASE_URL } from "../../utils/constant";

  export interface User  {
    name: string;
    id: number;
    quantity: number;
    values: string;
    payload:[]
    

  }

  export  type UserState = {
    user: User[];
  }
  export const initialState: UserState = {
    user: [],
    
    
  };

  export const createUser = createAsyncThunk(
    "users/createUser",
    async (payload, thunkAPI) => {
      try {
        const res = await axios.post(`${BASE_URL}/users`, payload);
        return res.data;
      } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err);
      }
    }
  );
  export const loginUser = createAsyncThunk(
    "users/loginUser",
    async (payload, thunkAPI) => {
      try {
        const res = await axios.post(`${BASE_URL}/auth/login`, payload);
        const login = await axios.post( `${BASE_URL}/auth/profile`,
          {
            headers: {
              Authorization: `Bearer ${res.data.access_token}`,
            },
          }
        );
        return login.data;
      } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err);
      }
    }
  );

  export const updateUser = createAsyncThunk(
    "users/updateUser",
    async ({payload}: PayloadAction<User>, thunkAPI) => {
      try {
        const res = await axios.put(`${BASE_URL}/users/${payload.id}`, payload);
        return res.data;
      } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err);
      }
    }
  );

  const addCurrentUser = (state, { payload }: PayloadAction<User>) => {
    state.currentUser = payload;
  };

  const UserSlice = createSlice({
    name: "user",
    initialState: {
      currentUser: null,
      cart: [] as User[],
      isLoading: false,
      formType: "signup",
      showForm: false,
    },
    reducers: {
      addItemToCart: (state, action: PayloadAction<User>) => {
        let newCart = [...state.cart];
        const found = state.cart.find(({ id }) => id === action.payload.id);
      
        if (found) {
          newCart = newCart.map((item) => {
            return item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity || item.quantity + 1 }
              : item;
          });
        } else {
          newCart.push({ ...action.payload, quantity: 1 });
        }
        state.cart = newCart;
      },
      removeItemFromCart: (state, action: PayloadAction<number>) => {
        state.cart = state.cart.filter(({ id }) => id !== action.payload);
      },
      toggleForm: (state, action: PayloadAction<boolean>) => {
        state.showForm = action.payload;
      },
      toggleFormType: (state, action: PayloadAction<string>) => {
        state.formType = action.payload;
      },
      
    },
    extraReducers: (builder) => {
      builder.addCase(createUser.fulfilled, addCurrentUser);
      builder.addCase(loginUser.fulfilled, addCurrentUser);
      builder.addCase(updateUser.fulfilled, addCurrentUser);
    },
  });
  export const { addItemToCart, toggleForm, toggleFormType, removeItemFromCart } =
    UserSlice.actions;
  export default UserSlice.reducer;
