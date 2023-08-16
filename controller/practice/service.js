const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        Name:
        {
            type:String,
            requires:true
        },
        Age:
        {
            type:Number
        },
        Gender:
        {
            type:String
        },
        City:
        {
            type:String
        }
    }
)

const collection = mongoose.model('csv',schema)

const savedata = async(data)=>
{
    const newdata = new collection(data)
    const savenew = newdata.save()
    return savenew
}


module.exports=
{
    savedata
}