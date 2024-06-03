function searchfun(){
    var input, filter, table, tr, td, i, j, txtValue, found;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "";
    table = document.getElementById('Table'); // Change 'yourTable' to the ID of your table
    tr = table.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        found = false;
        for (j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                    break; // Break out of the inner loop, we found a match
                }
            }
        }
        if (found) {
            resultsDiv.appendChild(tr[i].cloneNode(true)); // Clone the entire row
        }
    }
}