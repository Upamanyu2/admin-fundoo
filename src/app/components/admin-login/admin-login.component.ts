import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $(document).ready(function(){
      const Url='http://34.213.106.173/api/user/adminLogin';
      $("#button").click(function(){
        var body={
          "email":$("#email").val(),
          "password":$("#password").val()
        }
         $.ajax({
           url: Url,
           type:"POST",
           data: body,
           success: function(result){
             console.log(result);
             window.location.href=("/admin-dashboard");
           },
           error: function(error){
             console.log(`Error ${error}`)
           }
         })
      });
  });
  
 }
}

