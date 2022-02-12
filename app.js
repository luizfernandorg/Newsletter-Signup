//jshint esversion:6
const express = require("express");
const mailchimp = require("@mailchimp/mailchimp_marketing");
mailchimp.setConfig({
    apiKey: "677-us14", //fake value, need to create an account on mailchimp and get the apiKey
    server: "us14",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(__dirname+"/public"));

app.get("/", (req,res) => {
    res.sendFile(__dirname+'/signup.html');
});

app.post("/signup", (req,res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;

    const listId = "333"; //fake value, need to create an account on mailchimp and get the id for your audience
    const subscribingUser = {
        firstName: name,
        lastName: surname,
        email: email
    };
    const response = async () => {
        try{
            const response = await mailchimp.lists.addListMember(listId, {
                 email_address: subscribingUser.email,
                 status: "subscribed",
                 merge_fields: {
                     FNAME: subscribingUser.firstName,
                     LNAME: subscribingUser.lastName
                 }
            });
            if(response.id){
                res.json({'result':'success'});
            }
        } catch (e){
            res.json({'result':'failure'});
        }       
    };
    response();
});

const port = 3000;
app.listen(port, () => {
    console.log("Server is running on port " + port );
});