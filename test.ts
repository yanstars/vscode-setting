class Person {
    name: string = ""
    constructor(name: string) {
        this.name = name
    }
    say (): void {
        console.log("`你好${this.name}` :>> ", `你好${this.name}`)
    }

    static getVersion (): string {
        return "3.0"
    }
}

class Teacher extends Person {
    job: string = "教师"
    age: number = 0
    constructor(name: string, age: number) {
        super(name)
        this.age = age
    }
    getInfo (): String {
        return `${this.name} ${this.age}岁了`
    }
}

let c = new Person("王五")
c.say()
let aa = new Teacher("丽丽", 25)
console.log("aa.getInfo()", aa.getInfo())

console.log("Person.getVersion()", Person.getVersion())
