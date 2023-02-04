import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wellness: 30,
    emotions: [],
    thoughts: '',
    improvements: []
}

const QuestionaireSlice = createSlice({
    name: 'questionaire',
    initialState,
    reducers: {
    }
})

