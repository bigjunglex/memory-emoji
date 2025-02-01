const randomize = (data) => {
    return data.sort((a, b) => Math.random() - Math.random())
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

const getData = async (num) => {
    const arr = [...Array(num).keys()]
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