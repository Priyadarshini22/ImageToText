const tesseract = require("node-tesseract-ocr")

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

tesseract
  .recognize("image2.jpg", config)
  .then((text) => {
    const lines =text.split('\n')
    const a=[]
    console.log(text)
    for(var i=0;i<lines.length;i++)
    {
        const l=lines[i].split(' ')
        var count=0
        const c=[]
        // console.log(l)
        for(var j=l.length-1;j>=0;j--)
        {
            const b=l[j]
             
            if(b==='[_]' ||b==='[__]' || b==='{__]' || b==='{_]')
            {    c.pop();
                count=1;
            }
            else if(b.includes('[_]') ||b.includes('[__]') || b.includes('{__]') || b.includes('{_]'))
            {
                
            }
            else 
                c.push(b)

            
        }
        // console.log(c)
    
           if(parseFloat(c[c.length-1][0])>0)
           {
              count==1?  a.push(c[c.length-1]+"value"+ c[0] ) : temp=c[c.length-1]
           }
    }

    console.log(a)
  })
  .catch((error) => {
    console.log(error.message)
  })

// const express = require('express')

// const multer = require('multer')
// const path = require('path')
// const app = express()

// app.use(express.static(path.join(__dirname + '/uploads')))
// app.set('view engine',"ejs")

// var storage = multer.diskStorage({
//   destination : function(req, file, cb) {
//     console.log(req, file, cb)

//     cb(null, "uploads")
//   },
//   filename: function(req, file, cb) {
//     // console.log(req, file, cb)
//     cb(
//       null,
//       file.fieldname + '-' + Date.now() + path.extname(file.originalname)
//     )
//   }
// })


// const upload = multer({storage: storage})
// app.get('/',(req, res) => {
//   // console.log(req,res)
//   res.render('index')
// })



// app.post('/extracttextfromimage',upload.single('file'),(req,res) => {
//    console.log(req.file.path)
// })

// app.listen(5000, () => {
//   console.log("App os listening on port 5000")
// })
