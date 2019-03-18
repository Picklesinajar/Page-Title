$("button").click(function() {
    var age = $(".age").val();
    var gender = $(".gender").val();

    if (gender === "BOI" && age < 18) {
        $(".message").text("your trash");
        $(".message").append("<img src='https://i.pinimg.com/236x/b1/de/e3/b1dee34baac9802a935a30195a2e60ae--rain.jpg'>");
    } else if (gender === "EPIC girl gamer" && age < 18) {
        $(".message").text("ur a trap");
        $(".message").append("<img src='https://pbs.twimg.com/media/DGV36HTUAAAQoq_.jpg'>");
    } else if (gender === "BOI" && age >= 18) {
        $(".message").text("your mom");
        $(".message").append("<img src='http://www.graphicsdb.com/data/media/441/your_mom.jpg'>");
    } else if (gender === "EPIC girl gamer" && age >= 18) {
        $(".message").text("your dad");
        $(".message").append("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/220px-Karl_Marx_001.jpg'>");
    }
    //}else{
    //    $(".message").text("incorrect");
    //}
});