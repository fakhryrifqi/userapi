fetch("https://jsonplaceholder.typicode.com/users").then((data) => {
    return data.json()
}).then((objectData) => {
    let tableData = "";
    objectData.map((values) => {
        tableData += `<tr>
        <td>${values.id}</td>
        <td>${values.address.street}</td>
        <td>${values.address.suite}</td>
        <td>${values.address.city}</td>
        <td>${values.address.zipcode}</td>
        <td>${values.address.geo.lat}, ${values.address.geo.lng}</td>
        </tr>`
    })
    document.getElementById("table_detail_address").innerHTML = tableData
})