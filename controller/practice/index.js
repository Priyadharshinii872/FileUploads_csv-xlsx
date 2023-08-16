const service = require('./service')
const csv=require('csvtojson')


const savecsv = async(req,res)=>
{
    try
    {
        if(!req.file)
        {
            res.send({code:404,message:'kindly upload csv file'})
            return console.log('upload csv file')
        }

        let path = './files/'+req.file.filename
        const details = await csv().fromFile(path)

        for(let items  of details)
        {
            await service.savedata(items)
        }

        res.send({code:200,success:true,message:'upload successfully'})

    }catch(error)
    {
        res.send({status:error,message:'not uploaded'})
    }
}


module.exports=
{
    savecsv
}