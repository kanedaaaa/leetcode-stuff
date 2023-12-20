function findTheDifference(s: string, t: string): any {
    let final: string[] = [];
    let mutS = Array.from(s);
    let mutT = Array.from(t);

    for (let char of mutT) {
        const index = mutS.indexOf(char);
        if (index === -1) {
            final.push(char);
        } else {
            mutS.splice(index, 1);
        }
    }

    return final.join(", ");
};
