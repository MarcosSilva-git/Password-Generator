import React, { useState } from 'react'
import { Alert } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import * as Clipboard from 'expo-clipboard';

import { Container, Form, FormRow, FormRowText, Switch, Slider, GenerateButton, GenerateButtonText, Result, ResultText } from './src/style'

import Icon from 'react-native-vector-icons/SimpleLineIcons'


export default function App() {
  const [password, setPassword] = useState("A sua senha aparecerá aqui")
  
  const [useUpperLetters, setUseUpperLetters] = useState(true)
  const [useNumbers, setUseNumbers] = useState(true)
  const [useLowerLetters, setUseLowerLetters] = useState(true)
  const [useSymbols, setUseSymbols] = useState(true)

  const [qtdChars, setQtdChars] = useState(10)

  const GenerateRandomPassword = () => {
    let chars = '';

    const UpperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const LowerLetters = UpperLetters.toLowerCase()
    const symbols = '!@#$%^&*(){}_+-=;",.<>/?|]['
    const numbers = '0123456789'

    chars += useUpperLetters ? UpperLetters : ''
    chars += useNumbers ? numbers : ''
    chars += useLowerLetters ? LowerLetters : ''
    chars += useSymbols ? symbols : ''

    if (chars) {
      setPassword(shuffleString(chars, qtdChars))
      return
    }

    Alert.alert("Senha Não Gerada", "Adicione pelo menos uma opção antes de gerar a senha")    
  }

  const copyToClipBoard = async () => {
    await Clipboard.setStringAsync(password.toString());
  }

  const shuffleString = (text, max) => {
    const length = text.length
    let newString = ''

    for (let index = 0; index < max; index++) {
      const position = Math.trunc(Math.random() * length)
      newString += text[position]
    }

    return newString
  }


  return (
    <>
      <StatusBar style='auto' />

      <Container>
        <Icon name="lock" size={120} color="#fff" />

        <Form>
          <FormRow>
            <FormRowText>Letras Maiúsculas</FormRowText>

            <Switch 
              onValueChange={setUseUpperLetters}
              value={useUpperLetters}
            />
          </FormRow>

          <FormRow>
            <FormRowText>Letras minúsculas</FormRowText>

            <Switch 
              onValueChange={setUseLowerLetters}
              value={useLowerLetters}
            />
          </FormRow>

          <FormRow>
            <FormRowText>Números</FormRowText>

            <Switch 
              onValueChange={setUseNumbers}
              value={useNumbers}
            />
          </FormRow>

          <FormRow>
            <FormRowText>Símbolos</FormRowText>

            <Switch 
              onValueChange={setUseSymbols}
              value={useSymbols}
            />
          </FormRow>

          <FormRow last>
            <Slider
              onValueChange={setQtdChars}
              value={qtdChars}
            />
          </FormRow>

          <GenerateButton onPress={GenerateRandomPassword}> 
            <GenerateButtonText> Gerar senha de {qtdChars} caracteres </GenerateButtonText>
          </GenerateButton>
        </Form>

        <Result onPress={copyToClipBoard} visible={password}>
          <ResultText>{password}</ResultText>
        </Result>

      </Container>
    </>
  );
}



