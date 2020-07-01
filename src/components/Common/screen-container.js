import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ThemeContext } from '../../provider/themes-provider'

export default function ScreenContainer({children, style}) {

    const themeContext = useContext(ThemeContext)

    const theme = themeContext.theme

    return (
        <View style={{...style, backgroundColor: theme.backgroundColor}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({})
