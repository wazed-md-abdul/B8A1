async function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}

// Sample Usage / Testing:
// 1. age 20 (Resolves after 1 second)
validateAgeAsync(20)
  .then((res) => console.log(res))
  .catch((err) => console.error(err.message));

// 2. age 15 (Rejects immediately)
validateAgeAsync(15)
  .then((res) => console.log(res))
  .catch((err) => console.error(err.message));

