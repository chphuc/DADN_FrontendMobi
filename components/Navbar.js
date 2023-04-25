import { useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const Navbar = ({ title }) => {
    const navigation = useNavigation();
    const screenHeight = Dimensions.get('window').height;
    const dataNavUp = [
        {
            title: "Home",
            icon: <Icon name="home" size={25} />,
            nameNavigation: 'Home'
        },
        {
            title: "Notification",
            icon: <Icon name="message1" size={25} />,
            nameNavigation: 'Notification'
        },
        {
            title: "Controll",
            icon: <Icon name="tool" size={25} />,
            nameNavigation: 'Controll'
        },
    ]
    const dataNavDown = [
        {
            title: "Logout",
            icon: <Icon name="logout" size={25} />,
            nameNavigation: 'SignIn'
        }
    ]
    const [isShowNav, setIsShowNav] = useState(false)
    const handleClickNav = () => {
        setIsShowNav((prev) => (!prev))
    }
    const handleClickNavItem = (value) => {
        navigation.navigate(value)
        setIsShowNav(false)
    }
    return (
        <View style={{ zIndex: 999 }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Icon onPress={handleClickNav} style={{ position: 'absolute', zIndex: 10 }} name="menuunfold" size={25} />
                <Text style={{ width: '100%', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>{title}</Text>
            </View>
            <View style={{ position: 'absolute', top: 0, left: isShowNav ? 0 : '-100%', width: '80%', height: screenHeight, backgroundColor: 'white' }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Icon style={{ paddingTop: 6, paddingRight: 6 }} onPress={handleClickNav} name="close" size={25} />
                </View>
                <View>
                    {
                        dataNavUp.map((item, index) => (
                            <TouchableOpacity onPress={() => handleClickNavItem(item.nameNavigation)} key={index}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 10 }} >
                                    <View style={{ minWidth: 40 }}>
                                        {item.icon}
                                    </View>
                                    <Text style={{ fontSize: 18 }}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={{ borderTopWidth: 2, marginVertical: 5 }}></View>
                <View>
                    {
                        dataNavDown.map((item, index) => (
                            <TouchableOpacity onPress={() => handleClickNavItem(item.nameNavigation)} key={index}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 10 }} >
                                    <View style={{ minWidth: 40 }}>
                                        {item.icon}
                                    </View>
                                    <Text style={{ fontSize: 18 }}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

export default Navbar