// p의 문자열 크기만큼 t를 부분문자열로 나눴을 때
// p보다 작은 값을 갖는 부분문자열의 개수 반환

function solution(t, p) {
  var answer = 0;

  let idx = 0;
  let nums = [];
  let cnt = t.length - p.length + 1;

  while (cnt-- > 0) {
    console.log(t.substr(idx, p.length));
    nums.push(t.substr(idx, p.length));
    idx++;
  }
  for (n of nums) {
    if (Number(n) > Number(p)) {
      answer++;
    }
  }
  return answer;
}

console.log(solution("3141592", "271"));

