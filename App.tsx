import React, {useState} from "react";
import {Text, TextInput, Button, View, StyleSheet} from 'react-native';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState<number|null>(null);
  const [erro, setErro] = useState<string>('');

  const somarDoisNum = () => {

    //converte os valores para número
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)){
      setErro('Por favor, insira números válidos');
      setResultado(null);
    }else{
      const soma = n1+n2;
      setResultado(soma);
      setErro('');
    }
  };
  return (
    <View style= {styles.container}>
      <View style={styles.inputConatiner}>
        <Text style={styles.label}>Número 1:</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={num1} onChangeText={setNum1}/>
      </View>

      <View style={styles.inputConatiner}>
        <Text style={styles.label}>Número 2:</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={num2} onChangeText={setNum2}/>
      </View>

      <Button title="Somar" onPress={somarDoisNum}/>

      {erro ? <Text style={styles.error}>{erro}</Text>:null}

      {resultado !== null && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  inputConatiner:{
    marginBottom:20,
  },
  label:{
    fontSize:18,
    marginBottom:5,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: '#888',
    borderWidth: 1,
    paddingLeft:10,
    fontSize:16,
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  error:{
    marginTop:20,
    color:'red',
  }
});
export default App;
 