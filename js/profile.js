let res = JSON.parse(localStorage.getItem("Auth"));
$("#us").innerText = res.email;