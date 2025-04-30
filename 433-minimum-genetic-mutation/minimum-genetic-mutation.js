/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    
    const queue = [[startGene, 0]];
    const bankSet = new Set(bank);
    const visited = new Set();
    
    visited.add(startGene);
    const nucleotides = ['A', 'C', 'G', 'T'];

    while(queue.length > 0){

        const [currentGene, mutations] = queue.shift();
        if(currentGene === endGene){
            return mutations;
        }

        for(let i = 0; i < currentGene.length; i++){
            for(const nucleotide of nucleotides){
                if(currentGene[i] !== nucleotide){
                    const nextGene = currentGene.substring(0, i) + nucleotide+ currentGene.substring(i + 1);

                    if(bankSet.has(nextGene) && !visited.has(nextGene)){
                        visited.add(nextGene);
                        queue.push([nextGene, mutations + 1]);
                    }
                }
            }
        }
    }

    return -1;

};