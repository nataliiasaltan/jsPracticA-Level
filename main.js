//-----------------------------------------------ОБЪЕКТЫ- №2 -------------------------------------------------------------
//let user2 = {...user1 };
//спред оператор создает пустой обьект или массив
//let user2 = [...user1]
//никогда обьект не равен другому обьекту из-за ссылочности.
//хост обьекты в них ничего не менять: window, document, location (на каком хосте находитесь)- passname и др

// const getFullInfo = function(user) {
//     console.log(this.name + ' ' + this.age)
// }

// let user1 = {
//     name: "Vasya",
//     age: 22,
//     getfullname: getFullInfo
// };

// let user1 = {
//     name: "Petya",
//     age: 44,
//     getfullname: getFullInfo
// };

// user1.getFullInfo()
// user2.getFullInfo()

// конструктор функция всегда возвращает this она может делать что угодно это значит что при каждом создании массива вы делаете newArray

// const Human = function(firstName, secondName) {
//     this.firstName = firstName;
//     this.secondtName = secondName;
//     this.age = 1;
//     arrOfUsers.push(this) // cразу пушить
// }

// Human.prototipe.getFullName = function() {
//     return this.FirstName + ' ' + this.secondName;
// }



// const user10 = new Human("Vasya", "MMM", );
// const user2 = new Human("Pett", "KKK");


// const arrOfUsers = [user10, user2]
// for (let i = 0; i < arrOfUsers.length; i++) {
//     console.log(arrOfUsers[i].getFullName())
// }

//prototipe - содержит методы кот могут работать с классом


// задание на уроке создать конструктор в котором добавлять ІД юзера автоматически +1 и выводить всех юзеров можно глобальную переменную
// ID не создавать так как она есть в неявных свойствах объектах, (можно без глобальной переменной)

// let id = 0;

// const User = function(firstName, secondName) {
//     this.firstName = firstName;
//     this.secondName = secondName;
//     this.age = 1; // создаем сами сразу всем
//     this.id = ++id; // cоздаем сами сразу всем
// }

// const user1 = new User('Sasha', 'Gfrvev');
// const user2 = new User('Dasha', 'Iyuyy');

// console.log(user1);
// console.log(user2);