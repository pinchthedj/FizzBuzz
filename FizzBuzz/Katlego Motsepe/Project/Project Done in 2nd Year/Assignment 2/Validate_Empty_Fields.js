function CheckEmptyField(Name){
    if(typeof(Name) == "object"){
        Name.forEach(element => {
            if(Val_Element(element) == ""){
                alert(`${element} must be filled out`);
                return false;
            };
        });
    }
    else if(Val_Element(Name) == ""){
        alert(`${Name} must be filled out`);
        console.log("abc");
        return false;
    }
    else{
        return true;
    }
}

function Val_Element(ElementID){
    return document.getElementById(ElementID).value;
}