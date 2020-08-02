function palindrom (number, count = 0) {

    const reversePalindrom = number => Number(String(number).split('').reverse().join(''));
    /* 1) Перевернул и собрал заново число  */
    /* 2) Поскольку нам необходимо число, а не строка, использовал Number */ 
    
    const isItPalindrom = reverse => Number(String(number).split('').reverse().join('')) === reverse;
    /* 3) Проверка палиндрома */

    let summary = number + reversePalindrom(number); 
    /* 4) Создал переменную, которая будет складывать число и перевернутое число */

    function result () {
        if(isItPalindrom(number)) {
            return count;
        }else {
            return palindrom(summary, ++count)
        }
    };
    return result();

    /* 5) Вернул результат выполнения функции рекурсией*/
    /* Можно было сделать и тернарным оператором для краткости записи, но мне было удобнее использовать if{else{}} для понимания на данном уровне*/
    /* Вот с использование тернарного оператора - // return isItPalindrom(number) ? count : palindrom(summary, ++count) */
}
console.log(palindrom(56));
console.log(palindrom(57));
console.log(palindrom(59));
console.log(palindrom(699));
console.log(palindrom(89));