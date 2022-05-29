function Details(params) {
    const name = document.getElementById('First Name').value;
    const lastname = document.getElementById('Last Name').value;
    const emailDetail = document.getElementById('Email ID').value;
    const userID = document.getElementById('User ID').value;
    const PhoneNUmber = document.getElementById('Phone_number').value;
    const RefeID = document.getElementById('Reference Code').value;
     
    const Country = document.querySelector('County')
    const state = document.querySelector('County')
    const city = document.querySelector('County')

    let Country_value = Country.options[Country.selectedIndex].value;
    let state_value = state.options[state.selectedIndex].value;
    let city_value = city.options[city.selectedIndex].value;

    document.writeln('user details');
    document.writeln("First name: "+ name)
    document.writeln("Last Name: "+ lastname)
    document.writeln("Email: "+ emailDetail)
    document.writeln("User ID: "+ userID)
    document.writeln("Phone NUmber: "+ PhoneNUmber)
    document.writeln("Refer ID: "+ RefeID)
    document.writeln("Country: "+ Country_value)
    document.writeln("State: "+ state_value)
    document.writeln("City: "+ city_value)
   

}