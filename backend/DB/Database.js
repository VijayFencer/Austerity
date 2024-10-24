import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db ='mongodb+srv://vigneshwaranb:Vickykutty2005@cluster0.7rln6de.mongodb.net/Expense_Tracker?retryWrites=true&w=majority&appName=Cluster0';

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}