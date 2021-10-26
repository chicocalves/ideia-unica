async function tempo(request, response){
      
    //const cepApiSecret = process.env.CEP_API_SECRECT
    const dynamicDate = new Date()

    const cepApiSecret = '05077902'

    //const consultaEnderecoResponse = await fetch(`https://viacep.com.br/ws/${cepApiSecret}/json/`);
    const consultaEnderecoResponse = await fetch(`https://viacep.com.br/ws/${cepApiSecret}/json/`)
    const consultaEnderecoResponseJson = await consultaEnderecoResponse.json()
    const endereco = consultaEnderecoResponseJson.logradouro

    response.setHeader('Cache-Control', 's-maxage=60, state-while-revalidate')

    response.json({
        date: dynamicDate.toGMTString(),
        Endereço: endereco
    })
}

export default tempo