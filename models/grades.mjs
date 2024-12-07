import mongoose from 'mongoose';

const gradeSchema = new mongoose.Schema({
  learner_id: Number,
  class_id: Number,
  scores: Array,
  // Add any other fields you have in your documents
},{timestamps:true} 
);

const Grade = mongoose.model('Grade', gradeSchema);
gradeSchema.index({learner_id:1});
gradeSchema.index({class_id:1});
//export default Grade;
export default mongoose.model("grade", gradeSchema);
