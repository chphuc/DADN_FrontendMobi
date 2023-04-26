import { useState, useEffect } from 'react'
import { View, Text, ScrollView, Button, TextInput } from 'react-native'
import Modal from "react-native-modal";
import NotificationScreenItem from './NotificationScreenItem'

const NotificationScreen = ({ notificationData, thresholdData, postThresholdData }) => {
    const [temperatureContrain, setTemperatureContrain] = useState({})
    const [luxContrain, setLuxContrain] = useState({})
    const [humidityContrain, setHumidityContrain] = useState({})

    const [isShowModal, setIsShowMadal] = useState(false)
    const onPressSetting = () => {
        setIsShowMadal(true)
    }
    const handleSaveSetting = () => {
        postThresholdData('temp', temperatureContrain.minValue, temperatureContrain.maxValue)
        postThresholdData('lux', luxContrain.minValue, luxContrain.maxValue)
        postThresholdData('humidity', humidityContrain.minValue, humidityContrain.maxValue)

        setIsShowMadal(false)
    }
    useEffect(() => {
        if (thresholdData) {
            thresholdData.map(item => {
                if (item.type == 'temp') setTemperatureContrain({
                    title: "Tempeture",
                    minValue: item.min.toString(),
                    maxValue: item.max.toString()
                });
                if (item.type == 'lux') setLuxContrain({
                    title: "Lux",
                    minValue: item.min.toString(),
                    maxValue: item.max.toString()
                });
                if (item.type == 'humidity') setHumidityContrain({
                    title: "Humidity",
                    minValue: item.min.toString(),
                    maxValue: item.max.toString()
                });
            })
        }
    }, [thresholdData])

    return (
        <View style={{ paddingBottom: 0 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}>
                <Button
                    onPress={onPressSetting}
                    title="Setting"
                    color="#000"
                />
            </View>
            {
                temperatureContrain
                    ?
                    <Modal isVisible={isShowModal}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={{ backgroundColor: 'white', padding: 30, borderRadius: 20 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                                    <Text style={{ fontSize: 16, minWidth: 80 }}>{temperatureContrain.title}</Text>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 40 }}>
                                        <TextInput
                                            style={{
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                borderRadius: 5,
                                                paddingHorizontal: 8
                                            }}
                                            keyboardType='numeric'
                                            value={temperatureContrain.minValue}
                                            onChangeText={(e) => setTemperatureContrain((prev) => ({ ...prev, minValue: e }))}
                                        />
                                        <Text style={{ marginHorizontal: 5 }}>-</Text>
                                        <TextInput
                                            style={{
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                borderRadius: 5,
                                                paddingHorizontal: 8
                                            }}
                                            keyboardType='numeric'
                                            value={temperatureContrain.maxValue}
                                            onChangeText={(e) => setTemperatureContrain((prev) => ({ ...prev, maxValue: e }))}
                                        />
                                    </View>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                                    <Text style={{ fontSize: 16, minWidth: 80 }}>{luxContrain.title}</Text>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 40 }}>
                                        <TextInput
                                            style={{
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                borderRadius: 5,
                                                paddingHorizontal: 8
                                            }}
                                            keyboardType='numeric'
                                            value={luxContrain.minValue}
                                            onChangeText={(e) => setLuxContrain((prev) => ({ ...prev, minValue: e }))}

                                        />
                                        <Text style={{ marginHorizontal: 5 }}>-</Text>
                                        <TextInput
                                            style={{
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                borderRadius: 5,
                                                paddingHorizontal: 8
                                            }}
                                            keyboardType='numeric'
                                            value={luxContrain.maxValue}
                                            onChangeText={(e) => setLuxContrain((prev) => ({ ...prev, maxValue: e }))}

                                        />
                                    </View>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                                    <Text style={{ fontSize: 16, minWidth: 80 }}>{humidityContrain.title}</Text>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 40 }}>
                                        <TextInput
                                            style={{
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                borderRadius: 5,
                                                paddingHorizontal: 8
                                            }}
                                            keyboardType='numeric'
                                            value={humidityContrain.minValue}
                                            onChangeText={(e) => setHumidityContrain((prev) => ({ ...prev, minValue: e }))}

                                        />
                                        <Text style={{ marginHorizontal: 5 }}>-</Text>
                                        <TextInput
                                            style={{
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                borderRadius: 5,
                                                paddingHorizontal: 8
                                            }}
                                            keyboardType='numeric'
                                            value={humidityContrain.maxValue}
                                            onChangeText={(e) => setHumidityContrain((prev) => ({ ...prev, maxValue: e }))}

                                        />
                                    </View>
                                </View>
                                <Button
                                    onPress={handleSaveSetting}
                                    title="Save"
                                    color="#87c484"
                                />
                            </View>
                        </View>
                    </Modal>
                    :
                    <Text>Loading ...</Text>
            }
            {
                notificationData ?
                    <ScrollView style={{ height: 550 }}>
                        {notificationData.map(item => {
                            const date = new Date(item.time);
                            const timeString = date.toLocaleTimeString(); // Returns local time string in format HH:MM:SS AM/PM
                            const dateString = date.toLocaleDateString(); // Returns local date string in format MM/DD/YYYY
                            const dateTimeString = `${dateString} ${timeString}`; // Combines date and time strings

                            return ({ title: item.content, type: item.type, time: dateTimeString })
                        }).map((item, index) => (
                            <NotificationScreenItem data={item} key={index} />
                        ))}
                    </ScrollView>
                    :
                    <Text>Loading ...</Text>
            }
        </View>
    )
}

export default NotificationScreen