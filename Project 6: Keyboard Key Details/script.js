document.querySelector("body").addEventListener('keypress', function (e) {
    console.log(e.key);
    console.log(e.code);
    document.querySelector("#key").innerHTML =

        `<table id="table" , style="width:20%">
  <tr>
    <th>Key</th>
    <th>Key Code</th>
  </tr>
  <tr>
    <td align = "center">${e.key}</td>
    <td align = "center">${e.code}</td>
  </tr>
</table>`


})