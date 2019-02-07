import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Button = (props) => {
	const { buttonStyle, textStyle } = styles;
	const { onPress, children } = props;

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	)
};

const styles = {
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	},
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingBottom: 10,
		paddingTop: 10,

	}
}

export default Button