
      function onAddBtnClick()
      {
       
        var task_input=document.getElementById("inpt").value;
          if(task_input==="")
          {
              alert("You must be write somting");
          }
          else{
           var ul=document.getElementById("myList");
           const li=document.createElement("li");
           const span=document.createElement("span");  
           const editBtn = document.createElement('button');
          editBtn.textContent = 'EDIT';
          editBtn.className="libtn";
          const dtlBtn = document.createElement('button');
          dtlBtn.textContent = 'DETELE';
          dtlBtn.className="libtn";
          const div=document.createElement("div")
          const check=document.createElement("button");
          check.textContent="<i class='fas fa-check'></i>";
         
         
           li.appendChild(span);
           li.appendChild(check);
           li.appendChild(editBtn);
           li.appendChild(dtlBtn);
        
           span.innerHTML=task_input;
           task_input.value="";
           ul.appendChild(div);
           div.appendChild(li);
          
     
          }  
      }
     
      document.getElementById("myList").addEventListener('click', function(event) {
       
        if(event.target.tagName === 'BUTTON') {
          const button = event.target;
          console.log(button);
          const li = button.parentNode;
          const div = li.parentNode;
          const ul=div.parentNode;
       if(button.textContent === 'DETELE') {
            ul.removeChild(div);   
         } else if(button.textContent === 'EDIT') {
            const span= li.firstElementChild;
            const input = document.createElement('input');
            input.className="listinpt";
            input.type = 'text';
            input.value = li.firstElementChild.textContent;
            console.log(input.value);
            li.insertBefore(input,span);
            li.removeChild(span);
            button.textContent = 'UPDATE';
          } else if(button.textContent === 'UPDATE') {
            const input = li.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = 'EDIT';
          }

       }
     
      });
      
     function onRstBtnClick(){
        document.getElementById("myList").innerHTML="";
      }


      const show=document.getElementById("selected");
      show.addEventListener("click",function(e){
        const option=show.childNodes;
        if(e.target.tagName===option)
        {  
          const optn = e.target;
          const  stl= optn.parentNode;
          if(document.textContent==="All")
          {
            const ul=document.getElementById("myList");
            const div=ul.childNodes;
            const li=div.childNodes;
            ul.style.display="flex";
            
          }
          else if(document.textContent==="Completed")
          {
            const checkbox=li.firstElementChild
           
            
          }
        }
       
      });
    
   