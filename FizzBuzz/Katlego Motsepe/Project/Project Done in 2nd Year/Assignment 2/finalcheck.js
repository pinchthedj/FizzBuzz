function Final()
{
    var Numbercheck = phoneNumber();
    console.log(Number)
    var Namecheck = CheckUserNameALastname();
    var name = document.getElementById("First Name").value;



    if(Numbercheck == true && Namecheck == true)
    {
        // wonderful things
    }
    else{
        document.getElementById('First Name').value = name;
    }
}