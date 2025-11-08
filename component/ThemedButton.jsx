import { Pressable, StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors'


const ThemedButton = ({ style, ...props }) => {
    return (
        <Pressable
            style={({ pressed }) => [styles.btn, style, pressed && styles.pressed]}
            {...props}
        />
    )
}

export default ThemedButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 20,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.7,
    }
})