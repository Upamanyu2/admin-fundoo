import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery'
import 'datatables.net';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let token=localStorage.getItem("token");
    console.log(token);
    const Url1="http://34.213.106.173/api/user/UserStatics";
    $(document).ready(function(){
      $.ajax({
        url:Url1,
        headers:{
          'Authorization':token
        },
        type: "GET",
        success: function(result){
          console.log(result.data.details);
          let arr=[];
          arr = result.data.details;
          let html='';
          for(let index = 0; index < arr.length; index++){
            html += "<div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'><div class='card'>";
            html += "<div class='card-header' style='background-color: black; color: white'>" + arr[index].service+" </div>";
            html += "<div class='card-body'>" + arr[index].count+" </div>";
            html +="</div></div>";
          }
          $("#services").html(html);
          
          
        },
        error: function(error){
          console.log(error);
          
        }
      })
    // })
    
    // $(document).ready(function () {
      const Url="http://34.213.106.173/api/user/getAdminUserList";
      $.ajax({
        url:Url,
        type: "GET",
        success: function(result){
          console.log(result);
          let user=[];
          for(let i=0;i<result.data.data.length;i++){
            user.push([(i+1),result.data.data[i].firstName,result.data.data[i].lastName,result.data.data[i].email,result.data.data[i].service])
          }
          
         var table = $('#users').DataTable({
            data:user,
            "columnDefs":[{
              "targets":5,
              "render":function(){
                return '<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#details">click for Details</button>';
              }
            }]
          });
          $('#users  tbody').on('click', 'tr',function(){
            let rowIndex= table.row(this).index();
            console.log(result.data.data[rowIndex]);





            // var name="";
          
            // name=response.firstName+" "+response.lastName
            $("#lblFname").html(result.data.data[rowIndex].firstName +" "+ result.data.data[rowIndex].lastName);
        
            $("#mail").html("Email: "+result.data.data[rowIndex].email);
            $("#username").html("Username: "+result.data.data[rowIndex].username);
            $("#phonenumber").html("Phone Number: "+result.data.data[rowIndex].phoneNumber);
            $("#role").html("Role: "+result.data.data[rowIndex].role);
            $("#created_date").html("Created date: "+result.data.data[rowIndex].createdDate);
            $("#verification").html("Verification: "+result.data.data[rowIndex].emailVerified);
            $("#serv").html("Service:-"+result.data.data[rowIndex].service);
            $("#id").html("id:"+result.data.data[rowIndex].id);
            $("#btnpopop").click();
            console.log("clicked");



            
          } )
          
        },
        error : function(error){
          console.log(error);
          
        }
      });
      return false;
    });

    $("#logout").click(function(){
      const Url2 = "http://34.213.106.173/api/user/logout";
      $.ajax({
        url:Url2,
        headers:{
         'Authorization': token
        },
        type:"POST",
        success: function(result){
          
          console.log(result);
          localStorage.removeItem("token");
          window.location.href="/admin-login";
          
        },
        error: function(error){
          console.log(error);
          
        }
      })

      return false;
    })
    
    
  }

}
