

      var tasks=[];
      //ADD TODOLIST
      function on_addbtn_click()
      {
        var task_input=document.getElementById("inpt").value;
          if(task_input==="")
          {
              alert("You must be write somting");
          }
          else{
            tasks.push(task_input);
           
           var ul=document.getElementById("myList");
                ul.innerHTML = '';
             for(var i=0;i<tasks.length;i++)
             {  
             
                 const dtlbtn=document.createElement("button");
                 dtlbtn.innerText="delete";
                 dtlbtn.className="libtn";
                 const editbtn=document.createElement("button");
                 editbtn.innerText="edit";
                 editbtn.className="libtn";
                const li=document.createElement("li");
                li.className="ul"
              ul.appendChild(li);
              li.innerHTML=tasks[i];
               //append delete button to list items
              li.appendChild(editbtn);
              li.appendChild(dtlbtn);
             }
          }  
      }
      
   