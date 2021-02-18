

      //var tasks=[];
      //ADD TODOLIST
      function on_addbtn_click()
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
           li.appendChild(span);
           span.innerHTML=task_input+"<button id='delete'  class='libtn'  >DELETE</button>"+"<button id='edit' class='libtn'>EDIT</button>";
           task_input.value='';
           ul.appendChild(li);
     
          }  
      }
      const ul = document.querySelector('#myList');
      
      ul.addEventListener('click', function(event) {
       
        if(event.target.tagName === 'BUTTON') {
          const button = event.target;
          const span = button.parentNode;
          const li=span.parentNode;
          const ul = li.parentNode;
          if(button.textContent === 'DELETE') {
            ul.removeChild(li);   
         } else if(button.textContent === 'EDIT') {
            const span= li.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore(input, span);
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
    
   