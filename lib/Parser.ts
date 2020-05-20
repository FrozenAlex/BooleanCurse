import {
    create,
    // booleanDependencies,
    parseDependencies,
    andDependencies,
    orDependencies,
    xorDependencies,
    notDependencies,
    compareDependencies
  } from 'mathjs'
  
  // Create just the functions we need
  const { parse, pow } = create({
    // booleanDependencies,
    parseDependencies,
    andDependencies,
    orDependencies,
    xorDependencies,
    notDependencies,
    compareDependencies
  }, {})



export const singleOperators = {
    "->": "1101",
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

    // Если это не кортэж, пробуем его составить
    try {
        console.log(evalFunction(fn))
        return evalFunction(fn)
    } catch(err) {
        throw new Error(`Неверный формат функции ${fn}`);
    }
    // TODO: булевы выражения

}

/**
 * Дает на выходе таблицу истинности
 * @param fn 
 */
export function evalFunction(fn:string){
    let expression = parse(fn);
    
    // Получить все переменные
    let a = parseSyntaxTree(expression.args);

    let n = a.length;
    let comp = expression.compile();
    
    // нет переменных
    if (!n || n == 0) return (comp.evaluate() as number)?"1":"0";

    // @ts-ignore
    let numb = pow(2, n);
 
    let result = ""
    for (let i = 0; i<numb ;i++){
        let scope = {}

        a.forEach((item,index)=>{
            scope[item] = (i >> (n-index-1)) & 1;
        })

        result+= (comp.evaluate(scope) as number)?"1":"0";
    }
    

    return result;
}

function parseSyntaxTree(node: Array<math.MathNode>) {
    let result = []

    if (!node) return result;
    node.forEach((item,index) => {
        if (item.isSymbolNode) {
            result.push(item.name)
        } else if (item.args && item.args.length != 0) {
            result.push(...parseSyntaxTree(item.args))
        } else if (item.content) {
            if (item.content.isSymbolNode) {
                result.push(item.name)
            } else if (item.content.args && item.content.args.length > 0) {
                result.push(...parseSyntaxTree(item.content.args))
            }
        }
    })

    return result;
}