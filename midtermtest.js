    // Global variable
    let data = ["syllabus.html", "p1.html", "p2.html", "style.html", "email.html", "system.html", "process.html"];

    function displayTable() {
      var startRange = document.getElementById("startRange").value;
      var endRange = document.getElementById("endRange").value;
      var tableContainer = document.getElementById("tableContainer");

      // Reset table container
      tableContainer.innerHTML = "";

      // Convert inputs to numbers
      startRange = parseInt(startRange);
      endRange = parseInt(endRange);

      // Check for valid range
      if (startRange < 1 || endRange > data.length || startRange > endRange) {
        tableContainer.textContent = "Invalid range, valid range: 1-" + data.length;
        return;
      }

      var table = document.createElement("table");

      var headerRow = document.createElement("tr");
      var headerCell = document.createElement("th");
      headerCell.textContent = "Links";
      headerRow.appendChild(headerCell);
      table.appendChild(headerRow);

      for (var i = startRange - 1; i < endRange; i++) {
        var link = data[i];
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        var a = document.createElement("a");
        a.href = link;
        a.textContent = link;
        cell.appendChild(a);
        row.appendChild(cell);
        table.appendChild(row);
      }

      tableContainer.appendChild(table);

      tableContainer.insertAdjacentHTML("beforebegin", "Valid Range: 1-" + data.length);
    }
