import React, { useState } from "react";
import Flag from "react-world-flags";
import { Container, Wrapper, Div, Label, Btn, Span } from "./styles";
import { getCryptoPrice } from "../../services/api";

export default function MainPage() {
  const [convertedValue, setConvertedValue] = useState(""); // Quantidade e moeda
  const [amountInCrypto, setAmountInCrypto] = useState(""); // Resultado e criptomoeda
  const [errorMessage, setErrorMessage] = useState(""); // Mensagem de erro
  const [namecripto, setNameCripto] = useState(""); // Nome da criptomoeda

  const handleSubmit = async (event) => {
    event.preventDefault();

    const quantity = event.target.quant.value;
    const cryptoName = event.target.cripto.value.toLowerCase(); // Garantir que o nome da cripto está em minúsculas
    const currency = event.target.currency.value;

    try {
      const response = await getCryptoPrice(cryptoName, currency);
      const cryptoPrice = response[cryptoName][currency.toLowerCase()];

      if (!cryptoPrice) {
        throw new Error("Preço da criptomoeda não disponível.");
      }

      const totalCrypto = (quantity / cryptoPrice).toFixed(6);

      setConvertedValue(`${quantity} ${currency}`);
      setAmountInCrypto(`${totalCrypto} ${cryptoName.toUpperCase()}`);
      setErrorMessage(""); // Limpa a mensagem de erro se bem-sucedido
      setNameCripto(cryptoName); // Recebe o nome da cripto
    } catch (error) {
      setConvertedValue("");
      setAmountInCrypto("");
      setErrorMessage("Cripto não encontrada ou erro ao buscar preço."); // Mensagem de erro mais específica
      setNameCripto("");
    }
  };

  return (
    <Container>
      <header>
        <h1>Conversor de Criptomoedas</h1>
      </header>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <Div>
            <Label>
              Valor
              <input type='number' id='quant' name='quant' required />
            </Label>
          </Div>
          <Div style={{ borderBottom: "2px solid #333" }}>
            <Label>
              BRL
              <Flag code='BR' alt='Brasil' style={{ width: "50px", height: "30px" }} />
              <input type='radio' id='brl' name='currency' value='BRL' defaultChecked />
            </Label>
            <Label>
              USD
              <Flag
                code='US'
                alt='Estados Unidos'
                style={{ width: "50px", height: "30px", marginLeft: "5px" }}
              />
              <input type='radio' id='usd' name='currency' value='USD' />
            </Label>
          </Div>
          <Div>
            <Label>
              <input type='text' id='cripto' name='cripto' placeholder='Nome da cripto' required />
            </Label>
          </Div>
          <Div>
            <Btn type='submit'>Converter</Btn>
          </Div>
          <Div>
            <Span id='quantidade'>{convertedValue}</Span>
            <Span id='resultado'>{amountInCrypto}</Span>

            {errorMessage && (
              <Span id='erro' style={{ width: "100%", justifyContent: "center", color: "red" }}>
                {errorMessage}
              </Span>
            )}
          </Div>
        </form>
        {namecripto && (
          <Div style={{ height: "auto" }}>
            <a
              href={`https://coinmarketcap.com/pt-br/currencies/${namecripto}/`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Span style={{ fontSize: "12px", color: "blue" }}>
                {`https://coinmarketcap.com/pt-br/currencies/${namecripto}/`}
              </Span>
            </a>
          </Div>
        )}
      </Wrapper>
    </Container>
  );
}
