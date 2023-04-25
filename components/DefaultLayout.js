import { View, Text } from 'react-native'
import Navbar from './Navbar'
import HomeScreen from '../screens/HomeScreen'
import NotificationScreen from '../screens/NotificationScreen'
import ControllScreen from '../screens/ControllScreen'

const DefaultLayout = ({ route }) => {
    return (
        <View style={{ paddingTop: 32, paddingHorizontal: 10 }}>
            <Navbar title={route.params.title} />
            <View style={{ paddingVertical: 20 }}>
                {route.params.title == "Home" && <HomeScreen />}
                {route.params.title == "Notification" && <NotificationScreen />}
                {route.params.title == "Controll" && <ControllScreen />}
            </View>
        </View>
    )
}

export default DefaultLayout