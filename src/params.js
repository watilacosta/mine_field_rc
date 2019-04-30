import { Dimensions } from 'react-native'

const params = {
	blockSize: 30,
	borderSize: 5,
	fontSize: 15,
	headerRatio: 0.15, // proporção painel superior na tela 15%
	difficultLevel: 0.1, // '10% dos campos com minas
	
	// Quantidade de colunas disponíveis baseadas no tamanho do bloco
	getColumnsAmount() {
		const width = Dimensions.get('window').width
		return Math.floor(width / this.blockSize)
	},

	// Quantidade de linhas
	getRowsAmount() {
		const totalHeight = Dimensions.get('window').height
		const boardHeight = totalHeight * (1 - this.headerRatio)
		return Math.floor(boardHeight / this.blockSize)
	}
}

export default params