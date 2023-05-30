
import connectDB from '@/middleware/connectDB'
import Phonebook from '@/models/phonebook'

const handler =  async (req,res) => {
    if(req.method == "POST"){
        let data = new Phonebook({
            name:req.body.name,
            contact:req.body.contact,
        })
        await data.save()
        res.status(200).json({
            data
        })
    }else{
        res.status(400).json({
            "msg":"something went wrong"
        })
    }
}

export default connectDB(handler)