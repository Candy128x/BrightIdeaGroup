function alphanumeric(inputtxt)
{ 
var letters = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
if(inputtxt.value.match(letters))
{
alert('Registration Successful :)');
document.form1.text1.focus();
return true;
}
else
{
alert('Registration Fail :( \n Please input Minimum Eight Characters, \n At least One Letter and One Number:');
return false;
}
}