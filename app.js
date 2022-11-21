const express= require("express");
const https = require("https");
const app=express();
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(__dirname));

app.get("/", function(req,res){
    res.sendFile(__dirname + '/signup.html');
});

app.post("/",function(req,res){
    const fname=req.body.fname;
    const lname=req.body.lname;
    const email=req.body.email;
    const data={
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME: fname,
                    LNAME:lname
                }
            }
        ]
    };
    //
    const jsonData=JSON.stringify(data);
    const url='https://us14.api.mailchimp.com/3.0/lists/b72f0e35c9';
    const options={
            method:"POST",
            auth:"kris:02817df128a91790a565e1818d2ad5a1-us14"
        }
    const request=https.request(url,options,function(response){
        if(response.statusCode ===200){
            res.sendFile(__dirname + '/success.html');
        
        }else{
            res.sendFile(__dirname + '/failure.html');
        }
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();
    console.log(fname,lname,email);

    // res.write("First Name",fname)
    // res.write("Last Name",lname);
    // res.write("Email", email);
    // res.send();

})
app.post("/failure", function(req,res){
    res.redirect("/")
})
app.listen(process.env.PORT || 3000,function(){
    console.log("server is running on port 3000")
})
// mailchimp api
// 02817df128a91790a565e1818d2ad5a1-us14

//audience id
//b72f0e35c9
