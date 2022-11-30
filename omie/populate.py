import json
from urllib import request
import uuid
import requests

PLANS = json.load(open('./plans.json'))
VENDORS = json.load(open('./vendors.json'))
CHECKING_ACCOUNTS = json.load(open('./bank-account.json'))

SESSION = requests.Session()
BASE_URL="https://app.omie.com.br/api/v1"

def prepare_body (call, payload):
    return {
        'call': call,
        'app_key': "2968591698072",
        'app_secret': "ce23e8e2864089ed151a8be67ff472ff",
        'param': [payload]
    }

def omie_instance(data, URI):
    response = SESSION.post(f'{BASE_URL}{URI}', json=data)
    print(f"RESPONSE: {response.text} - {response.status_code}")
    if(response.status_code == 500):
        print(f"ERROR: {response.text}, DATA: {data['param'][0]['cabecalho']['cDescricao']}")
        omie_instance(data, URI)
    pass

def populate_plans():
    for plan in PLANS:
        plan['intEditar']['cCodIntServ'] = str(uuid.uuid4())[:13]
        omie_instance(prepare_body('UpsertCadastroServico', plan), '/servicos/servico/')
    pass

def populate_vendors():
    for vendor in VENDORS:
        print(f"VENDOR: {vendor}")
        omie_instance(prepare_body('UpsertCadastroVendedor', vendor), '/vendedores/vendedor/')
    pass

def populate_checking_accounts():
    for checking_account in CHECKING_ACCOUNTS:
        checking_account['cCodCCInt'] = str(uuid.uuid4())[:13]
        print(f"CHECKING ACCOUNT: {checking_account}")
        omie_instance(prepare_body('IncluirContaCorrente', checking_account), '/geral/contacorrente/')
    pass


if __name__ == '__main__':
    populate_checking_accounts()
    populate_plans()
    populate_vendors()
