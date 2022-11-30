const info = require("./plans.json")
const vendors = require("./vendors.json")
const Axios = require('axios')
const uuid = require('uuid')
const checkingAccounts = require('./bank-account.json')

const axios = Axios.create({
    baseURL: "https://app.omie.com.br/api/v1",
})

const prepareBody = (call, payload) => {
    return {
        call: call,
        app_key: "2761867904796",
        app_secret: "253282844324db794aa7228034b47f6c",
        param: [payload]
    }
}


const populatePlans = async () => {
    info.forEach(async (plan, key) => {
        console.log(plan.cabecalho.cDescricao)

        plan.intEditar.cCodIntServ = uuid.v4().substring(0, 18)

        const data = prepareBody('UpsertCadastroServico', plan)

        const response = await axios.post('/servicos/servico/', data).catch(
            await handleErrors({ alias: key, url: '/servicos/servico/', data })
        )

        if (!!response && response.data !== undefined) console.log(response.data)
    })
}


const handleErrors = async ({ alias, url, data }) => {
    let bind = {}

    bind[alias] = setInterval(async () => {
        const response = await axios.post(url, data)
            .then(res => {
                console.log(res.data)
                clearInterval(bind[alias])
            })
            .catch(err => console.log(`Couldn't insert plan ${data.param[0].cabecalho.cDescricao}`))
    }, 2000);

}

const populateVendors = async () => {
    // const promises = vendors.map(async vendor => {
    //     vendor.cCodIntVend = uuid.v4().substring(0, 18)
    //     const data = prepareBody('UpsertCadastroVendedor', vendor)
    //     const response = await axios.post('/vendedores/vendedor/', data).catch(err => console.log('method: populateVendors', err.response.data))
    //     if (!!response.codigo) console.log(`Vendor ${vendor.cNome} incluso.`)
    // })

    // await Promise.all(promises)
    // console.log('Vendedores inclusos.')
    
    while(true){
        vendors[0].cCodIntVend = uuid.v4().substring(0, 18)
        const data = prepareBody('UpsertCadastroVendedor', vendors[0])
        const response = await axios.post('/vendedores/vendedor/', data).catch(err => console.log('method: populateVendors', err.response.data))
        if (!!response && 'codigo' in response) console.log(`Vendor ${vendors[0].cNome} incluso.`)
    }

    // vendors.forEach(async vendor => {
    //     vendor.codInt = uuid.v4().substring(0,18)
    //     const data = prepareBody('IncluirVendedor', vendor)
    //     const response = await axios.post('/geral/vendedores/', data).catch(err => console.log('method: populateVendors', err.response.data))
    //     if(!!response.codigo) console.log('Vendedor incluso.')
    // })
}

const populateCheckingAccounts = async () => {
    checkingAccounts.cCodCCInt = uuid.v4().substring(0, 18)
    const data = prepareBody('IncluirContaCorrente', checkingAccounts)
    const response = await axios.post('/geral/contacorrente/', data).catch(err => console.log('method: populateCheckingAccounts', err.response.data))
    if (!!response.codigo) console.log('Conta corrente inclusa.')
}

const main = async () => {
    const [...responses] = await Promise.all([
        populateVendors(),
        populateCheckingAccounts(),
        populatePlans()
    ])
}

main()
