export const singleOperators = {
    "->": "1011",
    "^": "0001",
    "and": "0001",
    "or": "0111",
    "xor": "0110",
    "pierce": "1000",
    "sheffer": "1110",
    "not": "10",
    "x":"01",
    "1": "1",
    "0": "0"
}

/**
 * Парсинг функции
 * @param fn функция в строковом виде
 */
export function parseFunction(fn:string){
    // Если пустая, возвращаем ничего
    if (fn.length == 0) return ""

    // Если это один оператор, возвращаем его.
    if (singleOperators[fn.toLowerCase()]) return singleOperators[fn.toLowerCase()]
    
    // Если это кортеж, возвращаем его.
    let regex = /[^10]+/g;
    if (!regex.test(fn)) 
         return fn;

    throw new Error(`Неверный формат функции ${fn}`);
    

    // TODO: булевы выражения
}