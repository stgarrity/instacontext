      var load = function () {
        var username = localStorage["username"];
        if (username) {
          document.getElementById("username").value = username;
        }

        var password = localStorage["password"];
        if (password) {
          document.getElementById("password").value = password
        }

      };

      var save_opts = function () {
        localStorage["username"] = document.getElementById("username").value;
        localStorage["password"] = document.getElementById("password").value;
      };

      load();
      document.querySelector("#save").addEventListener('click', save_opts);
