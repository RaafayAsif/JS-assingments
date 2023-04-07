
var web1 = ["admin", "areez", "faris", "taj"];

web1.map((username) => 
{
if (username === "admin")
{
    console.log("Hello admin, would you like to see a status report ");
}
else 
{
    console.log("Hello " + username +" thank you for logging in again");
}
});