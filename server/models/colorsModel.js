import mongoose from 'mongoose';

const colorsSchema = mongoose.Schema({
   groupName: String,
   groupColors: [String],
   createdAt: {
      type: Date,
      default: new Date()
   }
});

const Colors = mongoose.model("Colors", colorsSchema);

export default Colors;