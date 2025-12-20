import { createSlice, isPending } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    avatar: '',
    access_token: '',
    id: '',
    isAdmin: false,
}

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const { name, email, address, phone, avatar, _id, access_token, id, isAdmin } = action.payload
            state.name = name;
            state.email = email;
            state.address = address;
            state.phone = phone;
            state.avatar = avatar;
            state.id = _id;
            state.access_token = access_token;
            //state.isAdmin = false;//để thì admin vào quản lý không được
            state.isAdmin = isAdmin ? isAdmin : false;
        },
        // updateUser: (state, action) => {
        //     const { name, email, address, phone, avatar, _id, access_token, id } = action.payload || {};
        //     // Keep existing values if payload fields are undefined
        //     state.name = name || state.name;
        //     state.email = email || state.email;
        //     state.address = address || state.address;
        //     state.phone = phone || state.phone;
        //     state.avatar = avatar || state.avatar;
        //     state.id = _id || id || state.id;
        //     state.access_token = access_token || state.access_token;
        // },
        resetUser: (state,) => {
            state.name = '';
            state.email = '';
            state.address = '';
            state.phone = '';
            state.avatar = '';
            state.id = '';
            state.access_token = '';
            state.isAdmin = false;
        },
    },

})

export const { updateUser, resetUser } = userSlide.actions

export default userSlide.reducer