class UberPriceCalc{
    constructor(distInKms, timeInMins){
        this.distanceInKms=distInKms
        this.timeInMins=timeInMins
        this.baseFare=10  //in Rupees
        this.costPerKms=3  //in Rupees
        this.costPerMins=1  //in Rupees
    }

    calculatePrice(){
         const distanceCost = this.distanceInKms * this.costPerKms;
         const timeCost = this.timeInMins * this.costPerMins;
         const totalCost = this.baseFare + distanceCost + timeCost;
         return `$${totalCost.toFixed(2)}`;
    }
}

let distance = 17 //kms
let time = 38 //mins
let ride = new UberPriceCalc(distance,time)
console.log(`the estimated cost of the ride is ${ride.calculatePrice()}`) //99 rupees