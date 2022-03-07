$(document).ready()
{
    $("#myBirthDay").mask("99/99/9999")
};

function getAkanName()
{
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    let myBirthday = document.getElementById("myBirthDate").value;
    let myGender = document.getElementsByName("gender");
    let dateOfBirth = new Date(myBirthday);
    let dayOfTheWeek = dateOfBirth.getDay();
    event.preventDefault()

    if(myBirthday === "")
    {
        document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>OOPS!</strong> Please enter your Date of Birth!</div>";
        $('#message').addClass("animated shake");
    }
    else 
    {
        for(var i=0;i<myGender.length;i++)
        {
            if(myGender[i].checked)
            {
                if(myGender[i].value === "Female")
                {
                    document.getElementById('message').innerHTML = "<span><i class=\"fa fa-female\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name is <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
                    $('#message span:first-child').addClass("animated fadeInDown");
                    $('#message span:last-child').addClass("animated fadeInUp");
                }
                else 
                {
                    document.getElementById('message').innerHTML = "<span><i class=\"fa fa-male\"></i></span>&nbsp;&nbsp; Born on a <span>" + days [dayOfTheWeek] + "</span>, Your Akan Name is <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
                    $('#message span:first-child').addClass("animated fadeInDown");
                    $('#message span:last-child').addClass("animated fadeInUp");
                }
                break;
            }    
            else 
            {
                document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>OOPS!</strong> Please select your gender too!</div>";
                $('#message').addClass("animated shake");
            }
        }    

    }
}    
                