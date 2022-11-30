// shopping-item.model.ts

export class User {
  /* In this example we are using a shortcut from Typescript to create variables without declaring them */
  constructor(
    private _name: string,
    private _age: number,
    private _email: string,
    private _gender: string
  ) {}

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }

  set name(name: string) {
    this._name = name;
  }

  get gender(): string {
    return this._gender;
  }

  get email(): string {
    return this._email;
  }

  set gender(gender: string) {
    this._gender = gender;
  }

  set email(email: string) {
    this._email = email;
  }
}
