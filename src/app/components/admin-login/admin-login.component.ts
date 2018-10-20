import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';      // importing for using jquery functionality.

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
export class AdminLoginComponent implements OnInit { // class for exporting the functions to the html file of the component or other files for all functionality.

  constructor() { }
/*--------------------------------------------------------------------------------------------------------------------------------------------------------- */
  ngOnInit() {
    
    // $(document).ready(function(){  //Starting the ajax call on initialisation
      const Url='http://34.213.106.173/api/user/adminLogin'; //api link for the login button hitting and posting the email and password.
      $('#Email_error, #Password_error, #Email_error1, #Password_error1').hide(); //hiding the error when correct password is being provided.
/*--------------------------------------------------------------------------------------------------------------------------------------------------------- */     
      
      $("#button").click(function(){       //function gets called while the button is clicked.
        let email =$("#email").val();      //value is stored for providing the validation.
      let password =$("#password").val(); //value is stored for providing the validation.
      let index1 =email.indexOf("@");     
      let index2 =email.indexOf(".");
      let diff =index2-index1;
      if(index1==undefined||index2==undefined||index1==0||index2<index1||diff<=2){ //checking for a valid email format.
        $('#Email_error1').show();  //error is shown
      }
      else if(email=="" ||email==" "){  //checking whether email is present or not.
        $("#Email_error").show();   //error is shown.
        
        return;
      }
      else if(password==""||password==" "){ //checking whether password is present or not.
        $("#Password_error").show();  //error is shown.
      }
      else if(password.length<6){   //checking the length of the password.
        $("#Password_error1").show(); //error is shown.
      }
      else{
        $("#Email_error, #Email_error1, #Password_error, #Password_error1").hide();    //hiding the error when correct password is being provided. 
        
        var body={
          "email":$("#email").val(),
          "password":$("#password").val()
        }
         $.ajax({                         //ajax calling for posting the email and password to the api.
           url: Url,
           type:"POST",
           data: body,
           success: function(result){      //post occurs with success when right data is being posted.
             console.log(result);
             localStorage.setItem("token",result.id);
             window.location.href="/admin-dashboard";
           },
           error: function(error){             //error is caused during the wrong post
             alert("Invalid credentials")
           }
         });

      }  
       
      // });
  });                         //Ending the ajax call on initialisation
/*--------------------------------------------------------------------------------------------------------------------------------------------------------- */
  
 }
}

