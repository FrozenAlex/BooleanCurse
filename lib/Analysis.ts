/** 
 * Class to analyze the functions
 */
export interface FunctionProperties {
    keepsZero: boolean;
    keepsOne: boolean;
    s: boolean;
    mono: boolean;
    linear: boolean;
}

/**
 * Проверка системы функций на полноту
 * @param string 
 */
export function checkCompleteness(fns: Array<string>) {
    if (!fns || fns == []) throw Error("Нет функций")


    // Everything is true by default
    let result: FunctionProperties = {
        keepsZero: true,
        keepsOne: true,
        s: true,
        mono: true,
        linear: true,
    }

    // Для более наглядного примера создаем массив результатов
    // Исключить пустые функции
    let elements = fns.filter((element) => element != "");

    let functionData = elements.map((element) => analyzeFunctionString(element))
       

    // Сравнить все
    functionData.forEach((data: FunctionProperties) => {
        if (!data.keepsOne) result.keepsOne = false;
        if (!data.keepsZero) result.keepsZero = false;
        if (!data.s) result.s = false;
        if (!data.mono) result.mono = false;
        if (!data.linear) result.linear = false;
    })

    let isFull = (
        !result.keepsOne &&
        !result.keepsZero &&
        !result.s &&
        !result.mono &&
        !result.linear
    )

    return {
        isFull,
        results: functionData
    }
}


/**
 * Проверка функции на принадлежность классам
 * @param string 
 */
export function analyzeFunctionString(fn: string) {
    if (!fn || fn == "") throw Error("Пустая функция")
    let shift = fn.length;
    if ((shift - 1) & shift) {
        throw new Error("Кортеж " + fn + " не является булевой функцией")
    }
    // Then we have one variable
    let result = {
        keepsZero: keepsZero(fn),
        keepsOne: keepsOne(fn),
        s: Samdv(fn),
        mono: monoSlow(fn),
        linear: linear(fn)
    }

    return result;
}

/**
 * Проверка на сохранение 0
 */
export function keepsZero(fn: string) {
    return fn[0] === "0";
}

/**
 * Проверка на сохранение 1
 */
export function keepsOne(fn: string) {
    return fn[fn.length - 1] == "1";
}

/**
 * Проверка функции на самодвойственность
 * @param fn 
 */
export function Samdv(fn: string) {
    for (var i = 0; i < fn.length / 2; i++) {
        if (fn[i] === fn[fn.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

/**
 * Проверка функции на монотонность
 * @param fn кортеж
 */
export function monoSlow(fn: string) {
    // Check every possible combo
    for (let i = 0; i < fn.length; i++) {
        let first = i.toString(2); // 2ичное представление

        for (let j = 0; j < fn.length; j++) {
            let second = j.toString(2);
            // Если сравнимы то проверяем
            if (isComparable(first, second)) {
                // Если первый больше 2-го то нарушается условие
                if (fn[i] > fn[j]) return false;
            }
        }
    }
    return true;
}

/**
 * Рекурсивный треугольник паскаля для построения
 * полинома Жегалкина
 * Возвращается левая сторона треугольника
 * 1   0   0   0   0   0
 *   1   0   0   0   0
 *     1   0   0   0
 *       1   0   0
 *         1   0
 *           1
 * @param fn 
 */
export function pascal(fn: string): string {

    let result = "";
    if (fn.length == 1) {
        return fn[0];
    }
    // Сделать еще один срез
    for (let i = 0; i < fn.length - 1; i++) {
        result += boolPlus(fn[i], fn[i + 1]);
    }

    return fn[0] + pascal(result);
}

/**
 * Проверка двух наборов значений переменных на сравнимость
 * Используется в проверке на монотонность
 * @param a первый
 * @param b второй
 */
function isComparable(a: string, b: string) {
    let first = a;
    let second = b;

    // Сравнять длину
    if (second.length < first.length) {
        let difference = first.length - second.length;
        for (let i = 0; i < difference; i++) second = "0" + second.toString();
    }
    if (second.length > first.length) {
        let difference = second.length - first.length;
        for (let i = 0; i < difference; i++) first = "0" + first.toString();
    }

    // 
    for (let i = 0; i < second.length; i++) {
        if (first[i] > second[i]) {
            return false;
        }
    }
    // console.log(first + " " + second)
    return true;
}

/**
 * Проверка функции на линейность при помощи полинома Жегалкина
 */
export function linear(fn: string) {
    let pas = pascal(fn);

    // We can not check for zero
    for (let i = 1; i < pas.length; i++) {
        if (!singleVariable(i)) {
            if (pas[i] != "0") {
                return false;
            }
        }

    }
    return true;
}

/**
 * Проверка на содержание только одной 1 
 * в двоичной записи числа
 * @param n число в десятичном варинте
 */
export function singleVariable(n: number) {
    let booleanRepresentation = n.toString(2);
    let count = 0;

    for (let i = 0; i < booleanRepresentation.length; i++) {
        if (booleanRepresentation[i] == "1") {
            if (++count > 1) {
                return false
            }
        }
    }
    return true;
}

/**
 * Булево сложение
 * @param a первый операнд
 * @param b второй операнд
 */
function boolPlus(a: string, b: string) {
    return (parseInt(a) ^ parseInt(b))
}