function countShip(arryOfSheeps) {

    let conuter = 0
    arryOfSheeps.map((sheep) => {
      if (sheep === true) conuter++;
    });
    console.log(conuter)

    return conuter;
    
 
}
countShip([true,false,true,false,false,true]);
