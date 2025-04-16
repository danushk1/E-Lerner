// rtk query

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const BACKEND_URL = 'http://127.0.0.1:8000';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BACKEND_URL}/api/`,
    prepareHeaders: async (headers , { getState }) => {
      const token = await window?.Clerk?.session?.getToken()
console.log(token)

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),



    endpoints: (builder) => ({
        getAllSubject: builder.query({
            query: () => `/getall_subject`,
        }),
// ... other endpoints ..
             getCoursesById: builder.query({
            query: (id) => `/get_subject/${id}`,
        }),
// ... other endpoints ..
            enrollCourse: builder.mutation({
            query: (data) => ({
                url: '/enroll_course',
                method: 'POST',
                body: data,
            }),
        }),
    }),
})

export const { useGetAllSubjectQuery, useGetCoursesByIdQuery, useEnrollCourseMutation } = api;
