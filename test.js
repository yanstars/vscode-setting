function singleFactory() {
	let result = null
	return function (obj) {
		if (!obj) return
		if (result) {
			return result
		} else {
			result = new Array(obj)
			return result
		}
	}
}

const func = a => a + 1

let obj = {
	a: "a",
	b: "b",
}
const single = singleFactory()

let a = single()
let b = single("b")

console.log("a", a)
console.log("b", b)

function checkNum(n) {
	if (n % 2 == 0) return false
	if (n % 3 == 0) return false

	for (let i = 5; i <= Math.sqrt(n); i += 6) {
		if (n % i == 0) {
			return false
		}
	}
	return true
}

function getResult(n) {
	let result = []
	for (let j = 1; j <= n; j += 2) {
		if (checkNum(j)) {
			result.push(j)
		}
	}
	return result
}

