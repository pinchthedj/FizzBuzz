function FirstName(Names) {
    let Inputletter = /^[A-Za-z]+$/;
    if ( Names.match(Inputletter)){
        document.getElementById('First Name').style.border = "1px solid green";
        document.getElementById('Check1').style.display = 'initial';

        return true;
    }
    else{
        document.getElementById('Check Box').style.display = 'none';
        alert("This field may only contain letters");
        return false;
    }
}
function LastName(Names) {
    let Inputletter = /^[A-Za-z]+$/;
    if ( Names.match(Inputletter)){
        document.getElementById('Last Name').style.border = "1px solid green";
        document.getElementById('Check Box').style.display = 'initial';
        return true;
    }
    else{
        document.getElementById('Check Box').style.display = 'none';
        alert("This field may only contain letters");
        return false;
    }
}
function UserId(Names) {
    let Inputletter = /^[A-Za-z0-9]+$/;
    if ( Names.match(Inputletter)){
        document.getElementById('User ID').style.border = "1px solid green";
        document.getElementById('Check Box').style.display = 'initial';
        return true;
    }
    else{
        document.getElementById('Check Box').style.display = 'none';
        alert("This field may only contain letters");
        return false;
    }
}
function ReferenceCode(Names) {
    let Inputletter = /^[A-Za-z0-9]+$/;
    if ( Names.match(Inputletter)){
        document.getElementById('Reference Code').style.border = "1px solid green";
        document.getElementById('Check Box').style.display = 'initial';

        return true;
        
    }
    else{
        document.getElementById('Check Box').style.display = 'none';
        alert("This field may only contain letters");
        return false;
    }
}

function EmailCheck() {
    let Names = document.getElementById("Email ID").value;
    let Inputletter = /^[A-Za-z0-9_@_.]+$/;
    if ( Names.match(Inputletter)){
        document.getElementById('Email ID').style.border = "1px solid green";
        document.getElementById('Check Box').style.display = 'initial';
        return true;
    }
    else{
        document.getElementById('Check Box').style.display = 'none';
        document.getElementById('Email ID').style.border = "1px solid red";
        return false;
    }
}

