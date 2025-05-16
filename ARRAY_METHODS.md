# 📚 Повна шпаргалка методів масивів JavaScript/TypeScript

_Актуально для ES2023 / TypeScript 5.0+_

## █ 1. Основні операції
| Метод          | Синтаксис                  | Приклад                          | Результат           |
|----------------|----------------------------|----------------------------------|---------------------|
| Доступ         | `arr[index]`               | `['a','b'][1]`                  | `'b'`               |
| Довжина        | `arr.length`               | `[1,2,3].length`                | `3`                 |
| Перевірка масиву | `Array.isArray(arr)`     | `Array.isArray([1])`            | `true`              |

## █ 2. Мутабельні методи
| Метод          | Синтаксис                  | Приклад                          | Результат           |
|----------------|----------------------------|----------------------------------|---------------------|
| `push`         | `arr.push(...items)`       | `[1,2].push(3)`                 | `3` (довжина), масив: `[1,2,3]` |
| `pop`          | `arr.pop()`                | `[1,2].pop()`                   | `2`, масив: `[1]`    |
| `shift`        | `arr.shift()`              | `[1,2].shift()`                 | `1`, масив: `[2]`    |
| `unshift`      | `arr.unshift(...items)`    | `[2,3].unshift(1)`              | `3`, масив: `[1,2,3]` |
| `splice`       | `arr.splice(start, delCount?, ...items?)` | `['a','b'].splice(1,0,'c')` | `[]`, масив: `['a','c','b']` |
| `fill`         | `arr.fill(value, start?, end?)` | `[1,2,3].fill(0)`           | `[0,0,0]` (оригінал змінений) |
| `copyWithin`   | `arr.copyWithin(target, start, end?)` | `[1,2,3,4].copyWithin(0,2)` | `[3,4,3,4]` |
| `reverse`      | `arr.reverse()`            | `[1,2].reverse()`               | `[2,1]` (оригінал змінений) |
| `sort`         | `arr.sort(compareFn?)`     | `[3,1].sort((a,b) => a-b)`      | `[1,3]` (оригінал змінений) |

## █ 3. Імутабельні методи
| Метод          | Синтаксис                  | Приклад                          | Результат           |
|----------------|----------------------------|----------------------------------|---------------------|
| `concat`       | `arr.concat(...items)`     | `[1].concat(2,[3])`             | `[1,2,3]`           |
| `slice`        | `arr.slice(start?, end?)`  | `[1,2,3].slice(1)`              | `[2,3]`             |
| `join`         | `arr.join(separator?)`     | `[1,2].join('-')`               | `"1-2"`             |
| `toString`     | `arr.toString()`           | `[1,2].toString()`              | `"1,2"`             |
| `toLocaleString` | `arr.toLocaleString()`   | `[1000, new Date()].toLocaleString()` | Залежить від локалі |
| `flat`         | `arr.flat(depth=1)`        | `[1,[2]].flat()`                | `[1,2]`             |
| `flatMap`      | `arr.flatMap(fn)`          | `[1,2].flatMap(x => [x,x])`     | `[1,1,2,2]`         |
| `with`         | `arr.with(index, value)`   | `[1,2,3].with(1, 9)`            | `[1,9,3]` (ES2023)  |

## █ 4. Пошук та перевірки
| Метод          | Синтаксис                  | Приклад                          | Результат  |
|----------------|----------------------------|----------------------------------|------------|
| `find`         | `arr.find(fn)`             | `[1,2].find(x => x>1)`          | `2`        |
| `findLast`     | `arr.findLast(fn)`         | `[1,2,3].findLast(x => x<3)`    | `2` (ES2023) |
| `findIndex`    | `arr.findIndex(fn)`        | `[1,2].findIndex(x => x>1)`     | `1`        |
| `findLastIndex`| `arr.findLastIndex(fn)`    | `[1,2,1].findLastIndex(x => x===1)` | `2` (ES2023) |
| `includes`     | `arr.includes(item)`       | `[1,2].includes(2)`             | `true`     |
| `indexOf`      | `arr.indexOf(item)`        | `[1,2,1].indexOf(1)`            | `0`        |
| `lastIndexOf`  | `arr.lastIndexOf(item)`    | `[1,2,1].lastIndexOf(1)`        | `2`        |
| `some`         | `arr.some(fn)`             | `[1,2].some(x => x>1)`          | `true`     |
| `every`        | `arr.every(fn)`            | `[1,2].every(x => x>0)`         | `true`     |

## █ 5. Трансформації
| Метод          | Синтаксис                  | Приклад                          | Результат           |
|----------------|----------------------------|----------------------------------|---------------------|
| `map`          | `arr.map(fn)`              | `[1,2].map(x => x*2)`           | `[2,4]`             |
| `filter`       | `arr.filter(fn)`           | `[1,2].filter(x => x>1)`        | `[2]`               |
| `reduce`       | `arr.reduce(fn, init?)`    | `[1,2].reduce((a,b)=>a+b, 0)`   | `3`                 |
| `reduceRight`  | `arr.reduceRight(fn, init?)` | `['a','b'].reduceRight((a,b)=>a+b)` | `"ba"`       |

## █ 6. Ітерація
| Метод          | Синтаксис                  | Приклад                          | Опис               |
|----------------|----------------------------|----------------------------------|--------------------|
| `forEach`      | `arr.forEach(fn)`          | `[1,2].forEach(x => console.log(x))` | Виконує fn для кожного |
| `keys`         | `arr.keys()`               | `[...['a','b'].keys()]`         | `[0,1]` (ітератор) |
| `values`       | `arr.values()`             | `[...['a','b'].values()]`       | `['a','b']`        |
| `entries`      | `arr.entries()`            | `[...['a'].entries()]`          | `[[0,'a']]`        |

## █ 7. TypeScript-специфіка
```typescript
// Типізація методів
const nums: number[] = [1, 2, 3];

// Генеріки в методах
const doubled: number[] = nums.map(x => x * 2);

// Користувацькі типи в filter
type Person = { age: number };
const adults = people.filter((p: Person) => p.age >= 18);
