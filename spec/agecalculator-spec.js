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
    expect(person.getEarthAge()).toEqual(expectedAge);
  });

  it('should test whether venus age is correct', function() {
    let expectedAge = Math.floor(testEarthAge / .62);
    expect(person.getEarthAge()).toEqual(expectedAge);
  });

  it('should test whether mars age is correct', function() {
    let expectedAge = Math.floor(testEarthAge / 1.88);
    expect(person.getEarthAge()).toEqual(expectedAge);
  });

  it('should test whether jupiter age is correct', function() {
    let expectedAge = Math.floor(testEarthAge / 11.86);
    expect(person.getEarthAge()).toEqual(expectedAge);
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
    let age = Math.floor(testEarthAge / .24);
    let le = Math.floor(testEarthLifeExpectancy/ .24);
    expect(person.getMercuryYearsLeft()).toEqual(le - age);
  });

  it('should test whether venus LifeExpectancy is correct', function() {
    let age = Math.floor(testEarthAge / .62);
    let le = Math.floor(testEarthLifeExpectancy/ .62);
    expect(person.getVenusYearsLeft()).toEqual(le - age);
  });

  it('should test whether mars LifeExpectancy is correct', function() {
    let age = Math.floor(testEarthAge / 1.88);
    let le = Math.floor(testEarthLifeExpectancy/ 1.88);
    expect(person.getMarsYearsLeft()).toEqual(le - age);
  });

  it('should test whether jupiter LifeExpectancy is correct', function() {
    let age = Math.floor(testEarthAge / 11.86);
    let le = Math.floor(testEarthLifeExpectancy/ 11.86);
    expect(person.getJupiterYearsLeft()).toEqual(le - age);
  });
});