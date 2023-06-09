class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(num) {
    typeof num === 'number' ? 
      this._numberOfStudents = num : console.log('Invalid input: numberOfStudents must be set to a Number.');
  }

  quickFacts() {
    console.log(`${this._name} educated ${this._numberOfStudents} students at the ${this._level} school level.`);
  }

  static pickSubstituteTeacher(subs){
    return subs[Math.floor(Math.random()*(subs.length-1))];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this.pickupPolicy = pickupPolicy;
  }

  get pickupPolidy() {
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name, level, numberOfStudents) {
    super(name, 'middle', numberOfStudents);
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.quickFacts();
console.log(alSmith.sportsTeams);
