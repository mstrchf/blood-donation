import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet} from 'react-native';

// component imports
import Header from "./components/Header";
import Home from './screens/Home'
import Notifications from './screens/Notifications'

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Notifications/>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 0 : 20,
        flex: 1,
    },
});
