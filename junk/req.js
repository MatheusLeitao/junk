const clients = [
    [2467205650, 2503165284],
    [2467181536, 5564852431],
    [5589021650, 5589025473],
    [5589261542, 5589269152],
    [5589247696, 5589304534],
    [5594794193, 5594794329],
    [5594919428, 5594919772],
    [5594948310, 5594948626],
    [5594989564, 5594990039],
    [5594998552, 5594998888],
    [5595009488, 5595009611],
    [5595011829, 5595011917],
    [5595013783, 5595014026],
    [5595015876, 5595016474],
    [5599815424, 5599815541],
    [5599980752, 5599980999],
    [5600079701, 5600080635],
    [5600098801, 5600099016],
    [5600102333, 5600102887],
    [5600107975, 5600108130],
    [5600120099, 5600120158],
    [5601794943, 5601796954],
    [5601804810, 5601804990],
    [5601907905, 5601908316],
    [5601909607, 5601909696],
    [5601911494, 5601911674],
    [5602560941, 5602561181],
    [5602603986, 5602604498],
    [5603128880, 5603130182],
    [5603216387, 5603216553],
    [5603221615, 5603222086],
    [5603216387, 5603236758],
    [5603275197, 5603275782],
    [5603279148, 5603279499],
    [5603280786, 5603280970],
    [5603281864, 5603282320],
    [5603284633, 5603285313],
    [5603289067, 5603289203],
    [5603292680, 5603292756],
    [5603297658, 5603297878],
    [5604797113, 5604797414],
    [5604809397, 5604810269],
    [5606724266, 5606724770],
    [5606761479, 5606762260],
    [5606764844, 5606765279],
    [5606766913, 5606769200],
    [5606771348, 5606771606],
    [5606819941, 5606820721],
    [5606833355, 5606833522],
    [5606837211, 5606837628],
    [5651708232, 5651794403]
];


const body = ([clientId, contractId]) => {
    console.log(clientId, contractId)
    return {
        "messageId": "12d1ccdb-eccf-5d3b-a8b8-970610d57662",
        "topic": "ContratoServico.Faturado",
        "event": {
            "cabecalho": {
                "cCodIntCtr": "17cb3092-d3ea",
                "cCodSit": "10",
                "cNumCtr": "2022/11723",
                "cTipoFat": "01",
                "dVigFinal": "03/11/2030",
                "dVigInicial": "03/11/2022",
                "nCodCli": clientId,
                "nCodCtr": contractId,
                "nDiaFat": 3,
                "nValTotMes": 139
            },
            "infAdic": {
                "cCidPrestServ": "VITORIA (ES)",
                "cCodCateg": "1.01.96",
                "cContato": "",
                "nCodCC": 5544835049,
                "nCodProj": 0,
                "nCodVend": 0
            }
        },
        "author": {
            "email": "thiago.yooga@gmail.com",
            "name": "Thiago Leite",
            "userId": 337910
        },
        "appKey": "2011677654987",
        "appHash": "yooga-03ewyy65",
        "origin": "omie-connect-1.6"
    }
}


const fetchClients = async (webHookBody) => {

    const req = await fetch('http://localhost:3000/interface/omie/webhooks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(webHookBody)
    })

    const res = await req.json();
    console.log(res)
}


const main = async () => {
    console.log('Starting...');
    clients.forEach(async (client) => {
        await fetchClients(body(client));
    })
}

main()