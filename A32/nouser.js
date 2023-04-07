var web1 = [];

web1.map((username) => 
{
    
if (username === "admin")
{
    console.log("Hello admin, would you like to see a status report ");
}
if(web1.length === 0){
    console.log("add")
}
else
{
    console.log("Hello " + username +" thank you for logging in again");
}
});

