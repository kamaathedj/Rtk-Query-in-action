import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


interface joke{
    id:string,
    value:string
}
export const jokesApi = createApi({
    reducerPath:'jokesApi',
    baseQuery : fetchBaseQuery({
        baseUrl:'https://api.chucknorris.io/jokes/',
        prepareHeaders(headers){
            headers.set('api-key' ,'najdsuuerjuejdf')
            return headers;
        }
        
    }),
    endpoints: (builder)=>({
        getJokeById : builder.query<joke,string>({
            query:(name)=>`random?category=${name}`,
        })
        
    })  
})

export const {useGetJokeByIdQuery} = jokesApi