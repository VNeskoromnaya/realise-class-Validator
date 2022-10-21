# realise-class-Validator

Задание: Реализуйте класс `Валидатор`, который будет проверять строки. К примеру, у него будет метод `isEmail`, который параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод `isDomain` для проверки домена, метод `isDate` для проверки даты и метод `isPhone` для проверки телефона.

Сделайте 2 версии этого класса - стандартную и статическую.

стандартная вызывается вот так

var validator = new Validator();

console.log(validator.isEmail('alisa@mail.ru'));

console.log(validator.isDomain('itgirlschool.ru'));

console.log(validator.isDate('12.05.2021'));

console.log(validator.isPhone('+7(910)123-45-67')); //тут используем формат своей страны


а статическая так

console.log(ValidatorStatic.isEmail('alisa@mail.ru'));

console.log(ValidatorStatic.isDomain('itgirlschool.ru'));

console.log(ValidatorStatic.isDate('12.05.2021'));

console.log(ValidatorStatic.isPhone('+7(910)123-45-67')); //тут используем формат своей страны
