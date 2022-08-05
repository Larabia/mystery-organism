// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (num,arrayDNAbases) => {
  return {
    specimenNum: num,
    dna : arrayDNAbases,
    mutate(){
      let index = Math.floor(Math.random() * 14);
      const dnaBases = ['A', 'T', 'C', 'G'];
      let oldBase = this.dna[index];
      const newDnaBase = dnaBases.filter(base => base != oldBase);
      let newBase = newDnaBase[Math.floor(Math.random() * 2)];
      this.dna.splice(index, 1, newBase);
    },
    toPercentage(dnaMatches){
    let percentage = (dnaMatches/15).toFixed(2)*100;
    return percentage;
    },
    compareDNA(specimen2){
      let dnaMatches = 0;
      for (let index = 0; index < this.dna.length; index++) {
          if (this.dna[index] === specimen2.dna[index]) {
            dnaMatches += 1;
          }
      } 
      return `specimen #${this.specimenNum} and specimen #${specimen2.specimenNum} have ${this.toPercentage(dnaMatches)}% DNA in common`;
    },
    willLikelySurvive(){
      let dnaSurvival = 0;
      for (let index = 0; index < this.dna.length; index++) {
          if (this.dna[index] === 'C'||this.dna[index] ==='G') {
            dnaSurvival += 1;
          }
      }      
      return(this.toPercentage(dnaSurvival) >= 60);
    }
  }
}

// creating 30 specimen that can survive (at least 60% of the dna strand must be C's of G's)
let pAequorPack = [];
while (pAequorPack.length < 31) {
  const specimen = pAequorFactory(Math.floor(Math.random() * 99999),mockUpStrand());
  if(specimen.willLikelySurvive){
    pAequorPack.push(specimen);
  }
}

console.log(pAequorPack);

//testing
/*const subject1 = pAequorFactory(1,mockUpStrand());*/
/*const subject2 = pAequorFactory(2,mockUpStrand());*/
/*console.log(subject1);*/
/*console.log(subject2);*/

/*subject1.mutate();*/
/*console.log(toPercentage(3));*/
/*console.log(subject1.compareDNA(subject2));*/
/*console.log(subject1.willLikelySurvive(subject1));*/






