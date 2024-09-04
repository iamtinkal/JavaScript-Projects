document.querySelector("body").addEventListener('keypress', function (e) {
    console.log(e.key);
    console.log(e.code);
    document.querySelector("#key").innerHTML =

        `<table id="table" >
  <tr>
    <th>Key</th>
    <th>Key Code</th>
  </tr>
  <tr>
    <td >${e.key}</td>
    <td >${e.code}</td>
  </tr>
</table>`


})