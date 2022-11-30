const columns = `Charge_Id;Status;Amount_In_Cents;Paid_Amount_In_Cents;Installments;Refunded_Amount;Paid_Date;Code;Currency;Payment_Method;Created_Date;Canceled_Date;NSU;TID;Acquirer;Acquirer_Return_Code;Acquirer_Message;Acquirer_Authorization_Code;Card_Brand;Masked_Card;Holder_Name;Expiration_Date;Nosso_Numero;Bar_code;Boleto_Credit_Date;Customer_Name;Customer_Document;Customer_Email;Metadata;Platform;Antifraud_Status;QR_Code_Url;Expires_At;Transaction_Id;Pix_Identifier_End_To_End;Pix_Payer_Name;Pix_Payer_Documment;Pix_Payer_Documment_Type;Pix_Payer_Bank_Name;Pix_Payer_Branch_Code;Pix_Payer_Account_Number;`

const strings = `ch_N8PYBnGtztRxVLER;canceled;13900;13900;1;13900;2022-09-12 15:35:52;eaf87cf8-f1a2-01;BRL;credit_card;2022-09-12 15:35:51;2022-09-19 20:59:13;848569987;848569987;pagarme;0000;Transação aprovada com sucesso;026136;visa;490144****5900;JULIA SANTOS BRAGA ;4/2029;;;;Carla;46805661000195;paradadolanche2103@gmail.com;{"nCodCtr":"7633792946"`

const merged = columns.split(';').map((column, index) =>  `${column} = ${strings.split(';')[index]}` )

console.log(merged)
