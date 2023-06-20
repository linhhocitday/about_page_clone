/**
 * Xử lý số
 */

// Bài 1
function sphericalVolumn(r) {
    let total = 4 / 3 * Math.PI * Math.pow(Number(r), 3);
    return total;
}

console.log('thể tích hình cầu là: ' + sphericalVolumn(6));

// Bài 2
function totalBetween(n) {
    let {n1, n2} = n;
    
    let numberBetween = [];
    if (n1 < n2) {
        for (let number = n1 + 1; number < n2; number++ ) {
            numberBetween.push(number);
        }
    }

    if (n1 > n2) {
        for (let number = n2 + 1; number < n1; number++ ) {
            numberBetween.push(number);
        }
    }

    let result = numberBetween.reduce((a, v) => {
        return a + v;
    }, 0);

    console.log('Tổng các số nguyên nằm giữa hai số ' + n1 + ' và ' + n2 + ' là: ' + result);
}

totalBetween({
    n1: 8,
    n2: 3
});

// Bài 3
function divisorSum(n) {
    let number = Number(n);

    let arr = [];
    let total = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            arr.push(i);
        }
    }

    for (let numb of arr) {
        total += numb;
    }
    console.log('Tổng các ước của ' + number + ' là: ' + total);
}

divisorSum(4);

// Bài 4
function primeNumberCheck(n) {
    let number = Number(n);

    if (number <= 1) {
        return false;
    }

    else if (number == 2) {
        return true;
    }

    else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        return true;  
        }
    }
}

console.log(primeNumberCheck(19));

// Bài 5
function primeNumberSum(n) {
    let number = Number(n);

    let sum = 0;
    for (let i = 2; i < number; i++) {
        if (primeNumberCheck(i)) {
            sum += i;
        }
    }
    console.log('Tổng các số nguyên tố nhỏ hơn hoặc bằng ' + number + ' là: ' + sum);
}

primeNumberSum(5);


/**
 * Xử lý chuỗi
 */

// Bài 1
function upperCaseSentence(sentence) {
    let sntnArr = sentence.split(' ');
    let newSentence = [];
    for (let word of sntnArr) {
        firstLetter = word.slice(0, 1);
        firstLetter = firstLetter.toUpperCase();
        restOfWord = word.slice(1, word.length);
        restOfWord = restOfWord.toLowerCase();
        word = firstLetter + restOfWord;
        
        newSentence.push(word);
    }
    console.log(newSentence.join(' '));
}

upperCaseSentence('HELLO my NaMe iS LINH');


// Bài 2
function spinalCase(sentence) {
    let newSentence = sentence.toLowerCase()
    let sntnArr = newSentence.split(' ');
    console.log(sntnArr.join('-'));
}

spinalCase('HELLO my NaMe iS LINH');

// Bài 3
function palindrome(sentence) {
    let newSntnArr = String(sentence).toLowerCase().split(' ').join('');
    console.log(newSntnArr);

    let newArr = newSntnArr.split('');
    let reverseSntn = newArr.reverse().join('');
    console.log(reverseSntn);

    console.log(newSntnArr === reverseSntn)
}

palindrome('RACE car');

// Bài 4
function containedSentence(p) {
    let {s1, s2} = p;
    let newS1 = s1.toLowerCase().split('');
    let newS2 = s2.toLowerCase().split('');

    console.log(newS1);
    console.log(newS2);

    if (newS1.length >= newS2.length) {
        let checker = (arr, target) => target.every(v => arr.includes(v));
        console.log(s1 + ' chứa toàn bộ kí tự nằm trong ' + s2 + ': ' + checker(newS1, newS2));
    }

    if (newS1.length < newS2.length) {
        let checker = (arr, target) => target.every(v => arr.includes(v));
        console.log(s2 + ' chứa toàn bộ kí tự nằm trong ' + s1 + ': ' + checker(newS2, newS1));
    }
}

containedSentence({
    s1: 'Hello World',
    s2: 'Hell '
});


/**
 * Xử lý mảng
 */

// Bài 1
function filterArray(test_array) {
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    console.log(result);
}

filterArray([NaN, 0, false, -34, '', undefined,  '23', 123, null, 'hello']);

// Bài 2
function longestString(arr) {
    let length = 0;
    let longestString = [];
    for (let item of arr) {
        if (item.length > length) {
            length = item.length;
        }

    }
    for (let item of arr) {
        if (item.length === length) {
            longestString.push(item);
        }
    }
    console.log(longestString);
}

longestString(['aba', 'aa', 'ad', 'c', 'vcd'] );

// Bài 3
let arr1 = [1, 2, 3];
let arr2 = [1, 3, 4, 5, 5];

let difference1 = arr1.filter(x => arr2.indexOf(x) === -1);
let difference2 = arr2.filter(x => arr1.indexOf(x) === -1);

let difference = difference1.concat(difference2);
console.log(difference);

// Bài 4
function multiplication(p) {
    let {m, n} = p;
    let result = Number(m) * Number(n);
    let resultArr = [];
    for (let i = 1; i <= result; i++) {
        resultArr.push(i);
    }

    
    let arr = [];
    let count = 1;

    for (let i = 0; i < m; i++) {
        let smallArr = [];
        for (let i = 0; i < n; i++) {
            let item = count;
            smallArr.push(item);
            count++
        }
        arr.push(smallArr);
        if ((i+1) % 2 == 0) {
            smallArr.sort((a, b) => b - a)
        }
    }
    console.log(arr)
}

multiplication({
    m: 3,
    n: 4
})


/**
 * Xử lý object
 */

let arr = [
    {
        name: 'Huy',
        age: 20
    },
    {
        name: 'An',
        age: 19
    },
    {
        name: 'Linh',
        age: 24
    },
    {
        name: 'Bình',
        age: 23
    }
]

// Bài 1
function averageAge(p) {
    let count = 0;
    for (let person of p) {
        count = (count + Number(person['age']));
    }
    totalAge = count / p.length;
    console.log('Số tuổi trung bình của toàn bộ sinh viên là: ' + totalAge + ' tuổi');
}

averageAge(arr);

// Bài 2
function arrangeAgeOrder(p) {
    let ageArr = p.sort((a, b) => Number(b.age) - Number(a.age));
    console.log(ageArr);
}

arrangeAgeOrder(arr);

// Bài 3
function arrangeNameOrder(p) {
    let nameArr = p.sort((a, b) => {
        let aName = a.name.toLowerCase();
        let bName = b.name.toLowerCase();

        if (aName < bName) return -1;
        if (aName > bName) return 1;
        return 0
    });
    console.log(nameArr);
}

arrangeNameOrder([
    {
        name: 'Huy',
        age: 20
    },
    {
        name: 'An',
        age: 19
    },
    {
        name: 'Linh',
        age: 24
    },
    {
        name: 'Bình',
        age: 23
    }
]);

// Bài 4
function letterH(p) {
    let letterHArr = [];
    let letterH = 'h';
    for (let person of p) {
        let nameArr = person['name'].toLowerCase().split('');
        for (let letter of nameArr) {
            if (letter == letterH) {
                letterHArr.push(person);
            }
        }
    }
    console.log(letterHArr);
} 

letterH(arr);


/**
 * Tổng hợp
 */

// Bài 1
let currentDate = new Date();

let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();
let currentSecond = currentDate.getSeconds();

let currentTime = currentHour + ':' + currentMinute + ':' + currentSecond;
console.log(currentTime);

function calcTime (t, x) {
    let timeSplit = t.split(':');

    let secs = (Number(timeSplit[0]) * 60 + Number(timeSplit[1])) * 60 + Number(timeSplit[2]);

    let sumX = secs + x;

    let seconds = sumX % 60

    let sumMinute = (sumX - seconds) / 60;
    let minutes = sumMinute % 60;

    let hours = (sumMinute - minutes) / 60;

    let finalTime = hours + ':' + minutes + ':' + seconds
    console.log('Thời gian sau ' + x + ' giây kể từ thời điểm hiện tại là: ' + finalTime);
}

calcTime (currentTime, 7)

// Bài 2
function climbUp(h, x, y) {
    let dayStretch = Number(x) - Number(y);
    let totalDay = Math.ceil(Number(h) / dayStretch);
    console.log('Ốc sên sẽ lên được miệng giếng sau ' + totalDay + ' ngày, với chiều cao của giếng là ' + h + ' mét')
}

climbUp(24, 1, 0.2);

// Bài 3
function arrageNumber(p) {
    let numbers = String(p).split('').sort();
    if (numbers[0] == 0) {
        zeroNumber = numbers.splice(0, 1)[0];
        numbers.splice(1, 0, zeroNumber);
    }
    let newNumber = numbers.join('');
    console.log(Number(newNumber));
}

arrageNumber(530751);