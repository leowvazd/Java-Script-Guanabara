let num = [5, 8, 4]

num[3] = 6

num.push(7)

num[num.length] = 10

num.sort()

// console.log(num)

// console.log(`\nNosso vetor é o: ${num}\n`)

// console.log(`O vetor tem ${num.length} posições\n`)

for (var i = 0; i < num.length; i++) {
    console.log(`O valor do vetor na posição ${i} é ${num[i]}`)
}

let pos = num.indexOf(11)
console.log(pos)