 function clock()
       {
          var dy=new Date()
          var roju=dy.getDay()
          switch(roju)
          {
            case 0:roju="SUNDAY";
                     document.getElementById('b').style.backgroundImage="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0roJzh1_L1_0DlqPsltGzNwQr1GK4Hx9tTQ&s)";
                  document.getElementById('b').style.backgroundSize="100% 750px";
            break;
            case 1:roju="MONDAY";
                    document.getElementById('b').style.backgroundImage="url(data:image/jpeg;base64,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)";
                   document.getElementById('b').style.backgroundSize="100% 750px";
            break;
            case 2:roju="TUESDAY";
                  document.getElementById('b').style.backgroundImage="url(data:image/jpeg;base64,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)";
                document.getElementById('b').style.backgroundSize="100% 750px";
            break;
            case 3:roju="WEDESDAY";
                   document.getElementById('b').style.backgroundImage="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOytCo1X5_Y2KcrwEErC1Jq3uMlwKBRbAfssdFovZOT9gQ8FY-J-ZlEJnbcGYKSBXFJM&usqp=CAU)";
                  document.getElementById('b').style.backgroundSize="100% 750px";
            break;
            case 4:roju="THURSDAY";
                 document.getElementById('b').style.backgroundImage="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3XyEdUy7ldSSSFeVMtwsAKn5d0J_UdhwdFQ&s)";
                document.getElementById('b').style.backgroundSize="100% 750px";

            break;
            case 5:roju="FRIDAY";
                 document.getElementById('b').style.backgroundImage="url(https://media.istockphoto.com/id/497627966/photo/green-rice-fild-with-evening-sky.jpg?s=612x612&w=0&k=20&c=WvTDpGg17HOtBgtCoVYAXH3KboHGw1UCLBbE80Cx0p8=)";
                document.getElementById('b').style.backgroundSize="100% 750px";
            break;
            case 6:roju="SATURDAY";
                document.getElementById('b').style.backgroundImage="url(https://img.freepik.com/free-photo/beautiful-view-sea-with-sun-shining-blue-sky-background_181624-8609.jpg?semt=ais_hybrid&w=740&q=80)";
                document.getElementById('b').style.backgroundSize="100% 750px";
            break; 
          }
             document.getElementById('day').innerHTML=roju;
       
          var dd=dy.getDate()
          var mon=dy.getMonth()
          var yyyy=dy.getFullYear()
        
         switch(mon)
         {
            case 0:mon="JAN";
            break;
            case 1:mon="FEB";
            break;
            case 2:mon="MAR";
            break;
            case 3:mon="APR";
            break;
            case 4:mon="MAY";
            break;
            case 5:mon="JUN";
            break;
            case 6:mon="JUL";
            break;
            case 7:mon="AUG";
            break;
            case 8:mon="SEP";
            break;
            case 9:mon="OCT";
            break;
            case 10:mon="NOV";
            break;
            case 11:mon="DEC";
            break;
         }
         if(dd>0 && dd<10)
         {
             dd="0" + dd
         }
          else
         {
            dd=dd
         }
         document.getElementById('date').innerHTML=dd + " / " + mon + " / " + yyyy

         var hh=dy.getHours()
         var mm=dy.getMinutes()
         var sec=dy.getSeconds()
         var ampm=""
         if(hh>=12)
         {
            ampm="PM"
         }
         else
         {
            ampm="AM"
         }
         if(hh>0 && hh<10)
         {
            hh="0" + hh
         }
         else
         {
            hh-=12
         }
         document.getElementById('time').innerHTML=hh + " : " +  mm  + " : "  + sec  + "   " + ampm
         setTimeout(function(){clock(), 1000})
  }