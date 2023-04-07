
var users1 = ["vini", "benzema", "karim", "areez", "kaka",];

var New_users = ["taj", "rahid", "areez"];

New_users.map((n_user)=> 
{
if (users1.includes(n_user)) 
{
    return console.log( +n_user+" username is not available")
}
    console.log("Username is available")
});