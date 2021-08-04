//the never type

function generateError(message: string, code: number): never { //returns never, not even undefined
    throw {message, errorCode: code};
}

generateError('An error occurred!', 500);
