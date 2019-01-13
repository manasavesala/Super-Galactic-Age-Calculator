const mercuryAgeMultiplier = 0.24
const venusAgeMultiplier = 0.62
const marsAgeMultiplier = 1.88
const jupiterAgeMultiplier = 11.86
const msInYear = 365 * 24 * 60 * 60 * 1000;

export class Person {

  constructor(dob, lifeExpectancy) {
    this.birthDate = new Date(dob);
    this.lifeExpectancy = lifeExpectancy;
  }

  getEarthAge() {
    return -1;
  }

  getMarsAge() {
    return -1;
  }

  getVenusAge() {
    return -1;
  }

  getJupiterAge() {
    return -1;
  }

  getMercuryAge() {
    return -1;
  }

  getEarthYearsLeft() {
    return -1;
  }
 
  getMercuryYearsLeft() {
    return -1;
  }

  getVenusYearsLeft() {
    return -1;
  }

  getMarsYearsLeft() {
    return -1;
  }

  getJupiterYearsLeft() {
    return -1;
  }

}