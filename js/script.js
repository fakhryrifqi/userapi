fetch("https://jsonplaceholder.typicode.com/users").then((data) => {
    return data.json()
}).then((objectData) => {
    let tableData = "";
    objectData.map((values) => {
        tableData += `<tr>
        <td>${values.id}</td>
        <td>${values.name}</td>
        <td>${values.username}</td>
        <td>${values.email}</td>
        <td>${values.address.city}</td>
        <td>${values.phone}</td>
        <td>${values.website}</td>
        <td>${values.company.name}</td>
        </tr>`
    })
    document.getElementById("table_data").innerHTML = tableData
})