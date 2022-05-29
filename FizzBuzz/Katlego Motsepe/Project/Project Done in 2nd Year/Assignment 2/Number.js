function phoneNumber(){
    var phone = document.getElementById("Phone Number").value;
    var re = /\D+/g;
    var cleanphone = phone.replace(re,"");
    
    if (cleanphone.length !== 10)
    {
        
        document.getElementById('Phone Number').style.border = "1px solid red";
        
        return false;
    }
    else
    {
        document.getElementById('Phone Number').style.border = "1px solid green";

        return true;
    }
    
}

