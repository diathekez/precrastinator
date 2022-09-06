
        // document.getElementById("things").innerText = `You have ${Object.values(localStorage).length} things left to do `
        // document.getElementById("things").innerText = `You have ${Object.values(localStorage).length} things left to do `
 
        console.log(Object.values(localStorage).length);
  
        function createItem(){
          const belement = document.querySelector(".tasksList");
          belement.innerHTML="";
          let keys= Object.keys(localStorage)
          keys=keys.sort()
          for (let index = 0; index < keys.length; index++) {
          const idk = document.createElement("li");
          idk.style.width='max-content'
          const spann = document.createElement("span");
          const ppp = document.createElement('div')
          const text = document.createTextNode(
            `${localStorage.getItem(keys[index])}`
          );
          const belement = document.querySelector(".tasksList");
          
  
          belement.appendChild(idk);
          idk.className = "not";
          spann.className = 'fa fa-trash'
  
          idk.appendChild(ppp);
          ppp.appendChild(text)
          ppp.insertAdjacentHTML('beforeEnd',`<button onclick='trashClick(${keys[index]})' class='trashBtn'><span class='fa fa-trash'></span></button>`)
          text.className = "plzwork"
  
          //         idk.textContent =  Object.values(localStorage)
          //         document.body.append(idk)
        }
  
        }
  
  
        createItem();
  
        document
          .querySelector(".addButton")
          .addEventListener("click", myFunction);
  
        function myFunction() {
          //storage num is the localstorage key it will always be +1 of the current local storage length
          let keys= Object.keys(localStorage)
          keys=keys.sort()
          let max =keys[keys.length-1]
          if (! max){
            max=0
          }
          let storagenum =
          localStorage.setItem(
            parseInt(max)+1,
            document.querySelector(".inputText").value
          );
          createItem();
          count()
        }
  
        const todoItem2 = document.querySelectorAll("li");
  
        Array.from(todoItem2).forEach((el) => {
          el.addEventListener("click", markCompleteornincomplete);
        });
  
        function trashClick(index){
          console.log(index ,"trash click")
          localStorage.removeItem(index);
          createItem();
          count()
  
        }
        
  
        function markCompleteornincomplete() {
          if (this.classList.contains("not")) {
            this.classList.remove("not");
            this.classList.add("completed");
            count()
  
            console.log("haha1");
          } else {
            this.classList.remove("completed");
            this.classList.add("not");
            console.log("haha2");
            count()
          }
        }
  
        const deleteBtn = document.querySelectorAll('.fa .fa-trash')
        console.log('deleteBtn',deleteBtn)
  
  Array.from(deleteBtn).forEach((el)=>{
    console.log("e",e)
  el.addEventListener('click', deleteTodo)
  el.style.background='green'
  
  
  })
  
  function deleteTodo (){
  
  console.log('delete')

  }



  


  function count(){

    let numm = document.querySelectorAll('.not').length
    if(numm == 1){
        document.getElementById("things").innerText = `You have ${document.querySelectorAll('.not').length} thing left to do `

    }else {
        document.getElementById("things").innerText = `You have ${document.querySelectorAll('.not').length} things left to do `
    }
  }

  count()