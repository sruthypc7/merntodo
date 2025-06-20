import { apiSlice } from "./apiSlice";
const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        RegisterUser: builder.mutation({
            query: (data) => ({
                url: "/api/user/register",
                method: "POST",
                body: data,
            }),
        }),
        LoginUser: builder.mutation({
            query: (data) => ({
                url: "/api/user",
                method: "POST",
                body: data
            })
        }),
        LogoutUser:builder.mutation({
            query:()=>({
                url:"/api/user/Logout",
                method:"GET",
            }),
        }),
    }),
});

export const { useRegisterUserMutation } = userApiSlice;
export const {useLoginUserMutation}= userApiSlice;
export const{useLogoutUserMutation}=userApiSlice;