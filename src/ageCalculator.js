const mercuryAgeMultiplier = 0.24 ; 
const venusAgeMultiplier = 0.62 ;
const marsAgeMultiplier = 1.88 ; 
const jupiterAgeMultiplier = 11.86 ;

export class Person {

  constructor(dob, lifeExpectancy) {
    let currentYear = new Date().getYear();
    this.birthYear = new Date(dob).getYear();
    this.age = currentYear - this.birthYear;
    this.lifeExpectancy = lifeExpectancy;
  }

  getEarthAge() {
    return Math.floor(this.age);
  }

  getMarsAge() {
    return Math.floor(this.age / marsAgeMultiplier);
  }

  getVenusAge() {
    return Math.floor(this.age / venusAgeMultiplier);
  }

  getJupiterAge() {
    return Math.floor(this.age / jupiterAgeMultiplier);
  }

  getMercuryAge() {
    return Math.floor(this.age / mercuryAgeMultiplier);
  }

  getEarthYearsLeft() {
    return Math.abs(Math.abs(Math.floor(this.lifeExpectancy - this.age)));
  }
 
  getMercuryYearsLeft() {
    return  Math.abs(Math.floor((this.lifeExpectancy/mercuryAgeMultiplier) - (this.age / mercuryAgeMultiplier)));
  }

  getVenusYearsLeft() {
    return Math.abs(Math.floor((this.lifeExpectancy/venusAgeMultiplier) - (this.age / venusAgeMultiplier)));
  }

  getMarsYearsLeft() {
    return Math.abs(Math.floor((this.lifeExpectancy/marsAgeMultiplier) - (this.age / marsAgeMultiplier)));
  }

  getJupiterYearsLeft() {
    return Math.abs(Math.floor((this.lifeExpectancy/jupiterAgeMultiplier) - (this.age / jupiterAgeMultiplier)));
  }

}