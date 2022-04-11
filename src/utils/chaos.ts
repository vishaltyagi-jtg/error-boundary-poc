
const chaosConfig = {
    isDisable : false,
}


export const createChaos = (level: number = 5, message: string = "Default error message to test error boundary") => {
    const randomValue = Math.random();
    const chaosValue = level/10;
    if(level<0 && level>10){
        throw new Error('level must be between 0 to 10');
    }
    if(randomValue < chaosValue && !chaosConfig.isDisable){
        throw new Error(message);
    }
    return false;
}