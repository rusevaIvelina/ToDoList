//1.Adding anew item to the list:
    function newItem() {

    let list = $("#list");
    let li = $("<li></li>");
    let inputValue = $(input).val();
    li.append(inputValue);
  
    if(inputValue === " ") {
      alert("You must enter something!");
    } else {
      list.append(li);
    }
  
    //2.Crossing an item:
     function crossOut() {
  
       li.toggleClass("strike");
     }

    //adds eventListener
     li.on("dblclick", crossOut);
  
     //3.Deleting with "X":

       //creating "X" button
      let crossOutButton = $("<crossOutButton>X</crossOutButton");
      crossOutButton.append(document.createTextNode("X"));
      li.append(crossOutButton);
  
      //adds eventListener
      crossOutButton.on("click", deleteListItem);
  
      function deleteListItem() {
        li.addClass("delete");
      }
  
      //4.Reordering the items:
      $("#list").sortable();
    }