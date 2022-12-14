import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { myColors } from '../../styles/Colors';

export default function Home() {
    const [theme, setTheme] = useState('light')
    return (
        <ThemeContext.Provider value = {theme}>
            <View style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#000'}]}>
            <StatusBar style="auto" />
            <Switch
                value = {theme === 'light'}
                onValueChange = {()=> setTheme(theme === 'light' ? 'dark' : 'light')}
            />
            </View>
        </ThemeContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.light,
        alignItems: 'center',
        justifyContent: 'center',
    },
});