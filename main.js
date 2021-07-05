function factorial(num){
    let product=1;
    for(let j=1;j<=num;j++){
        product=product*j;
    }
    console.log(product);
}
factorial(5);