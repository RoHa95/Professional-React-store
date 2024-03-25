const formValidate = ({name,lastName,phone,email})=>{
    const errors = {name:"",lastName:"",phone:"",email:""};
if(name.length ===0)
{
 errors.name = "لطفا نام خود را وارد کنید."
}else if(name.length >30){
    errors.name = "لطفا نام خود را به درستی وارد کنید."
}
if(lastName.length === 0){
     errors.lastName = "لطفا نام خانوادگی خود را وارد کنید."
}else if(lastName.length >30){
    errors.lastName = "لطفا نام خانوادگی خود را به درستی وارد کنید."
}
if(phone.length === 0)
{
    errors.phone = "لطفا شماره همراه خو را وارد کنید."
}else if(phone.length<11){
    errors.phone = "لطفا شماره همراه خود را به درستی وارد کنید."
}
if(email.length === 0){
    errors.email = "لطفا ایمیل خود را وارد کنید."
}else{
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    
if (!regexEmail.test(email)) {
   errors.email = "لطفا ایمیل خود را به درستی وارد کنید."
} 
}
return errors; 
}
const sigingValidate = ({ phone, pass }) => {
  const errors = { phone: "", pass: "" };
  if (phone.length === 0) {
      errors.phone = "لطفا شماره همراه خو را وارد کنید.";
    } else if (phone.length < 11) {
      errors.phone = "لطفا شماره همراه خود را به درستی وارد کنید.";
    }
if (pass.length === 0) {
  errors.pass = "لطفا گذرواژه خو را وارد کنید.";
} else if (pass.length < 10) {
  errors.pass = "لطفا گذرواژه خود را به درستی وارد کنید.";
}
return errors;
};

export {formValidate,sigingValidate};