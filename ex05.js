const categories = [
  {
    id: 1,
    name: "Chuyên mục 1"
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1"
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1"
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2"
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3"
          }
        ]
      },
      {
        id: 6,
        name: "Chuyên mục 2.3"
      }
    ]
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1"
      },
      {
        id: 8,
        name: "Chuyên mục 3.2"
      },
      {
        id: 9,
        name: "Chuyên mục 3.3"
      }
    ]
  }
];

const select = document.querySelector("select");
let content = "";
function genElement(arr, str) {
  arr.forEach((item) => {
    content += `<option value="${item.id}">`;
    if (str === "") {
    } else {
      str += " ";
    }
    content += str + `${item.name}</option>`;
    str = str.slice(0, str.length - 1);
    if (item.children) {
      genElement(item.children, str + "--");
    }
  });
}
genElement(categories, "");
console.log(content);
select.innerHTML = content;
