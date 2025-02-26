import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { EventData } from "@/model/EventData";

const initialState : EventData[] = [];


const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const saveEvent = createAsyncThunk(
    'event/saveEvent',
    async (eventData:EventData)=>{
      try {
        const response = await api.post('/api/event/saveEvent',eventData,{
          headers:{
            "Content-Type" : "multipart/form-data"
          },
        });
        return response.data;
      }catch(error){
        console.log(error);
      }
    }
);

export const updateEvent = createAsyncThunk(
  'event/updateEvent',
  async (updateData) => {
    const id = updateData.eventId;  // Fix: Use direct property access
    console.log("Updating Event with Event :", id, updateData);

    try {
      const response = await api.put(`/api/event/updateEvent/${id}`, updateData);
      return response.data;
    } catch (error) {
      console.error("Error updating Event:", error);
      throw error; // Ensure error propagates to rejected case
    }
  }
);



export const deteleEvent = createAsyncThunk(
  'event/deteleEvent',
  async(eventId : number) => {
    console.log("deleting EventId: ", eventId);
    try {
      await api.delete(`/api/event/deteleEvent/${eventId}`);
      return eventId;
    } catch(err) {
      console.log(err);
    }
  }
);

export const getallEvent = createAsyncThunk(
  'event/getallEvent',
  async() => {
    const response = await api.get('/api/event/getallEvent');
    console.log("This is Slice data ",response.data)
    return response.data;
  }
);

const eventSlice = createSlice({
  name: 'event',
  initialState: initialState,
  reducers: {
    
  },
  extraReducers:(builder)=>{
    builder
        .addCase(saveEvent.fulfilled,(state,action)=>{
          state.push(action.payload);
          console.log("Event saved")
        })
        .addCase(saveEvent.rejected,(state,action)=>{
          console.log("Event Saved Rejected :",action.payload)
        })
        .addCase(saveEvent.pending,()=>{
          console.log("Event saving pending")
        })

        builder
        .addCase(updateEvent.fulfilled, (state, action) => {
            const index = state.findIndex(event => event.eventId === action.payload.eventId);
            if (index !== -1) {
                state[index] = action.payload;
            }
            console.log("Event Updated");
        })
        .addCase(updateEvent.rejected, (state, action) => {
            console.log("Failed to update Accusation: ", action.error);
        });

    builder
        .addCase(deteleEvent.fulfilled,(state,action)=>{
          return state.filter(event => event.eventId !== action.payload);
        })
        .addCase(deteleEvent.rejected,(state,action)=>{
          console.log("Failed to delete Event : ", action.payload)
        })

    builder
        .addCase(getallEvent.fulfilled,(state,action)=>{
          return action.payload;
        })
        .addCase(getallEvent.rejected,(state,action)=>{
          console.log("Failed to get Event :", action.payload)
        })
        .addCase(getallEvent.pending,()=>{
          console.log("Fetching Event  ....")
        })
  }
});
export default eventSlice.reducer; 