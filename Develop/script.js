$(function () {

    // Save button click event listener
      $(".saveBtn").on("click", function () {
      let text = $(this).siblings(".description").val();
      let time = $(this).parent().attr("id");
      localStorage.setItem(time, text);
    });
  
    // Past, present, future function to change color of time blocks
      function workTracker() {
  
      let currentHour = dayjs().hour();
      $(".time-block").each(function () {
        let blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } else if (blockHour === currentHour) {
          $(this).addClass("present")
        } else {
          $(this).addClass("future")
        }
      });
    }
  
    
  });

