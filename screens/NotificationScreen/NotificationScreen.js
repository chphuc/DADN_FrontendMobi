import { useState } from 'react'
import { View, Text, ScrollView, Button, TextInput } from 'react-native'
import Modal from "react-native-modal";
import NotificationScreenItem from './NotificationScreenItem'

const NotificationScreen = () => {
    const dataInfo = [
        {
            title: "System work well!",
            type: 0,
            time: "18:20"
        },
        {
            title: "Temperature is higher than ideal condition!",
            type: 1,
            time: "18:15"
        },
        {
            title: "System work well!",
            type: 0,
            time: "18:10"
        },
        {
            title: "System work well!",
            type: 0,
            time: "18:05"
        },
        {
            title: "System work well!",
            type: 0,
            time: "18:00"
        },
        {
            title: "System work well!",
            type: 0,
            time: "17:55"
        },
        {
            title: "System work well!",
            type: 0,
            time: "17:50"
        },
        {
            title: "System work well!",
            type: 0,
            time: "17:50"
        },
        {
            title: "System work well!",
            type: 0,
            time: "17:50"
        },
    ]
    const dataContrains = [
        {
            title: "Tempeture",
            minValue: "27",
            maxValue: "32"
        },
        {
            title: "Light",
            minValue: "27",
            maxValue: "32"
        },
        {
            title: "Humidity",
            minValue: "27",
            maxValue: "32"
        },
        {
            title: "PH",
            minValue: "27",
            maxValue: "32"
        },
        {
            title: "Oxygen",
            minValue: "27",
            maxValue: "32"
        },
    ]
    const [isShowModal, setIsShowMadal] = useState(true)
    const onPressSetting = () => {
        setIsShowMadal(true)
    }
    const handleSaveSetting = () => {
        setIsShowMadal(false)
    }
    return (
        <View style={{ paddingBottom: 0 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}>
                <Button
                    onPress={onPressSetting}
                    title="Setting"
                    color="#000"
                />
            </View>
            <Modal isVisible={isShowModal}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: 'white', padding: 30, borderRadius: 20 }}>
                        {
                            dataContrains.map((item, index) => (
                                <View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                                    <Text style={{ fontSize: 16, minWidth: 80 }}>{item.title}</Text>
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
                                            value={item.minValue}
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
                                            value={item.maxValue}
                                        />
                                    </View>
                                </View>
                            ))
                        }
                        <Button
                            onPress={handleSaveSetting}
                            title="Save"
                            color="#87c484"
                        />
                    </View>
                </View>
            </Modal>
            <ScrollView style={{ height: 550 }}>
                {dataInfo.map((item, index) => (
                    <NotificationScreenItem data={item} key={index} />
                ))}
            </ScrollView>
        </View>
    )
}

export default NotificationScreen