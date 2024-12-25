const randomize = (data) => {
    return data.sort((a, b) => Math.random(10) - Math.random(10) )
}

const getEmoji = async () => {
    const res = await fetch('https://emojihub.yurace.pro/api/random', {mode: 'cors'})
    const data = await res.json()
    const htmlCode = await data.unicode[0]
    
    return htmlCode
}

const formatEmoji = (unicode) => {
    const codePoint = parseInt(unicode.replace('U+', ''), 16)
    return String.fromCodePoint(codePoint)
}

const getData = async () => {
    const arr = [...Array(12).keys()]
    const uniqEmoji = new Set();

    const res = await Promise.all(arr.map(async () => {
            let unicode = await getEmoji();

            while (uniqEmoji.has(unicode)){
                unicode = await getEmoji()
            }
            uniqEmoji.add(unicode)
            const emoji = formatEmoji(unicode)

            return [emoji, false];
        })
    );

    return res
}

export { randomize, getData }