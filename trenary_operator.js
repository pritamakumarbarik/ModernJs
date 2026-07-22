//Old way
const authenticated = true;

if (authenticated) {
  console.log("You are authenticated");
} else {
  console.log("You are not authenticated");
}

//New way using ternary operator
authenticated
  ? console.log("You are authenticated")
  : console.log("You are not authenticated");
