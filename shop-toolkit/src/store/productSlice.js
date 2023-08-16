import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    status: 'idle',
    filters: {
        price: null,
        category: null
    }
};

export const getProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const result = await data.json();
    return result;
});

export const getProductById = createAsyncThunk('products/getProductById', async (productId) => {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await response.json();
    return data;
});

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setPriceFilter: (state, action) => {
            state.filters.price = action.payload;
        },
        setCategoryFilter: (state, action) => {
            state.filters.category = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'idle';
                state.data = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = 'error';
            })
            .addCase(getProductById.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.status = 'idle';
                const productToUpdate = state.data.find(item => item.id === action.payload.id);
                if (productToUpdate) {
                    Object.assign(productToUpdate, action.payload);
                }
            })
            .addCase(getProductById.rejected, (state, action) => {
                state.status = 'error';
            });
    }
});

export const { setPriceFilter,  setCategoryFilter } = productSlice.actions;
export default productSlice.reducer;
