export interface BookDetailDto{
    bookId:number
    publisherId:number
    languageId:number
    title:string
    isbn13:string
    numberOfPages:number
    publicationDate:Date
    languageCode:string
    languageName:string
    publisherName:string
    price:number
    stock:number
    // authors:Authors[]
    // images:BookImage[]
}