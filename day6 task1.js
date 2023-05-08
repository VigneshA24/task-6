class person {
    constructor(name, age, gender, email, mobile_number, city, country) {
      this.name = name
      this.age = age
      this.gender = gender
      this.email = email
      this.mobile_number = mobile_number
      this.city = city
      this.country = country
    }
    getName() {
      return this.name
    }
    getAge() {
      return this.age
    }
    getGender() {
      return this.gender
    }
    getEmail() {
      return this.email
    }
    getMobileNumber() {
      return this.mobile_number
    }
    getCity() {
      return this.city
    }
    getCountry() {
      return this.country
    }
    setName(name) {
      this.name = name
    }
    setAge(age) {
      this.age = age
    }
    setGender(gender) {
      this.gender = gender
    }
    setEmail(email) {
      this.email = email
    }
    setMobileNumber(mobile_number) {
      this.mobile_number = mobile_number
    }
    setCity(city) {
      this.city = city
    }
    setCountry(country) {
      this.country = country
    }
  }
  
  const person1 = new person("Vicky",23,"male","vicky@gmail.com",9876543212,"LasVegas","USA")
  const person2 = new person("Candy",22,"male","candy@gmail.com",9123456789,"Sanfransico","USA")
  console.log(person2.getName()) // "Candy"
  console.log(person1.getCity()) //"LasVegas"
person2.setCity("LosAngeles")
console.log(person2.getCity())  //"LosAngeles"
person1.setName("Vignesh")
console.log(person1.getName())  //"Vignesh"