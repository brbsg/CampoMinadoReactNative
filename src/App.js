import React, {useState} from 'react';
import {StyleSheet, View, Alert, Text} from 'react-native';

import LevelSelection from "./screens/LevelSelection";
import Header from './components/Header'
import Params from './Params'
import MineField from './components/MineField'
import  {

  createBoard,
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
  fields
 } from './Functions'

export default  () => {

  minesAmount = () =>{
    const cols = Params.getColumnsAmount()
    const rows = Params.getRowsAmount()
    return Math.ceil(cols * rows * Params.difficultLevel)
  }

  createState = () => {
    //const board = cloneBoard(state.board)
    const cols = Params.getColumnsAmount()
    const rows = Params.getRowsAmount()
    return {
      board: createBoard(rows, cols),
      won: false,
      lost: false,
      showLevelSelection: false
    }
  }

  

  onOpenField = ( row, column) => {
    const cols = Params.getColumnsAmount()
    const rows = Params.getRowsAmount()

    let board = cloneBoard(state.board)
    const openedLength = fields(board).filter(field => field.opened).length

    if( openedLength === 0){
      board = createMinedBoard(rows, cols, minesAmount(), row, column)
      openField(board, row, column)  
    }else{
      openField(board, row, column)
    }
    var lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost){
        showMines(board)
        Alert.alert('VOCÊ PERDEU!','Não fique achando que você não consegue, tente denovo e tenha certeza!',[{text: 'OK', onPress: () => setState(createState())}])
    }
    if(won){
      Alert.alert('PARABÉNS','Você Ganhou')
    }
    setState({...state, board, lost, won})
    
  }



  onSelectField = (row, column) => {
    const board = cloneBoard(state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if(won){
      Alert.alert('PARABÉNS','Você Ganhou')
    }

    setState({...state, board, won})
  }

  onLevelSelected = level => {
    Params.difficultLevel = level
    setState(createState())
  }


  const cols = Params.getColumnsAmount()
  const rows = Params.getRowsAmount()

  const [stateTimer, setStateTimer] = useState(
    {
     timer: null, 
     number: 0,
    })

  const [state, setState] = useState(
     {
     board: createBoard(rows, cols, minesAmount()),
     won: false,
     lost: false,
     showLevelSelection: true
     })

  // if(state.showLevelSelection = true){
  //   startStopTimer()
  //   setState({showLevelSelection: false})
  // }   

  return(
      <View style={styles.container}>
        <LevelSelection isVisible={state.showLevelSelection}
        onLevelSelected={onLevelSelected}
        onCancel={() => setState({...state, showLevelSelection: false})}/>
        <Header onChangeTimer={stateTimer.number.toFixed(2)} onFlagPress={() => setState({...state, showLevelSelection: true})} flagsLeft={minesAmount() - flagsUsed(state.board)} onNewGame={() => setState(createState())} />
        {/* <View ><Text style={{fontSize:10}}>{JSON.stringify(state)}</Text></View> */}
        <View style={styles.board}>
          <MineField board={state.board} onOpenField={onOpenField} onSelectField={onSelectField} />
        </View>
        <View style={styles.board}><Text>Version: 3.0.2</Text></View>
      </View>
  )
}//export default

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
})
