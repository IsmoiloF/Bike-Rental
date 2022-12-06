var TokenAgent = require("jwt-otp");
 
// Create an agent to manage your seed secrets
var sessionAgent = new TokenAgent();
 
// Set a seed secret to issue tokens with
sessionAgent.setIssuingSecret("this_is_my_really_strong_key")
 
// Create a token using an arbitrary payload 
var myToken = sessionAgent.issueToken({userId: 12344, otherInfo: "builds stuff"})
 
// Validate/Read the token
sessionAgent.validateToken(myToken, function (err, payload) {
    if(err) 
        return console.log("The token is invalid!")
    console.log("Token was valid!");
    console.log("UserId: ", payload.userId, " otherInfo: ", payload.otherInfo); 
});