import { Person } from '../src/ageCalculator' 


const msInYear = 365 * 24 * 60 * 60 * 1000;

describe('AgeCalculator', function() {

 let person;
 let testEarthAge;

  beforeEach(function() {
    testEarthAge = 25;
    let testDate = new Date();
    testDate.setYear(testDate.getYear() - testEarthAge);
    person = new Person(testDate.toString(), 70);
  });

  it('should test whether earth age is correct', function() {
    expect(person.getEarthAge()).toEqual(testEarthAge);
  });

  it('should test whether mercury age is correct', function() {
    let expectedAge = Math.floor(testEarthAge / .24);
    expect(person.getMercuryAge()).toEqual(expectedAge);
  });

  it('should test whether venus age is correct', function() {
    let expectedAge = Math.floor(testEarthAge / .62);
    expect(person.getVenusAge()).toEqual(expectedAge);
  });

  it('should test whether mars age is correct', function() {
    let expectedAge = Math.floor(testEarthAge / 1.88);
    expect(person.getMarsAge()).toEqual(expectedAge);
  });

  it('should test whether jupiter age is correct', function() {
    let expectedAge = Math.floor(testEarthAge / 11.86);
    expect(person.getJupiterAge()).toEqual(expectedAge);
  });
});

describe('LifeExpectancy', function() {

 let person;
 let testEarthAge;
 let testEarthLifeExpectancy;

  beforeEach(function() {
    testEarthAge = 25;
    testEarthLifeExpectancy = 70;

    let testDate = new Date();
    testDate.setYear(testDate.getYear() - testEarthAge);
    person = new Person(testDate.toString(), testEarthLifeExpectancy);
  });

  it('should test whether earth LifeExpectancy is correct', function() {
    expect(person.getEarthYearsLeft()).toEqual(testEarthLifeExpectancy - testEarthAge);
  });

  it('should test whether mercury LifeExpectancy is correct', function() {
    let age = (testEarthAge / .24);
    let le = (testEarthLifeExpectancy/ .24);
    expect(person.getMercuryYearsLeft()).toEqual(Math.floor(le - age));
  });

  it('should test whether venus LifeExpectancy is correct', function() {
    let age =(testEarthAge / .62);
    let le = (testEarthLifeExpectancy/ .62);
    expect(person.getVenusYearsLeft()).toEqual(Math.floor(le - age));
  });

  it('should test whether mars LifeExpectancy is correct', function() {
    let age = (testEarthAge / 1.88);
    let le = (testEarthLifeExpectancy/ 1.88);
    expect(person.getMarsYearsLeft()).toEqual(Math.floor(le - age));
  });

  it('should test whether jupiter LifeExpectancy is correct', function() {
    let age = (testEarthAge / 11.86);
    let le = (testEarthLifeExpectancy/ 11.86);
    expect(person.getJupiterYearsLeft()).toEqual(Math.floor(le - age));
  });
});

describe('LifeExpectancy', function() {

 let person;
 let testEarthAge;
 let testEarthLifeExpectancy;

  beforeEach(function() {
    testEarthAge = 71;
    testEarthLifeExpectancy = 70;

    let testDate = new Date();
    testDate.setYear(testDate.getYear() - testEarthAge);
    person = new Person(testDate.toString(), testEarthLifeExpectancy);
  });

  it('should test whether earth surpassed LifeExpectancy is correct', function() {
    expect(person.getEarthYearsLeft()).toEqual(( testEarthAge - testEarthLifeExpectancy));
  });
});  