import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch(baseUrl + 'comments');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

export const postComment = createAsyncThunk(
    'comments/postComment',
    async (payload, { dispatch, getState }) => {
        setTimeout(() => {
            const { comments } = getState();
            payload.date.toISOString();
            payload.id = comments.commentsArry;
            dispatch(addComment(payload));
        }, 2000);

    }
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState: { isLoading: true, errMess: null, commentsArray: [] },
    reducers: {},
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.commentsArray = action.payload;
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error
                ? action.error.message
                : 'Fetch failed';
        },
        addComment: (state, action) => {
            if (comments.includes(action.payload)) {
                return comments.filter(
                    (comment) => comment !== action.payload
                );
            } else {
                action.payload.push(state.commentsArray);
            }
        }
    }
});

export const commentsReducer = commentsSlice.reducer;
export const { addComment } = commentsSlice.actions;