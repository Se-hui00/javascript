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

// 문제 : people의 name을 추출하여 ul, li 태그를 반환하는 함수를 구현하시오.
//  console.log(html)의 결과는 아래와 같다.
//  <ul>
//    <li>Alberto</li>
//    <li>Caroline</li>
//    <li>Josh</li>
//  </ul>


{
  //이름만 추출하여 배열로 반환하는 함수
  const f = arr => {
    const result = [];
    arr.forEach((ele, idx, arr) => result.push(ele['name']));
    return result;
  }

  //반환값(=${name} 값) : ['Alberto', 'Caroline', 'Josh']
  const liTags = f(people).map(name => `<li>${name}</li>`);
  console.log(liTags.join('')); //.join('') : 빈 문자열로 반환
  const html = `<ul>${liTags.join('')}</ul>`;
  console.log(html);
}

