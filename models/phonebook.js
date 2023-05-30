import mongoose from "mongoose"

const PhonebookSchema = new mongoose.Schema({
    name:{type:String,required:true},
    contact:{type:String,required:true}
},{
    timestamps:true
})

module.exports = mongoose.models.Phonebook || mongoose.model("Phonebook",PhonebookSchema)
