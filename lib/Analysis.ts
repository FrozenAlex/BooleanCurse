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
    let elements = fns.filter((element)=> element !="");

    let functionData = elements.map((element)=> analyzeFunctionString(element))

    // Сравнить все
    functionData.map((data: FunctionProperties) => {
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
        throw new Error("Not a boolean funcion")
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

// Сохраняет 0
export function keepsZero(fn: string) {
    return fn[0] === "0";
}

// Сохраняет 1
export function keepsOne(fn: string) {
    return fn[fn.length - 1] == "1";
}

// Самодвойственная

export function Samdv(fn: string) {
    for (var i = 0; i < fn.length / 2; i++) {
        if (fn[i] === fn[fn.length - 1 - i]) {
            return false;
        }
    }
    return true;
}




export function mono(fn: string) {
    let shift = fn.length;

    while ((shift /= 2) > 0) {
        let i = 0;
        while (i < fn.length) {
            for (let j = shift; i < fn.length; (j-- + ++i)) {
                if (fn[i] > fn[i + shift]) {
                    // Монотонность нарушена
                    return false;
                }
            }
        }
        i += shift;
    }
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

// Рекурсивный треугольник паскаля
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
 * Проверка функции на линейность по полиному Жегалкина
 */
export function linear(fn: string) {
    let array = fn.split("");
    let polin = pascal(fn);


    // We can not check for zero
    for (let i = 1; i < polin.length; i++) {
        if (!singleVariable(i)) {
            if (polin[i] != "0") {
                return false;
            }
        }

    }
    return true;
}

// Checks to see if the corresponding number has only one 1
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

function boolPlus(a: string, b: string) {
    if (a == "1" && b == "1") return "0";
    if (a == "1" && b == "0") return "1";
    if (a == "0" && b == "1") return "1";
    if (a == "0" && b == "0") return "0";
}