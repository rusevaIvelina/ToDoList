   //1. Adds a new item to thew list:
   function newItem() {

    let list = $("#list");
    let li = $("<li></li>");
    let inputValue = $("input").val();
    li.append(inputValue);

    if (inputValue === "") {
        alert("You must write something!");
    } else {
        list.append(li);
      }

    //2. Crosses an item from the list:
    function crossOut() {
        li.toggleClass("strike");
      }

      li.on("dblclick", crossOut);

    //3. Deletes an item with "X";
    let crossOutButton = $("<crossOutButton>X</crossOutButton>");
    li.append(crossOutButton);
    crossOutButton.on("click", deleteListItem);

    function deleteListItem() {
      li.addClass("delete");
      }

    // 4. Reordering the items:
      $("#list").sortable();
  }