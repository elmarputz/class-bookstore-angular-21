export class ErrorMessage {


    constructor (
        public forControl: string, 
        public forValidator: string, 
        public text : string

    ) {}
}

export const BookFormErrorMessages = [

    new ErrorMessage('title', 'required', 'Ein Buchtitel muss angegeben werden')

]
