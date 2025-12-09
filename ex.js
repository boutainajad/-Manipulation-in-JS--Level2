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
const sorted = users.sort((a, b) => a.age - b.age);
console.log(sorted);
// B 
function trierAge(users){
    let copie =[];
    for(let i = 0 ; i < users.length; i++){
        copie[i] = users[i];
    }
      for (let i = 0 ; i < copie.length; i++){
        for (let j = 0 ; j < copie.length ; j++){
            if (copie[j] > copie[j + 1]){
                let temps = copie[j];
                copie[j] = copie[j + 1];
                copie[j + 1]= temps;
            }
        }
      }
      return copie;
}
console.log(trierAge(users))
