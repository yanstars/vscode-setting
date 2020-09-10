### test

```js
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
```

### test

- name
- zhangsan
