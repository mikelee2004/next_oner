export default function ClientId( {params} ) {
    return (
        <div>
            <h1> Here is your ID Sir! </h1>
            <p>{params.clientid}</p> 
        </div>

    )
}

// создание динамического URL адреса с помощью парамс и обращения. Это
// выводит на страницу то, что написано в адресной строке. например "localhost:3000/client/privet" выведет текстом privet