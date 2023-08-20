const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());
app.get("/resume_download", (req, res) => {
    const filepath = "/home/edan/Desktop/my_website/my-app/server/Edan Landow.pdf";
    fs.stat(filepath, (_, stats) => {
        res.setHeader('Content-Disposition', `attachment; filename=aaa`);
        res.setHeader('Content-Type', 'application/pdf'); 
        res.setHeader('Content-Length', stats.size);
        const fileStream = fs.createReadStream(filepath);
        fileStream.pipe(res);
    });    
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});