import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export interface prisoner{
    id:number,
    name:string,
    duties:string,
    prisonedWhen:string
}

type prisonerResponse = prisoner[];
export const prisonerSlice = createApi({
    reducerPath:'prisoner',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://127.0.0.1:9090/api/v1',
        prepareHeaders(headers){
             const username:string = 'meme';
            const password:string = 'meme'

            const hash = btoa(`${username}:${password}`).toString();
            console.log(hash)
            const token =hash
            //'bWVtZTptZW1l'
            headers.set('Authorization',`Basic ${token}`);
            headers.set('Content-Type', 'application/json')
            headers.set('Access-Control-Allow-Origin','http://127.0.0.1:9090')
            return headers;
        },

    }),
    endpoints:(builder)=>({
        fetchPrisoners:builder.query<prisonerResponse,void>({
            query:()=>'/prisoners',
            transformResponse(data:prisonerResponse){
                console.log(data)
                return data;
            }
        }),
    
    })


})

export const {useFetchPrisonersQuery} = prisonerSlice;