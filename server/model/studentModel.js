import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("details", studentSchema);
