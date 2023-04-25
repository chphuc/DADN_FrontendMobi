import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const NotificationScreenItem = ({ data }) => {
    const navigation = useNavigation();

    let image
    if (data.type == 0) image = require("../../assets/success.png")
    if (data.type == 1) image = require("../../assets/warn.png")

    const handlePressItemWarn = () => {
        navigation.navigate("Controll")
    }
    return (
        <View>
            {
                data.type == 0 ?
                    <View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#cff2ce', borderRadius: 15 }}>
                            <View>
                                <Image
                                    style={{ width: 60, height: 60 }}
                                    source={image}
                                />
                            </View>
                            <Text>{data.title}</Text>
                        </View>
                        <View>
                            <Text style={{ textAlign: 'right' }}>{data.time}</Text>
                        </View>
                    </View>
                    :
                    <TouchableOpacity onPress={handlePressItemWarn}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#f7efc6', borderRadius: 15, paddingHorizontal: 15, paddingVertical: 10 }}>
                            <View>
                                <Image
                                    style={{ width: 30, height: 30 }}
                                    source={image}
                                />
                            </View>
                            <Text style={{ marginLeft: 15 }}>{data.title}</Text>
                        </View>
                        <View>
                            <Text style={{ textAlign: 'right' }}>{data.time}</Text>
                        </View>
                    </TouchableOpacity>
            }
        </View>
    )
}

export default NotificationScreenItem