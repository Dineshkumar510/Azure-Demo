window.onscroll = function() {scroll()};

        
        function scroll() {
          if (document.body.scrollTop > 780 || document.documentElement.scrollTop > 20) {
            document.getElementById("azure-header-minimum").style.top = "0";
          } else {
            document.getElementById("azure-header-minimum").style.top = "-60px";
          }
        }