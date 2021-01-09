
function generateError(message: string, code: number): never { // this function never return anything, 
    console.log('message: '+message+' code: ', code);
    throw { message: message, errorCode: code };
    // while (true) {} - infinite loop also never return anything
}

const res =  generateError('An error occurred!', 500);
console.log('res',res);
