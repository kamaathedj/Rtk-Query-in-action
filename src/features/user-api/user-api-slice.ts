import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react' 


export  interface user{
    email:string,
    password:string
}
export const userApiSlice = createApi({
    reducerPath:'user',
    baseQuery : fetchBaseQuery({
        baseUrl:'http://localhost:3000/user'  
    }),
    endpoints:(builder)=>({
        getUser: builder.mutation<user,user>({
            query:(data)=>({
                url:`user`,
                method:'POST',
                body:data
            }),
            
        })
    })
})

export const {useGetUserMutation }  = userApiSlice;