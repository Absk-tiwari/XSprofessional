import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commonApiSlice = createApi({
	reducerPath:'commonApi',
	baseQuery: fetchBaseQuery({ baseUrl:process.env.NEXT_PUBLIC_API_URL ,
		prepareHeaders: ( headers, { getState }) => {
			headers.set('Accept','application/json' )
			headers.set('Content-Type', 'application/json')
			return headers
		}
	}),

	endpoints: builder => ({

        getSettings: builder.query({
            query: () => '/settings'
        }),
		getNotifications: builder.query({
			query: ()=> `/config/notifications`,
        }),
		getProductCategories:builder.query({
			query:()=> `/category`,
			async onQueryStarted( _ , {dispatch, queryFulfilled}) {
				try {
					const {data} = await queryFulfilled;
					if(data.status) {
						dispatch({
							type:"CATEGORIES",
							payload: data.categories
						})
					}
				} catch (error) {
					console.log(error)
				}
			}
		}),
		getProducts:builder.query({
			query:()=> `/products`,
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					const {data} = await queryFulfilled;
					if(!data.status && data.relaunch) {
						window.electronAPI?.relaunch()
					}
				} catch (error) {
					console.log(error)
				}
			}
		}),
		getTrendingProducts:builder.query({
			query:()=> `/trending-products`,
		}),
        getNewArrivals: builder.query({
            query:() => `/new-arrivals`,
            keepUnusedDataFor: 1000,
        }),
        getTransformations: builder.query({
            query: ()=> `/transformations`,
        })
	})
});

const initialState = {
    loading:true,
    data:[],
	error:''
}

const centerSlice = createSlice({
    name:'api',
    initialState,
    reducers:{
		updateItem(state, action) {
			const { id, data } = action.payload;
			console.log("payload received:- ", data)
			const item = state.items.find(item => item.id === id);
			if (item) {
			  Object.assign(item, data); // Update the item with new data
			}
		},
	},

})

export default centerSlice.reducer
export const {
    useGetSettingsQuery,
	useGetNotificationsQuery,
	useGetProductCategoriesQuery,
	useGetProductsQuery,
    useGetTrendingProductsQuery,
    useGetNewArrivalsQuery,
    useGetTransformationsQuery
} = commonApiSlice;
export const { updateItem } = centerSlice.actions ;
