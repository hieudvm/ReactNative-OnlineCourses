import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ThemeContext } from '../../provider/themes-provider'

export default function ThemedText({style, children}) {
    const theme = useContext(ThemeContext).theme
    return (
        <Text style={{...style,color: theme.forcegroundColor}}>
{children}
        </Text>
    )
}

const styles = StyleSheet.create({})
