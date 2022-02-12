let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];
let array =[];
let count = -1;

let listGlass = () => {
  let content = "";
  dataGlasses.map((glass) => {
    content += `
        <button class="btn btn-white vglasses__items col-4" onclick="choseGlass('${glass.id}')">
            <img src="${glass.src}" alt="">
        </button>
        `;
  });
  document.getElementById("vglassesList").innerHTML = content;
};
listGlass();

let choseGlass = (id) => {
  console.log(id);
  let vitri = 0;
  vitri = timGlass(id);     
  array.push(dataGlasses[vitri]);
  count++;
  // console.log(vitri);
  console.log(array);
  console.log(count);
  show(dataGlasses[vitri].name,dataGlasses[vitri].brand,dataGlasses[vitri].color,dataGlasses[vitri].price,dataGlasses[vitri].description,dataGlasses[vitri].virtualImg);

}
let removeGlasses=(Boolean)=>{
  if(count>0){
    if(Boolean)
  count++;
  else
  count--;
  show(array[count].name,array[count].brand,array[count].color,array[count].price,array[count].description,array[count].virtualImg);
  console.log(count);
  }
}

let show=(name,brand,color,price,description,virtualImg)=>{
  let row = `
    <h4 class="my-4">${name} - ${brand} (${color})</h4>
    <span class="alert alert-warning">$${price}</span><span class="text text-success ml-3 my-3">Stocking</span>
    <p class="my-3">${description}</p>
`;
  let row2 =`
  <img src="${virtualImg}" alt="">
  `;
document.getElementById("glassesInfo").style.display="block";
document.getElementById("glassesInfo").innerHTML=row;
document.getElementById("avatar").innerHTML=row2;

}

let timGlass = (id) => {
  let vitri=0;
  console.log(id);
  dataGlasses.map((glass, index) => {
    console.log(glass.id);
    if (glass.id == id) {vitri = index;}
  });
  return vitri;
};


