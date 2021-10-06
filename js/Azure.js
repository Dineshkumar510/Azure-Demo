window.onscroll = function() {scroll()};

        var navbar = document.getElementById("azure-header-minimum");

        function scroll() {
          if (document.body.scrollTop > 780) {
            navbar.style.top = "0";
          } else {
            navbar.style.top = "-160px";
          }
        }

        


