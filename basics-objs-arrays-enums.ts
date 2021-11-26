//Basic Types
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return n1 + n2;
    }
}

const num1 = 5;
const num2 = 2.5;
const printResult = true;
const resultPhrase = 'Result is: ';

add(num1, num2, printResult, resultPhrase);

//Objects
const person1: {
    name: string;
    age: number;
  } = {
    name: "Max",
    age: 27,
  };
  
  console.log(person1.name);
  
  //Arrays, tuples, and enums.
  const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
  } = {
    name: "Max",
    age: 27,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
  };
  
  person.role.push("admin");
  
  let favoriteActivities: string[];
  favoriteActivities = ["Sports"];
  
  console.log(person.name);
  
  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
  }
  
  enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
  }
  