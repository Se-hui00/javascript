const people = [{
	name: 'Alberto',
	age: 27
},{
	name: 'Caroline',
	age: 27
},{
	name: 'Josh',
	age: 31
}];


// 이름만 추출하여 배열로 반환하는 함수 구현
//	 반환값 : return value ['Alberto', 'Caroline', 'Josh']

{ // case1)for문
	{
		function f(people) {
			let strArr = [];
			for(i = 0; i < people.length; i++) {
				strArr[i] = people[i].name;
			}
			return strArr;
		}
		const result = f(people);
		console.log(result);
		
	}
	{ //-->풀이
		function f(arr) {
			const result = [];
			for(let i = 0; i < arr.length; i++) {
				result.push(arr[i]['name']);
					 //또는 result.push(arr[i].name);
			}
			return result;
		}
		const result = f(people);
		console.log(result);
	}
}

{ // case2)for~of문
	function f(arr) {
		const result = [];
		for(let person of people) {
			result.push(person['name']);
				//또는 result.push(person.name);
		}
		return result;
	}
	const result = f(people);
	console.log(result);
}

{ // case3)배열의 고차함수 : 함수를 매개값으로 받는 함수
	// 	-> 고차함수의 종류 : map, filter, reduce, forEach
	
	{// (1)map
		function f(arr) {
			const result = [];

			//전체 요소 반환
			// const output = arr.map((ele, idx, arr) => {console.log(ele, idx, arr)});
				//ele:요소, idx:순서, arr:배열 자체
			
			//name 요소만 반환
			const output = arr.map((ele, idx, arr) => ele['name']);

			return output;
		}
		const result = f(people); //함수 호출
		console.log(result);
	}
	{//	(2)forEach
		{// (2)-1.함수 선언문
			function f(arr) {
				const result = [];
	
				arr.forEach((ele, idx, arr) => result.push(ele['name']));
				return result;
			}
			const result = f(people);
			console.log(result);
		}
		{// (2)-2.화살표 함수
			const f = arr => {
				const result = [];
				arr.forEach((ele, idx, arr) => result.push(ele['name']));
				return result;
			}
			const result = f(people);
			console.log(result);
		}
	}

}
