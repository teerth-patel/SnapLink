const File = require("../models/fileModel")

const uploadFile = async (req, res) => {
    try {
        console.log('file>>>>>', req.file);
        const { originalname, location, key } = req.file;
        const file = new File({
            name: originalname,
            url: location,
            key
        });
        await file.save()
        res.status(200).json({ success: true, message: "successfully file uploaded" })
    }
    catch(error) {
        console.log(error)
        res.status(400).json({ success: false, message: "error while uploading file" })
    }
}

module.exports = uploadFile