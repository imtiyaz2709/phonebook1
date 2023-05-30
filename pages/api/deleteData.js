import connectDB from "@/middleware/connectDB"
import Phonebook from '@/models/phonebook'
const handler = async(res,req) =>{
    let data = Phonebook.find(req.param.id)
    res.status(200).json({data})
}

export default connectDB(handler)