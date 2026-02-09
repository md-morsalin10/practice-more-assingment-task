/*Problem 2 */
function validOtp(otp){

    if(typeof otp !== "string"){
        return "Invalid"
    }
    else if (otp.length === 8 && otp.startsWith( "ph-")===true){
        return true;
    }
    else{
        return false;
    }    
}

