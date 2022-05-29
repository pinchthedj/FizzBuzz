function Sticky(params) {
    let nameTrue = FirstName(document.getElementById('First Name'));
    let lastNameTrue = LastName(document.getElementById('Last Name'));
    let phoneTrue = phoneNumber(document.getElementById('Phone Number'));
    let EmailTrue = EmailCheck(document.getElementById('Email ID'))
    
    if (nameTrue == false && lastNameTrue == false && phoneTrue == false && EmailTrue == false) {
        document.getElementById('First Name') = document.getElementById('First Name').nodeValue;
        document.getElementById('Last Name') = document.getElementById('Last Name').nodeValue;
        document.getElementById('Phone Number') = document.getElementById('Phone Number').nodeValue;
        document.getElementById('Email ID') = document.getElementById('Email ID').nodeValue;
 
    }
    else{
        continue;
    } 
}