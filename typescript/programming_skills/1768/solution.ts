function mergeAlternately(word1: string, word2: string): string {
    let final: string = "";
    let high: number;

    word1.length < word2.length ? high = word2.length : high = word1.length;

    for (let i = 0; i < high; i++) {
        final += word1[i] || "";
        final += word2[i] || "";
    }

    return final;
};
