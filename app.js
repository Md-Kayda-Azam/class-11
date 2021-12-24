
const developer = document.querySelector('.developer');




devsdata.map(data => {
    
    developer.innerHTML += `
 
       
    <div class="trem-member">

            <img src="${data.Photo }" alt="">
            <h2>${data.Name}</h2>
            <p>${data.Skill}</p>
            <p>Age : ${data.Age}</p>
            <p>Location : ${data.Location}</p>
        </div>
    
    `;

});

const table = document.querySelector('.developer-table table tbody');

devsdata.map(data => {

    table.innerHTML += `
    
            <tr>
                <td>${data.id}</td>
                <td>${data.Name}</td>
                <td>${data.Age}</td>
                <td>${data.Skill}</td>
                <td>${data.Location}</td>
                <td> <img style="width: 50px; height: 50px;" src="${data.Photo}"> </td>
            </tr>
    
    `;

});

const studentdata = document.querySelector('.student-data');

students.map(data => {

    studentdata.innerHTML += `
    
    <div class="allstadent">

            <img src="${data.photo}" alt="">
            <h2>${data.name}</h2>
            <p>Roll : ${data.roll}</p>
            <p>Reg  : ${data.reg}</p>
            <p>Age : ${data.age}</p>
            <p>Father Name: ${data.fname}</p>
            <p>Mother Name: ${data.mname}</p>
            <p>Gender : ${data.gender}</p>
            <p>Location : ${data.location}</p>
            
            
        </div>
    
    `;
});




const studenttable = document.querySelector('.studenttable table tbody');

students.map(data => {

    studenttable.innerHTML += `

    <tr>
    <td>${data.id}</td>
    <td>${data.name}</td>
    <td>${data.roll}</td>
    <td>${data.reg}</td>
    <td>${data.age}</td>
    <td>${data.fname}</td>
    <td>${data.mname}</td>
    <td>${data.gender}</td>
    <td>Location : ${data.location}</td>
    <td><img style="width: 50px; height: 50px;" src="${data.photo}"></td>
   </tr>

    `;
});


const phonebooks = document.querySelector('.phonebook');

phonenumber.map(data => {

    phonebooks.innerHTML += `
    
    <div class="phonebook-all">
            <img src="${data.Photo}" alt="">
            <p>ID No : ${data.id}</p>
            <h2>${data.Name}</h2>
            <p>Age : ${data.Age}</p>
            <p>Phone Number : ${data.phone}</p>
            <p>location : ${data.Location}</p>
        </div>
    
    `;


});

const phonedata = document.querySelector('.phonetable table tbody');

phonenumber.map(data => {

    phonedata.innerHTML += `
    
                     <tr>
                        <td>${data.id}</td>
                        <td>${data.Name}</td>
                        <td>${data.Age}</td>
                        <td>${data.phone}</td>
                        <td>${data.Location}</td>
                        <td> <img style ="width: 50px; height: 50px" src='${data.Photo}'> </td>
                    </tr>
    
    
    `;

});