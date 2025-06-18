import { apiSlice } from "./apiSlice";

const todoApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: (params) => ({
                url: '/api/todo/getTodos',
                params
            })
        }),
        CreateTodo: builder.mutation({
            query: (data) => ({
                url: "/api/todo",
                method: "POST",
                body: data
            })
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/api/todo/${id}`,
                method: "DELETE",

            })


        }),
        getTodoById: builder.query({
            query: (params) => ({
                url: '/api/todo/getTodoById',
                params
            })
        }),
        updateTodo: builder.mutation({
            query: (data) => ({
                url: '/api/todo/updateTodo',
                method: "PATCH",
                body: data
            })
        }),

       

    })
})

export const {
    useGetTodosQuery,
    useCreateTodoMutation,
    useDeleteTodoMutation,
    useGetTodoByIdQuery,
    useUpdateTodoMutation

} = todoApiSlice
