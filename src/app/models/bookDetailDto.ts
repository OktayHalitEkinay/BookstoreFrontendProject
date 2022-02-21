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
    // authors:Authors[]
    // images:BookImage[]
}