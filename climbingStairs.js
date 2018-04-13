let climbStairs = n => {
    if(n==1) return 1;
    if(n==2) return 2;
    let current = 2; 
    let previous = 1;
    for(let i = 3; i <= n; i++){
        current = previous + current;
        previous = current - previous;
    }
    return current;
    
};