/*function signature/sample */
function validOtp(otp) {
          // You have to write your code here
          if(typeof otp !== "string"){
            return "Invalid"
          }
          if(otp.length === 8 && otp.startsWith("ph-")){
            return true
          }
          else{
            return false
          }
}


const input = validOtp("ph-19f85")
console.log(input)