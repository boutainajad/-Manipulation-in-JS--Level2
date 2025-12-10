const users = [
  { id: 1, name: "Kamal", age: 22, city: "Marrakech", score: 45 },
  { id: 2, name: "Sami", age: 30, city: "Rabat", score: 72 },
  { id: 3, name: "Issam", age: 28, city: "Marrakech", score: 60 },
  { id: 4, name: "Oualid", age: 19, city: "Agadir", score: 33 },
  { id: 5, name: "Hassan", age: 33, city: "Casablanca", score: 80 },
  { id: 6, name: "Farah", age: 25, city: "Marrakech", score: 50 },
  { id: 7, name: "Salma", age: 40, city: "Rabat", score: 90 },
  { id: 8, name: "Hanae", age: 21, city: "Marrakech", score: 41 },
  { id: 9, name: "Ibrahim", age: 27, city: "Casablanca", score: 55 },
  { id: 10, name: "Jade", age: 24, city: "Agadir", score: 48 }
];
// 1. Trier les utilisateurs par âge (croissant)
// A
const sorted1 = users.sort((a, b) => a.age - b.age);
console.log(sorted1);
// B 
function trierAge(users) {
    let copie = [];
    for (let i = 0; i < users.length; i++) {
        copie[i] = users[i];
    }

    for (let i = 0; i < copie.length ; i++) {        
        for (let j = 0; j < copie.length - 1; j++) { 
            if (copie[j].age > copie[j + 1].age) {
                let temp = copie[j];
                copie[j] = copie[j + 1];
                copie[j + 1] = temp;
            }
        }
    }

    return copie;
}
console.log(trierAge(users))


// 2. Trier par score (décroissant)
// A 

const sorted2 = users.sort((a, b) => b.score - a.score);
console.log(sorted2);
 
// b 
function trierAge2(users){
    let copie =[];
    for(let i = 0 ; i < users.length; i++){
        copie[i] = users[i];
    }
      for (let i = 0 ; i < copie.length; i++){
        for (let j = 0 ; j < copie.length - 1 ; j++){
            if (copie[j].score < copie[j + 1].score){
                let temps = copie[j];
                copie[j] = copie[j + 1];
                copie[j + 1]= temps;
            }
        }
      }
      return copie;
}
console.log(trierAge2(users))

// 3. Ajouter une propriété status: "active" à chaque utilisateur
// A 

const status1 = users.map(user => ({...user , status : "Active"}));
console.log(status1)

// B 

function ajouterstatus(users){ 
    const result =[];
    for (let i= 0; i < users.length; i++ ){
        let newUser = {};
        newUser.id = users[i].id;
        newUser.name = users[i].name;
        newUser.age = users[i].age;
        newUser.city = users[i].city;
        newUser.score = users[i].score;
        newUser.status = "Active";
        result[i] = newUser;
    }
    return result;
    }
    console.log(ajouterstatus(users))

// 4. Créer un tableau contenant uniquement les objets {name, score}
// A 

const tab = users.map(user => ({user: user.name, score : user.score}))
console.log(tab)

// B 
function tableau(users){
  const result = [];
  for (let i = 0; i < users.length ; i++){
    let newUser = {};
    newUser.name = users[i].name;
    newUser.score= users[i].score;
    result[i] = newUser;
  }
  return result;
}
console.log(tableau(users));

// 5. Récupérer la liste des villes sans doublons
// A 
let userCity = users.map(user => user.city);
let city = [... new Set(userCity)];
console.log(city)

// b 
function villesDoublons(users) {
  const resultat = [];
  
  for (let i = 0; i < users.length; i++) {
    let dejaVu = 0;
    
    for (let j = 0; j < i; j++) {
      if (users[j].city === users[i].city) {
        dejaVu = 1;
      }
    }
    
    if (dejaVu === 0) {
      resultat[resultat.length] = users[i].city;
    }
  }
  
  return resultat;
}
console.log(villesDoublons(users));

// 6. Trouver l’utilisateur ayant le score le plus proche de 50
// A 
const plusProche= users.reduce((closest, user) => {
  const Actuelle = Math.abs(user.score - 50);
  const Closest = Math.abs(closest.score - 50);
  
  if (Actuelle < Closest) {
    return user;
  }
  return closest;
});

console.log(plusProche);

// B
function plusproche(users){
  let proche = users[0];
  let min = users[0].score - 50;
  if (min < 0){
    min = -min;
  }
  for (let i = 1; i < users.length; i++){
    let dist = users[i].score - 50;
    if (dist < 0){
      dist = -dist
    }
    if (dist < min){
      min = dist;
      proche = users[i]; 
    }
  }
  return proche
}
console.log(plusproche(users))

// 7. Grouper les utilisateurs par ville
// A 

const parVille = users.reduce((acc, user) => {
  if (!acc[user.city]) {
    acc[user.city] = [];
  }
  acc[user.city].push(user);
  return acc;
}, {});

console.log(parVille);

// B 

const parVille2 = {};

for (let i = 0; i < users.length; i++) {
  const ville = users[i].city;
  
  if (!parVille[ville]) {
    parVille[ville] = [];
  }
  
  parVille[ville].push(users[i]);
}

console.log(parVille);

