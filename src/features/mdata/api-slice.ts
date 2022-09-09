import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export interface joke{
    id:string,
    value:string
}
//type jokeResponse = joke[]
export const jokesApi = createApi({
    reducerPath:'jokesApi',
    baseQuery : fetchBaseQuery({
        baseUrl:'https://api.chucknorris.io/jokes/',
        prepareHeaders(headers){
            headers.set('api-key' ,'najdsuuerjuejdf')
            return headers;
        }
        
    }),
    tagTypes:['joke'],
    endpoints: (builder)=>({
        getJokeById : builder.query<joke,string>({
            query:(name)=>`random?category=${name}`,

        }),
        getSpecificJoke: builder.query<joke,Number>({
            query:(x)=>`id=${x}`
        }),
        addData: builder.mutation<joke,Partial<joke>>({
            query:(data)=>({
                url:`jokes/`,
                method:'POST',
                body:data
            }),
            invalidatesTags:[{type:'joke',id:'string'}]
        }),
        deleteJoke:builder.mutation<{sucess:boolean,id:number},number>({
            query: (id)=>({
                url:`delete/${id}`,
                method:'DELETE'
            }),
            invalidatesTags:(result,error,id)=>[{type:'joke',id,result}]
        })

        
    })
})

export const {useGetJokeByIdQuery,useGetSpecificJokeQuery,useAddDataMutation, useDeleteJokeMutation} = jokesApi