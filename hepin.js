let fruits = JSON.parse(localStorage.getItem("userdataa")) || [];

let isEdit = -1;

const editdata = (idx) => {
  console.log(idx);
  isEdit = idx;

  const recoredit = fruits.find((item, index) => {
    return (index === idx)
  });
  // console.log(recoredit);

  document.getElementById("fname").value = recoredit.fname;
  document.getElementById("email").value = recoredit.email;
  document.getElementById("pw").value = recoredit.password;
};

const table = document.getElementById("myTable");
const form = document.getElementById("myForm");


const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
  const searchValue = form.search.value.toLowerCase();

  const filteredData = fruits.filter(row => {
    return row.fname.toLowerCase().includes(searchValue.toLowerCase()) || row.email.toString().includes(searchValue.toLowerCase()) || row.password.toString().includes(searchValue.toLowerCase());
  });

  const tbody = table.querySelector("tbody");

  tbody.innerHTML = ""

  filteredData.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${row.fname}</td>
    <td>${row.email}</td>
    <td>${row.password}</td>`;
    tbody.appendChild(tr);
  });

});



const renderHTMLTable = () => {
  document.getElementById("tablebody").innerHTML = fruits
    .map((row, index) => {
      return `<tr>
      <td>
      <div class="from-group">
      <input type="checkbox" class="checked" name="">
      </div>
      </td>
      <td>${row.fname}</td>
      <td>${row.email}</td>
      <td>${row.password}</td>
      <td><button onclick="deleteData(${index})">Delete</button>
           <button onclick="editdata(${index})">edit</button></td>    
      </tr>`;
    })
    .join("");
};

renderHTMLTable();

const deleteData = (indx) => {
  console.log(indx);

  const deletedData = fruits?.filter((item, index) => { return index !== indx });
  console.log(deletedData);

  localStorage.setItem("userdataa", JSON.stringify(deletedData));
  fruits = deletedData;
  renderHTMLTable();


}


function hello() {
  const userFname = document.getElementById("fname").value;
  console.log(userFname);

  const userEmail = document.getElementById("email").value;
  console.log(userEmail);

  const userPass = document.getElementById("pw").value;
  console.log(userPass);

  const person = { fname: userFname, email: userEmail, password: userPass };

  if (isEdit !== -1) {
    const updated = fruits.map((ite, index) => {
      if (isEdit === index) {
        return person;
      } else return ite;
    });

    fruits = updated;
  } else {
    fruits.push(person);
  }

  localStorage.setItem("userdataa", JSON.stringify(fruits));

  renderHTMLTable();
}


// function selects() {
//   var ele = document.getElementsByName('chk');
//   for (var i = 0; i < ele.length; i++) {
//     if (ele[i].type == 'checkbox')
//       ele[i].checked = true;
//   }  
// }

// const selectAll = document.querySelector('.ck input');
// 		const allCheckbox = document.querySelectorAll('.cks:not(.ck) input');
// 		let listBoolean = [];

// 		allCheckbox.forEach(item=> {
// 			item.addEventListener('change', function () {
// 				allCheckbox.forEach(i=> {
// 					listBoolean.push(i.checked);
// 				})
// 				if(listBoolean.includes(false)) {
// 					selectAll.checked = false;
// 				} else {
// 					selectAll.checked = true;
// 				}
// 				listBoolean = []
// 			})
// 		})

// 		selectAll.addEventListener('change', function () {
// 			if(this.checked) {
// 				allCheckbox.forEach(i=> {
// 					i.checked = true;
// 				})
// 			} else {
// 				allCheckbox.forEach(i=> {
// 					i.checked = false;
// 				})
// 			}
// 		})

const selectAll = document.querySelectorAll('.check');
const allCheckbox = document.querySelectorAll('.checked');
let listBoolean = [];
console.log(selectAll);

selectAll[0].addEventListener('click', function () {
  if (this.checked) {
    allCheckbox.forEach(i => {
      i.checked = true;
    })
  } else {
    allCheckbox.forEach(i => {
      i.checked = false;
    })
  }
})

allCheckbox.forEach(item => {
  item.addEventListener('click', function () {
    allCheckbox.forEach(i => {
      listBoolean.push(i.checked);
    })
    if (listBoolean.includes(false)) {
      console.log(listBoolean);
      selectAll[0].checked = false;
    } else {
      selectAll[0].checked = true;
      console.log(listBoolean);

    }
    listBoolean = []
  })
})




// main.onclick = () => {
//   if (main.checked == true) {
//     for (let i = 0; i < select.length; i++) {
//       select[i].checked = true;
//     }
//   }
//   else {
//     for (let i = 0; i < select.length; i++) {
//       select[i].checked = false;

//     }
//   }
// }