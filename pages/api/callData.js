import connectDB from '@/middleware/connectDB'
import Phonebook from '@/models/phonebook'

const handler =  async (req,res) => {
    let data =  await Phonebook.find()
    res.status(200).json({data})
}

export default connectDB(handler)