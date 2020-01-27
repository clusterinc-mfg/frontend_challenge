import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const programSchema = new Schema({
    name: String,
    school: {type: Schema.Types.ObjectId, ref: "School"},
    collegeOrDeptName: String,
    degreeType: String,
    degreeLevel: String,
    schoolName: String,
    deliveryMode: String,
    requiredCredits: Number,
    timeToComplete: String,
    schoolLogo: String,
    costPerCredit: Number,
    costPerDegree: Number,
    programUrl: String,
    programDescription: String,
    programAudience: String,
    tags: [String],
    applicationDeadline: String
})

const Program = mongoose.model('Program', programSchema)

export default Program