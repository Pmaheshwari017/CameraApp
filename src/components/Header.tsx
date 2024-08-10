import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../constant/Color'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation: any = useNavigation()
    return (
        <View style={styles.header}>
            <>
                <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                    <Icon name="grip-lines" size={30} color="white" />
                </TouchableOpacity>
            </>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 20
    },
    flippedIcon: {
        transform: [{ scaleX: -1 }],
    },
    headerText: {
        fontSize: 20,
        color: colors.textPrimary,
        textAlign: 'center',
        flex: 1,
        alignSelf: 'center'
    }
})